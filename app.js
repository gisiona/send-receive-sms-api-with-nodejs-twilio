require('dotenv').config();


/********************************** ENVIAR SMS COM TWILIO ****************************** */
const ACCOUNTSID = process.env.ACCOUNT_SID;
const AUTHTOKEN = process.env.AUTH_TOKEN;
const MYPHONENUMBER = process.env.MY_PHONE_NUMBER;
const MYPHONENUMBERSEND = process.env.MY_PHONE_NUMBER_SEND;

console.log('ACCOUNT_SID : ' + ACCOUNTSID 
        + ', AUTH_TOKEN : ' + AUTHTOKEN 
        + ', MY_PHONE_NUMBER : ' + MYPHONENUMBER
        + ', MY_PHONE_NUMBER_SEND : ' + MYPHONENUMBERSEND);


const twilioClient = require('twilio')(ACCOUNTSID, AUTHTOKEN);


twilioClient.messages.create({
    to: `${MYPHONENUMBER}`,
    from: `${MYPHONENUMBERSEND}`,
    body: 'Hello... estou enviado SMS com NodeJS and Twilio'
})
.then(mensage =>  console.log(mensage.sid))
.catch(e => console.log('OPS.... DEU RUIM AO ENVIAR MENSAGEM : ' + e));



/********************************** RECEBER SMS COM TWILIO ****************************** */
const mensagingResponse = require('twilio').twiml.MessagingResponse();
const express = require('express');
const app = express();

app.post('/sms', (req,res) => {
    const twiml = new mensagingResponse();
    twiml.mensage('Olá recebir sua mensagem, em breve entrarei em contato. Obrigado.');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});


app.listen(process.env.PORT || 3000, () => {
    console.log('SERVIDOR RODANDO NA PORTA : ' + process.env.PORT );
});