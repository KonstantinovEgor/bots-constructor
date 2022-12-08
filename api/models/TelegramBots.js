module.exports = (sequelize, DataTypes) => {
    const tableName = 'telegram_bots';
    const TelegramBots = sequelize.define('telegramBots', {
        telegram_bot_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        telegram_bot_token: { type: DataTypes.STRING },
        telegram_bot_status: { type: DataTypes.STRING },
        created_user_id: { type: DataTypes.INTEGER }
    }, { tableName });
    
    TelegramBots.associate = () => {
        TelegramBots.myAttributes = () => [
            ['telegram_bot_id', 'telegramBorId'], ['telegram_bot_token', 'telegramBotToken'],
            ['telegram_bot_status', 'telegramBotStatus'], ['created_user_id', 'createdUserId']
        ];
        TelegramBots.myOrderBy = () => [
            'ASC'
        ];
    }

    return TelegramBots;
};