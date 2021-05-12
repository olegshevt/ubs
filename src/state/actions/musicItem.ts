import { ActionType } from '../action-types/index';

interface Music {
    id: string,
    title: string,
    price: number,
    description: string
}

interface FetchMusicItemAction {
    type: ActionType.FETCH_MUSIC_ITEM
}

interface FetchMusicItemSuccessAction {
    type: ActionType.FETCH_MUSIC_ITEM_SUCCESS;
    payload: any;
}

interface FetchMusicItemErrorAction {
    type: ActionType.FETCH_MUSIC_ITEM_ERROR;
    payload: string;
}

export type MusicItemAction = FetchMusicItemAction | FetchMusicItemSuccessAction | FetchMusicItemErrorAction;
