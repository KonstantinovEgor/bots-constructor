module.exports = (DataTypes, sequelize, models) => {
    const tableName = 'bc_users_info';
    const BCUsersInfo = sequelize.define('BCUsersInfo', {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        user_id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
        },
        phone_number: {
            type: DataTypes.STRING(24),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(24),
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

    return BCUsersInfo;
 }