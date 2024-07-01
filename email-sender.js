var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ifeyinwabernard@gmail.com',
    pass: 'GODlifer1.'
  }
});

var mailOptions = {
  from: 'ifeyinwabernard@gmail.com',
  to: 'anyanjiifeyinwa@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});