
module.exports = (sequelize,DataTypes) => {
    const Producto = sequelize.define('producto',{
        Nombre: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        Descripcion: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        Precio: {
            type: DataTypes.FLOAT,  
            allowNull: false
        },
        Imagen: {
            type: DataTypes.STRING,  
            allowNull: false
        }
    })


    return Producto
}