import axios from 'axios';
import { ActionType } from '../action-types';
import { MusicAction } from '../actions/music';
import { MusicItemAction } from '../actions/musicItem';
import { Dispatch } from 'redux';
import Music from '../../models/music';

export const fetchMusic = () => {
    return async (dispatch: Dispatch<MusicAction>) => {
        dispatch({
            type: ActionType.FETCH_MUSIC
        });

        try {
            const { data } = await axios.get('https://fakestoreapi.com/products',
                {});

            const loadedMusic = [];
            for (const key in data) {
                loadedMusic.push(new Music(
                    key,
                    data[key].title,
                    data[key].price,
                    data[key].description
                ))
            }
            dispatch({
                type: ActionType.FETCH_MUSIC_SUCCESS,
                payload: loadedMusic
            });

        } catch (err) {
            dispatch({
                type: ActionType.FETCH_MUSIC_ERROR,
                payload: err.message
            });
        }
    }
}

export const fetchMusicItem = (id: string) => {
    return async (dispatch: Dispatch<MusicItemAction>) => {
        dispatch({
            type: ActionType.FETCH_MUSIC_ITEM
        });

        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)

            dispatch({
                type: ActionType.FETCH_MUSIC_ITEM_SUCCESS,
                payload: data
            });

        } catch (err) {
            dispatch({
                type: ActionType.FETCH_MUSIC_ITEM_ERROR,
                payload: err.message
            });
        }
    }
}