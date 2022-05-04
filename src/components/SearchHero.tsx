import {ChangeEvent, useState} from "react";
import {useSelector} from "react-redux";
import {IGlobalState} from "../store/state";
import {AllHeroesType} from "../store/heroesRedusers";


function SearchHero() {
    const [searchInput, setSearchInput] = useState("");
    const state = useSelector<IGlobalState, AllHeroesType[]>(state => state.heroes.heroesData)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    if (searchInput.length > 0) {
        state.filter((m) => {
            return m.nickname.match(searchInput);
        });
    }
    return (
        <div>
        </div>)
}

export default SearchHero;