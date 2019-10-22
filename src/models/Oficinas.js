import Sequelize from 'sequelize';
import {sequelize} from '../config/dbconfig';

const oficinas = sequelize.define('sucursal', {
    Oficina:{
        type: Sequelize.TEXT
    },
    Email_Oficina:{
        type: Sequelize.TEXT
    },
},
{
    primaryKey: false,   
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
}
);
oficinas.removeAttribute('id');

export default oficinas;