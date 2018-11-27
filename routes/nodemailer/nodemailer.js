app.post("/api/sendEmail", (req,res)=>{
  
    nodemailer.createTestAccount((err,account) =>{
      const htmlEmail =`
      <h3>Contact Details<h3>
      <ul>
      <li>email:${req.body.email}</li>
      <li>email:${req.body.subject}</li>
      <li>email:${req.body.phoneNumber}</li>
      </ul>
      <h3>Message<h3>
      <p>${req.body.message}</p>
      `
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'zcfazcezslhhk5ns@ethereal.email',
            pass: 'cfYHFnaERfDWRtrNRd'
        }
    });
    
    const mailOptions = {
      from: req.body.email, // sender address
      to: 'zcfazcezslhhk5ns@ethereal.email', // list of receivers
      subject: 'req.body.subject', // Subject line
      text: req.body.message,
      html: htmlEmail// plain text body
    };
    transporter.sendMail(mailOptions, (err, info) =>{
      if(err){
        return console.log(err)
      }
    
      console.log("message sent: %s", info.message)
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info))
    })
    
    })
    })
    //nodemailer above
module.exports= app.post