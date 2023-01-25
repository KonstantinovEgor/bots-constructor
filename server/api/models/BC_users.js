module.exports = (DataTypes, sequelize, models) => {
   const tableName = 'bc_users';
   const BCUsers = sequelize.define('BCUsers', {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        login: {
            type: DataTypes.STRING(24),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(150),
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

   return BCUsers;
}