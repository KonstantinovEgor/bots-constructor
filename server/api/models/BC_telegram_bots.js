module.exports = (DataTypes, sequelize) => {
    const tableName = 'bc_telegram_bots';
    const BCTelegramBots = sequelize.define('BCTelegramBots', {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        user_id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
        },
        token: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        config: {
            type: DataTypes.JSON,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        }
    }, { tableName });

    return BCTelegramBots;
 }