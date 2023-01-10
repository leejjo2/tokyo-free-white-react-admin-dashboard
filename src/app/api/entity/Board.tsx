import React from "react";

class Board {
    id:string;
    boardNo: string;
    writerId: string;
    registerTime: string;
    modificationTime: string;
    title: string;
    content: string;


    constructor(id: string, boardNo: string, writerId: string, registerTime: string, modificationTime: string, title: string, content: string) {
        this.id = id;
        this.boardNo = boardNo;
        this.writerId = writerId;
        this.registerTime = registerTime;
        this.modificationTime = modificationTime;
        this.title = title;
        this.content = content;
    }

    static fromDomain(domain: Board): Board {
        const board = new Board(
            domain.id,
            domain.boardNo,
            domain.writerId,
            domain.registerTime,
            domain.modificationTime,
            domain.title,
            domain.content
        )
        return board;
    }

    static new(): Board {
        return new Board('','', '', '', '', '', '');
    }

}

export default Board;