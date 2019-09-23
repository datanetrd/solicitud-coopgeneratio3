import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        //se indica el usuario y password
        user: 'ramiperez71@gmail.com',
        pass: 'Ramesh2627'
    }
});

//Opciones para el Envio del correo
const mailOptions = {
    from: 'ramiperez71@gmail.com',
    to: 'ramiperez26@gmail.com',
    subject: 'nueva solicitud socio',
}