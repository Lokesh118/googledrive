import axios from 'axios';
export const BASE_URL = 'https://usersystem-gvdis2cuxq-el.a.run.app/';
export const myAxios = axios.create({
    baseURL:BASE_URL
});