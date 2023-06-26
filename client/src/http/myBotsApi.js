import { $host, $authHost } from "./index";

export const initializeBot = async (bot_id) => {
    const data = await $host.post('api/private/telegram/bot/initialize', { id: bot_id });
    return data.data;
}