import axios from 'axios';
import {StateHero} from "../components/HeroesList/CreateHero";

const instance = axios.create({
    // withCredentials: true,
    baseURL: `http://localhost:7000/heroes/`,
});
export const authAPI = {
    getAll() {
        return instance.get('all');
    },
    getOne(id: string) {
        return instance.get('models',);
    },
    create(data: StateHero) {
        return instance.post('create', {data});
    },
    delete(id: string) {
        return instance.delete('models');
    },
    update(id: string) {
        return instance.put('models');
    },
};

