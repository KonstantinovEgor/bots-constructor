import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (login, password) => {
    await $host.post('api/public/auth/registration', { login, password });
}


export const logIn = async (login, password) => {
    jwt_decode((await $host.post('api/public/auth/login', { login, password }))?.data?.token);
}


export const auth = async () =>
    await $host.post('api/public/auth')
