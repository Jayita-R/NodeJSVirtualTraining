    var nodemailer=require('nodemailer');

    var send_service=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'jayitatsbv@gmail.com',
            pass:'jrakshit#98'
        }
    });
    var mailOptions={
        from:"jayitatsbv@gmail.com",
        to:"ishitacemk@gmail.com",
        subject:"Hey,Greetings Email",
        text:"Hi...Good Morning my friend."
    }
    send_service.sendMail(mailOptions,function(error,info){
        if(error){
            console.log("There is an internal error");
        }
        else{
            console.log("Email sent: "+info.response);
        }
    }).listen(3000);