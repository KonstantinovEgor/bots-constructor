import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (login, password) => {
    const { data } = await $host.post('api/public/auth/registration', { login, password });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}


export const logIn = async (login, password) => {
    //jwt_decode((await $host.post('api/public/auth/login', { login, password }))?.data?.token);
    const { data } = await $host.post('api/public/auth/login', { login, password });
    console.log(data.token)
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}


export const auth = async () => {
    const { data } = await $authHost.post('api/public/auth/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token)
}

