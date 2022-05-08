import axios from 'axios';
import {StateHeroType} from "../components/HeroesList/editHero";


export const url = (param: string) => {
    return `http://localhost:7000//${param}`
}
const instance = axios.create({
    // withCredentials: true,
    baseURL: `http://localhost:7000/heroes/`,
    // baseURL: `https://superheroes-database.herokuapp.com/`,
});
export const authAPI = {
    getAll() {
        return instance.get('all');
    },
    getOne(id: number) {
        return instance.get(`${id}`,);
    },
    create(data: StateHeroType) {
        return instance.post('create', data, {
                headers: {'Content-Type': 'multipart/form-data'}
            },
        );
    },
    delete(id: string) {
        return instance.delete(`${id}/delete`);
    },
    update(id: number, data: StateHeroType) {
        return instance.put(`${id}/update`, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        },);
    },
    updateImage(id: number, image: string) {
        return instance.put(`${id}/update/image`, image,
            {
                headers: {'Content-Type': 'multipart/form-data'}
            })
    }
};

