import { ActionType } from '../action-types/index';
import { MusicItemAction } from '../actions/musicItem';

interface Music {
    id: string,
    title: string,
    price: number,
    description: string
}

interface MusicItemState {
    loading: boolean;
    error: string | null;
    data: any
}

const initialState = {
    loading: false,
    error: null,
    data: {}
}

const musicItemReducer = (state: MusicItemState = initialState,
    action: MusicItemAction): MusicItemState => {
    switch (action.type) {
        case ActionType.FETCH_MUSIC_ITEM:
            return {
                loading: true,
                error: null,
                data: {}

            };
        case ActionType.FETCH_MUSIC_ITEM_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload
            };
        case ActionType.FETCH_MUSIC_ITEM_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: []
            };
        default:
            return state;
    }
}

export default musicItemReducer;