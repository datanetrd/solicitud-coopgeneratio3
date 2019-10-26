import Sequelize from 'sequelize';

  export const sequelize = new Sequelize('nuevo_registro', 'root', 'Ramesh2627',
 {
    host: '127.0.0.1',
    dialect: 'mysql',
    pool:{
        max: 5,
        min: 0,
        require: 30000,
        idle:10000
    }
});
