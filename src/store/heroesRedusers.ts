import {authAPI} from '../api/api';
import {setStatusAC, setStatusACType} from './LoaderRedusers';
import {TypedThunk} from './state';
import {ParamsType} from "../components/pop-up-window/DescriptionHero";


enum ACTIONS_TYPE {
    SET_HEROES_ALL = 'SET/HEROES/ALL',
    DELETE_HERO = 'DELETE/HERO',
    GET_ONE_HERO = 'GET/ONE/HER'
}

export interface HeroType {
    id: string;
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    image: string;
}

export type InitialStateType = {
    heroesData: Array<HeroType>;
    hero: HeroType
};
const initialState = {
    heroesData: [],
    hero: {} as HeroType
};

export const HeroesReducers = (
    state: InitialStateType = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.GET_ONE_HERO:
            return {...state, hero: action.payload}
        case ACTIONS_TYPE.SET_HEROES_ALL:
            return {...state, heroesData: action.payload};
        case ACTIONS_TYPE.DELETE_HERO:
            return {...state, heroesData: state.heroesData.filter(hero => hero.id !== action.payload)}
        default:
            return state;
    }
};

export const setAllHeroesAC = (data: Array<HeroType>) => ({type: ACTIONS_TYPE.SET_HEROES_ALL, payload: data} as const);
export const deleteHeroAC = (id: string) => ({type: ACTIONS_TYPE.DELETE_HERO, payload: id} as const);
export const getOneHeroAC = (data: HeroType) => ({type: ACTIONS_TYPE.GET_ONE_HERO, payload: data} as const);

export const getAllHeroes = (): TypedThunk => async (dispatch) => {
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

export const createHero = (values: any): TypedThunk => async (dispatch) => {
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
export const deleteHero = (id: string): TypedThunk => async (dispatch) => {
    dispatch(setStatusAC('loading'))
    try {
        const hero = await authAPI.delete(id);
        const {status, data} = hero
        dispatch(deleteHeroAC(id));
        // const heroes =
        //     alert("Hero deleted success");
        // dispatch(de)
        dispatch(setStatusAC('succeeded'));
    } catch (e) {
        console.log(e)
    }
}
export const getHero = (id: number): TypedThunk => async (dispatch) => {
    dispatch(setStatusAC('loading'))
    try {
        const hero = await authAPI.getOne(id);
        const {status, data} = hero
        dispatch(getOneHeroAC(data));
        // const heroes =
        //     alert("Hero deleted success");
        // dispatch(de)
        dispatch(setStatusAC('succeeded'));
    } catch (e) {
        console.log(e)
    }
}


export type setAllHeroesACType = ReturnType<typeof setAllHeroesAC>;
export type deleteHeroACType = ReturnType<typeof deleteHeroAC>;
export type getOneHeroACACType = ReturnType<typeof getOneHeroAC>;

export type ActionsType = setAllHeroesACType | setStatusACType | deleteHeroACType | getOneHeroACACType;
