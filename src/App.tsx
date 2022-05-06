import React, {useEffect} from 'react';
import './App.css';
import Loader from './components/loader-status/Loader';
import {useAppDispatch, useAppSelector} from './store/state';
import {getAllHeroes} from "./store/heroesRedusers";
import HeroesList from './components/HeroesList/HeroesList';
import {Route, Routes} from "react-router-dom";
import DescriptionHero from "./components/pop-up-window/DescriptionHero";
import {PATH} from "./components/utils/routes";

function App() {
    const state = useAppSelector(state => state.features)
    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log("uesEffect done")
        dispatch(getAllHeroes())
    }, [])
    return (
        <div>
            {state.status === 'loading' && <Loader/>}
            <Routes>
                <Route path={PATH.MAIN_ROUTE} element={<HeroesList/>}/>
                <Route path='hero/:id' element={<DescriptionHero/>}/>
            </Routes>
        </div>
    );
}

export default App;
