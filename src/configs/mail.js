
const nodemailer= require('nodemailer')

 let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "maneshs111@gmail.com", // generated ethereal user
      pass: "X0Vs68UmtDyQKcTG", // generated ethereal password
    },
  });

  module.exports =transporter