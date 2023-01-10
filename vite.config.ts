import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/app/',
  resolve:{
    alias:{
      "~": path.resolve(__dirname, "./src"),
      "@": path.resolve(__dirname, "./public"),
    },
  },
  plugins: [
      react({
            exclude: /\.stories\.(mdx|[tj]sx?)$/,
            include: [/\.tsx?$/, /\.jsx?$/, /\.css$/ ],
            babel: {
              presets: [
                  '@babel/preset-react',
                  '@babel/preset-typescript',
              ],
              plugins:[
                  [ '@babel/plugin-proposal-decorators', {legacy:true}],
                  [ '@babel/plugin-proposal-class-properties', {loose:true}],
                  [ '@babel/plugin-proposal-private-methods', {loose:true}],
                  [ '@babel/plugin-proposal-private-property-in-object', {loose:true}]
              ],
              parserOpts: {plugins: ['decorators-legacy']},
            },
          }),
  ],
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:8082',
        rewrite: path => path.replace('/api', ''),
          //@ts-ignore
        configure: proxy => proxy.on('proxyReq', proxy => console.log(`-> ${proxy.protocol}//${proxy.host}${proxy.port}${proxy.path}`)),
      },
    }
  }
});
