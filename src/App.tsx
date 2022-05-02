import React, {useEffect} from 'react';
import './App.css';
import Loader from './components/loader-status/Loader';
import {useAppDispatch, useAppSelector} from './store/state';
import {getAllHeroes} from "./store/heroesRedusers";
import HeroesList from './components/HeroesList/HeroesList';

function App() {
    const state = useAppSelector(state => state.features)
    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log("uesEffect done")
        dispatch<any>(getAllHeroes())
    }, [])
    return (
        <div>
            {state.status === 'loading' && <Loader/>}
            <HeroesList/>
        </div>
    );
}

export default App;
