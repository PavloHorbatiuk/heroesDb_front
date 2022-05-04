import {authAPI} from '../api/api';
import {setStatusAC, setStatusACType} from './LoaderRedusers';
import {IGlobalState} from './state';
import {ThunkAction} from 'redux-thunk';
import {StateHero} from "../components/HeroesList/CreateHero";

enum ACTIONS_TYPE {
    SET_HEROES_ALL = 'SET/HEROES/ALL',
}

export interface AllHeroesType {
    id: number;
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    image: string;
}

export type InitialStateType = {
    heroesData: Array<AllHeroesType>;
};
const initialState = {
    heroesData: [],
};

export const HeroesReducers = (
    state: InitialStateType = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_HEROES_ALL:
            return {...state, heroesData: action.payload};
        default:
            return state;
    }
};

export const setAllHeroesAC = (data: Array<AllHeroesType>) => ({
    type: ACTIONS_TYPE.SET_HEROES_ALL,
    payload: data
} as const);

export const getAllHeroes = (): ThunkType => async (dispatch) => {
    dispatch(setStatusAC('loading'));
    try {
        const heroes = await authAPI.getAll();
        const {status, data, statusText} = heroes;
        status === 200 ? dispatch(setAllHeroesAC(data)) : console.log(statusText);
        dispatch(setStatusAC('succeeded'));

    } catch (e) {
        alert(e);
    }
};

export const createHero = (values: any): ThunkType => async (dispatch) => {
    dispatch(setStatusAC('loading'))
    try {
        const hero = await authAPI.create(values);
        const {status} = hero
        // status === 200 ? alert("succeeded") : console.log("good")
        alert("File Upload success");

        dispatch(setStatusAC('succeeded'));
    } catch (e) {
        console.log(e)
    }
}
export const deleteHero = (id: number): ThunkType => async (dispatch) => {
    dispatch(setStatusAC('loading'))
    try {
        const hero = await authAPI.delete(id);
        const {status} = hero
        alert("Hero deleted success");
        dispatch(setStatusAC('succeeded'));
    } catch (e) {
        console.log(e)
    }
}

export type ThunkType = ThunkAction<void,
    IGlobalState,
    unknown,
    CommonActionType>;
type CommonActionType = ActionsType;

export type setAllHeroesACType = ReturnType<typeof setAllHeroesAC>;

export type ActionsType = setAllHeroesACType | setStatusACType;
