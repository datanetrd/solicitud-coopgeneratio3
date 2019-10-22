import path from 'path';
import fs from 'fs-extra';
import nodemailer from 'nodemailer';
import oficinas from '../models/oficinas';
import { async } from 'regenerator-runtime';



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        //se indica el usuario y password
        user: 'ramiperez26@gmail.com',
        pass: 'ramito111'
    }
});
const Santodomingo = async function (req, res) {
    const {
        nombre
    } = req.body;
    const santoDomingo = await oficinas.findOne({
        where: {
            Oficina: 'Santo Domingo'
        }
    });
    //Opciones para el Envio del correo
    const mailOptions = {
        from: 'ramiperez26@gmail.com',
        to: `${santoDomingo.Email_Oficina}`,
        subject: 'nueva solicitud socio',
        text: `nueva solicitud de parte de ${nombre}`,
        attachments: [{
            filename: `${nombre}.pdf`,
            path: path.join(__dirname, `../../${nombre}.pdf`),
            contentType: 'application/pdf'
        }],
    };

    //Envio del mail
    transporter.sendMail(mailOptions, function (error, info) {
        //validar que haya habido un error
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        const filePath = path.join(__dirname, `../../${nombre}.pdf`);
        fs.unlink(filePath);
    })
}
const Santiago = async function (req, res) {
    const {
        nombre
    } = req.body;
    const santiago = await oficinas.findOne({
        where: {
            Oficina: 'Santiago'
        }
    });
    //Opciones para el Envio del correo
    const mailOptions = {
        from: 'ramiperez26@gmail.com',
        to: `${santiago.Email_Oficina}`,
        subject: 'nueva solicitud socio',
        text: `nueva solicitud de parte de ${nombre}`,
        attachments: [{
            filename: `${nombre}.pdf`,
            path: path.join(__dirname, `../../${nombre}.pdf`),
            contentType: 'application/pdf'
        }],
    };

    //Envio del mail
    transporter.sendMail(mailOptions, function (error, info) {
        //validar que haya habido un error
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        const filePath = path.join(__dirname, `../../${nombre}.pdf`);
        fs.unlink(filePath);
    })
}

const Constanza = async function (req, res) {
    const {
        nombre
    } = req.body;
    const constanza = await oficinas.findOne({
        where: {
            Oficina: 'Constanza'
        }
    });
    //Opciones para el Envio del correo
    const mailOptions = {
        from: 'ramiperez26@gmail.com',
        to: `${constanza.Email_Oficina}`,
        subject: 'nueva solicitud socio',
        text: `nueva solicitud de parte de ${nombre}`,
        attachments: [{
            filename: `${nombre}.pdf`,
            path: path.join(__dirname, `../../${nombre}.pdf`),
            contentType: 'application/pdf'
        }],
    };

    //Envio del mail
    transporter.sendMail(mailOptions, function (error, info) {
        //validar que haya habido un error
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        const filePath = path.join(__dirname, `../../${nombre}.pdf`);
        fs.unlink(filePath);
    })
}
const Sanfrancisco = async function (req, res) {
    const {
        nombre
    } = req.body;
    const sanFrancisco = await oficinas.findOne({
        where: {
            Oficina: 'San Francisco'
        }
    });
    //Opciones para el Envio del correo
    const mailOptions = {
        from: 'ramiperez26@gmail.com',
        to: `${sanFrancisco.Email_Oficina}`,
        subject: 'nueva solicitud socio',
        text: `nueva solicitud de parte de ${nombre}`,
        attachments: [{
            filename: `${nombre}.pdf`,
            path: path.join(__dirname, `../../${nombre}.pdf`),
            contentType: 'application/pdf'
        }],
    };

    //Envio del mail
    transporter.sendMail(mailOptions, function (error, info) {
        //validar que haya habido un error
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        const filePath = path.join(__dirname, `../../${nombre}.pdf`);
        fs.unlink(filePath);
    })
}



module.exports = {
    Santodomingo,
    Santiago,
    Constanza,
    Sanfrancisco
}