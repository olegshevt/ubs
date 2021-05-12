import { ActionType } from '../action-types/index';
import { MusicAction } from '../actions/music';

interface Music {
    id: string,
    title: string,
    price: number,
    description: string
}

interface MusicState {
    loading: boolean;
    error: string | null;
    data: Music[]
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const musicReducer = (state: MusicState = initialState,
    action: MusicAction): MusicState => {
    switch (action.type) {
        case ActionType.FETCH_MUSIC:
            return {
                loading: true,
                error: null,
                data: []
            };
        case ActionType.FETCH_MUSIC_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload
            };
        case ActionType.FETCH_MUSIC_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: []
            };
        default:
            return state;
    }
}

export default musicReducer;