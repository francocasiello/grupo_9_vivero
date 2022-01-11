module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: false
        },
        name: {
            type: dataTypes.CHAR,
        }
    };
    let config = {
        tableName: 'categorias',
        timestamps: false,
        underscore: true
    };
    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models) => {
        Category.hasMany(models.Producto, {
            as: "products",
            foreignKey: "categoria_id"
       })
    }
    
    return Category
}