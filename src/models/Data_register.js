import Sequelize from 'sequelize';
import {sequelize} from '../config/dbconfig';


 const DataRegister = sequelize.define('data_registers', {
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
     
    cedula: {
        type: Sequelize.TEXT
    },
    estadocivil: {
        type: Sequelize.TEXT
    },
    direccionresidencial: {
        type: Sequelize.TEXT
    },
    provincia: {
        type: Sequelize.TEXT
    },
    telefonos: {
        type: Sequelize.TEXT
    },
    celular: {
        type: Sequelize.TEXT
    },
    oficinatrabajo: {
        type: Sequelize.TEXT
    },
    direcciontrabajo: {
        type: Sequelize.TEXT
    },
    telefonotrabajo: {
        type: Sequelize.TEXT
    },
    fax: {
        type: Sequelize.TEXT
    },
    puesto: {
        type: Sequelize.TEXT
    },
    fechaingresoempresa: {
        type: Sequelize.TEXT
    },
    sueldo: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    ahorromensual: {
        type: Sequelize.TEXT
    },
    certificadoaportacion: {
        type: Sequelize.TEXT
    },
    valorcertificado: {
        type: Sequelize.TEXT
    },
    nombre2: {
        type: Sequelize.TEXT
    },
    apellido2: {
        type: Sequelize.TEXT
    },
    cedula2: {
        type: Sequelize.TEXT
    },
    socio_ID: {
        type: Sequelize.INTEGER
    },
    nuevosSocioId: {
        type: Sequelize.INTEGER
    }

},
{
    freezeTableName: true,
    // createdAt: false,
    updatedAt: false
}
);

export default DataRegister;