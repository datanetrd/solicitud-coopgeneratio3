import Sequelize from 'sequelize';
import {sequelize} from '../config/dbconfig';

const oficinas = sequelize.define('oficinas', {
    santodomingo:{
        type: Sequelize.TEXT
    },
    santiago:{
        type: Sequelize.TEXT
    },
    constanza:{
        type: Sequelize.TEXT
    },
    sanfrancisco:{
        type: Sequelize.TEXT
    }
},
{
    createdAt: false,
    updatedAt: false
}
);

export default oficinas;