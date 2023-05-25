
<script>
  import nodemailer from "nodemailer";

  function sendEmail() {
    console.log('test');
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   // auth: {
  //   //   user: testAccount.user, // generated ethereal user
  //   //   pass: testAccount.pass, // generated ethereal password
  //   // },
  // });
  
  // // send mail with defined transport object
  //   const info = {
  //   from: '"Aleks" <aleks@example.com>', // sender address
  //   to: "justin.schwab@t-online.de",// list of receivers
  //   subject: "Hello", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: "<b>Hello world?</b>", // html body
  // };

  // transporter.sendMail(info);


}

  // import {sendEmail} from './provider.js';
  
  


  // console.log("Message sent: %s", info.messageId);

  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
  </script>

<h1>test</h1>
<button on:click={sendEmail}>E-Mail senden</button>  
