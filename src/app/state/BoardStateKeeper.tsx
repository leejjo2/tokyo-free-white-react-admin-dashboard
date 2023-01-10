import BoardSeekApiStub from "../api/BoardSeekApiStub";
import {makeAutoObservable, runInAction} from "mobx";
import Board from "../api/entity/Board";
import BoardRdo from "../api/entity/sdo/BoardRdo";

class BoardStateKeeper {

    private static _instance: BoardStateKeeper;

    private readonly boardSeekApi: BoardSeekApiStub;

    boardRdo: BoardRdo | null | undefined;

    static get instance() {
        if (!BoardStateKeeper._instance) {
            BoardStateKeeper._instance = new BoardStateKeeper();
        }
        return BoardStateKeeper._instance;
    }

    constructor(
        boardSeekApi: BoardSeekApiStub = BoardSeekApiStub.instance,
    ) {
        this.boardSeekApi = boardSeekApi;
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async findBoardList(): Promise<BoardRdo> {
        const boardRdo = await this.boardSeekApi.findBoardList();
        console.log("!!" + boardRdo);
        runInAction(() => this.boardRdo = Object.assign(new BoardRdo(boardRdo.boards)));
        return boardRdo;
    }
}

export default BoardStateKeeper;