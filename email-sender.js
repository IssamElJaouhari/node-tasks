const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'issamefar58@gmail.com',
    pass: "hhhhhhhhhhhh got u",
  },
});

// send mail with defined transport object
let mailOptions = {
  from: 'issamefar58@gmail.com', // sender address
  to: 'anaslacasa15@gmail.com', // list of receivers
  subject: 'Email test by me using Node.js', // Subject line
  html: '<p>EA SPORTS THE GAME</p>', // HTML body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});