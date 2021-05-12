import { ActionType } from '../action-types/index';

interface FetchMusicAction {
    type: ActionType.FETCH_MUSIC
}

interface FetchMusicSuccessAction {
    type: ActionType.FETCH_MUSIC_SUCCESS;
    payload: Array<any>;
}

interface FetchMusicErrorAction {
    type: ActionType.FETCH_MUSIC_ERROR;
    payload: string;
}

export type MusicAction = FetchMusicAction | FetchMusicSuccessAction | FetchMusicErrorAction;
