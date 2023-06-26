import { $host, $authHost } from "./index";

export const createBot = async (user_id, token, config) => {
    const data = await $host.post('api/private/telegram/bot/add', { user_id, token, config });
    return data.data;
}