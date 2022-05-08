import React, {useEffect} from 'react';
import './App.css';
import Loader from './components/loader-status/Loader';
import {useAppDispatch, useAppSelector} from './store/state';
import {getAllHeroes} from "./store/heroesRedusers";
import HeroesList from './components/HeroesList/HeroesList';
import {Route, Routes} from "react-router-dom";
import {PATH} from "./components/utils/routes";
import {EditHero} from "./components/HeroesList/editHero";
import TableInfo from './components/HeroesList/TableInfo';
import {CreateHero} from "./components/HeroesList/CreateHero";
import ImageFeatures from "./components/HeroesList/ImageFeatures";

function App() {
    const statusLodaer = useAppSelector(state => state.features.status)
    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log("uesEffect done")
        dispatch(getAllHeroes())
    }, [])
    return (
        <div>
            {statusLodaer === 'loading' && <Loader/>}
            <Routes>
                <Route index element={<HeroesList/>}/>
                <Route path={PATH.MAIN_ROUTE} element={<HeroesList/>}/>
                <Route path={PATH.HERO_ROUTE} element={<TableInfo/>}/>
                <Route path={PATH.EDIT_HERO} element={<EditHero/>}/>
                <Route path={PATH.CREATE_HERO} element={<CreateHero/>}/>
                <Route path={PATH.UPDATE_IMAGE} element={<ImageFeatures/>}/>
            </Routes>
        </div>
    );
}

export default App;
