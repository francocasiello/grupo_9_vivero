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
        tableName: 'category',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config)

    //Category.associate = (models) => {
    //    Category.hasMany(models.Producto, {
    //        as: "products",
    //        foreingKey: "category_id"
    //    })
    //}
    
    return Category
}