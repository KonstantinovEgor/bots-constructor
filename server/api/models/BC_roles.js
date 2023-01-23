module.exports = (DataTypes, sequelize) => {
    const tableName = 'bc_roles';
    const BCRoles = sequelize.define('BCRoles', {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        user_id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(24),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        permission_level: {
            type: DataTypes.INTEGER,
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
 
    return BCRoles;
 }