import { $host, $authHost } from "./index";

export const registration = async (login, password) =>
    await $host.post('api/auth/registration', { login, password });

export const login = async (login, password) =>
    await $host.post('api/auth/login', { login, password });

export const auth = async () =>
    await $host.post('api/auth')
