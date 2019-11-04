import Sequelize from 'sequelize';
import {sequelize} from '../config/dbconfig';

const User = sequelize.define('users', {
    _id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_name:{
        type: Sequelize.TEXT,
        allowNull: false,

    },
    email:{
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false,

    },
    role:{
        type: Sequelize.STRING,
        defaultValue: 'regular',
        values: ['regular','admin'] 

    },
},
{
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
}
);
User.removeAttribute('id');
export default User;