var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashwanidhawan007@gmail.com',
    pass: 'a$wan1dh'
  }
});

var mailOptions = {
  from: 'ashwanidhawan007@gmail.com',
  to: 'ashwanikdhawan@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
