import Sequelize from 'sequelize';
import {sequelize} from '../config/dbconfig';

import DataRegister from './Data_register'; 

const nuevoSocios = sequelize.define('nuevos_socios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    apellido: {
        type: Sequelize.TEXT
    },
    fecha_solicitud: {
        type: Sequelize.DATE
    }
},  {
    timestamps: false,
    createdAt: false
});

nuevoSocios.hasMany(DataRegister, {foreingKey: 'socio_ID', sourceKey: 'id'});
DataRegister.belongsTo(nuevoSocios, {foreingKey: 'socio_ID', sourceKey: 'id'});

export default nuevoSocios;