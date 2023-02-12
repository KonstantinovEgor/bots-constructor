import { $host, $authHost } from "./index";

export const getAllMyTelegramBots = async (user_id) => {
    const data = await $authHost.get(`api/private/user/get-telegram-bots?id=${user_id}`);
    return data.data;
}