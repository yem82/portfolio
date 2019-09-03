import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());

app.post('/express', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <p> New message from portfolio! </p>
    <h3>Contact Details</h3>
    <ul>
      <li><b>First name:</b> ${req.body.firstname}</li>
      <li><b>Last name:</b> ${req.body.lastname}</li>
      <li><b>Email:</b> ${req.body.email}</li>
      <li><b>Subject:</b> ${req.body.subject}</li>
    </ul>
      <h3>Message</h3>
      <p> ${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      service: 'Sendgrid',
      port: 587,
      secure: false,
      auth: {

        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASS
        // type: "OAuth2",
        // user: process.env.EMAIL,
        // clientId: process.env.CLIENT_ID,
        // clientSecret: process.env.CLIENT_SECRET,
        // refreshToken: process.env.REFRESH_TOKEN
      }
    });

    let mailOptions = {
      from: 'test@gmail.com',
      to: process.env.EMAIL,
      subject: req.body.subject,
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if(err) {
        return console.log(err)
      };

      console.log('Message sent!\nURL: %s', nodemailer.getTestMessageUrl(info))
    })
  })
});

const PORT = process.env.PORT || 5000;

const path = require('path')

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`auto baby on ${PORT}!`);
});