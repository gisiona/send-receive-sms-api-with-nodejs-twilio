require('dotenv').config();


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