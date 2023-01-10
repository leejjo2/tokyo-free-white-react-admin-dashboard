import Board from "./entity/Board";
import axios, {AxiosResponse} from "axios";
import BoardRdo from "./entity/sdo/BoardRdo";

class BoardSeekApiStub {

    private static _instance: BoardSeekApiStub;

    static get instance() {
        if (!BoardSeekApiStub._instance) {
            BoardSeekApiStub._instance = new BoardSeekApiStub();
        }
        return BoardSeekApiStub._instance;
    }

    async findBoardList() :Promise<BoardRdo>{
        return axios.post('/api/board/find-all-board-list',)
                .then((res) =>{
                  return res.data})
                .catch(error => error);
    }
}

export default BoardSeekApiStub;