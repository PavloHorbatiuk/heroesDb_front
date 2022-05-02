import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {StatusReducers} from './LoaderRedusers';
import {HeroesReducers} from './heroesRedusers';

const reducers = combineReducers({
    heroes: HeroesReducers,
    features: StatusReducers,
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type IGlobalState = ReturnType<typeof reducers>;
export const useAppSelector: TypedUseSelectorHook<IGlobalState> = useSelector;
export const store = createStore(reducers, applyMiddleware(thunk));
