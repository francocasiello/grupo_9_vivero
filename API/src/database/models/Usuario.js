module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: false
        },
        fullName: {
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        password: {
            type: dataTypes.INTEGER,
            allownull: false
        },
        birthday: {
            type: dataTypes.DATE
        },
        direction: {
            type: dataTypes.INTEGER
        },
        avatar: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };
    const Usuario = sequelize.define(alias, cols, config)

    return Usuario
}