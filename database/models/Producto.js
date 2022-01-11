module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: false
        },
        name: {
            type: dataTypes.CHAR,
        },
        price: {
            type: dataTypes.INTEGER,
        },
        description: {
            type: dataTypes.CHAR,
        },
        image: {
            type: dataTypes.CHAR
        },
       // categoria_id: {
        //    type: dataTypes.INTEGER
       // }
    };
    let config = {
        tableName: 'productos',
        timestamps: false,
        underscore: true
    };
    const Producto = sequelize.define(alias, cols, config)

    Producto.associate = (models) => {
       Producto.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoria_id"
        })
    };

    return Producto
}