import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/express', (req, res) => {
 res.send("<h1>We're live!</h1>")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`auto baby on ${PORT}!`);
});