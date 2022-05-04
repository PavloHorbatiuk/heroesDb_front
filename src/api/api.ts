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
        return instance.get('id',);
    },
    create(data: StateHero) {
        return instance.post('create', data, {
                headers: {'Content-Type': 'multipart/form-data'}
            },
        );
    },
    delete(id: number) {
        return instance.delete(`${id}/delete`);
    },
    update(id: string) {
        return instance.put('id');
    },
};

