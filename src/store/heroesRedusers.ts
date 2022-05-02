import {authAPI} from '../api/api';
import {setStatusAC, setStatusACType} from './LoaderRedusers';
import {IGlobalState} from './state';
import {ThunkAction} from 'redux-thunk';
import {error} from 'console';
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
};

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
export const createHeroAC = (values: StateHero) => ({})

export const getAllHeroes = (): ThunkType => async (dispatch) => {
    dispatch(setStatusAC('loading'));
    try {
        const heros = await authAPI.getAll();
        const {status, data, statusText} = heros;
        status === 200 ? dispatch(setAllHeroesAC(data)) : console.log(statusText);
        dispatch(setStatusAC('succeeded'));
        console.log(data)
    } catch (e) {
        alert(e);
    }
};

export const createHero = (values: StateHero): ThunkType => async (dispatch) => {
    dispatch(setStatusAC('loading'))
    try {
        const hero = await authAPI.create(values);
        const {status} = hero
        status === 200 ? alert("secceeded") : console.log("good")
        dispatch(setStatusAC('succeeded'));

    } catch (e) {
        alert(e);
    }
}

export type ThunkType = ThunkAction<void,
    IGlobalState,
    unknown,
    CommonActionType>;
type CommonActionType = ActionsType;

export type setAllHeroesACType = ReturnType<typeof setAllHeroesAC>;

export type ActionsType = setAllHeroesACType | setStatusACType;
