const nodemailer = require('nodemailer'),
    { EMAIL, PASSWORD } = process.env;


module.exports = {
    contact: async(req, res) => {

        const { firstName, lastName, phoneNumber, userEmail, message } = req.body;
        // console.log('name', name, 'userEmail', userEmail, 'message', message)

        const messageContent = `name: ${firstName} ${lastName} \n Phone Number: ${phoneNumber}  \n  email: ${userEmail} \n message: ${message} `;
            // console.log('messageContent', messageContent)

            //type of email service settings
            let transport = {
                host: 'smtp.gmail.com',
                port: 587,
                service: 'gmail',
                secure: false,
                requireTLS: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            }

                let transporter = nodemailer.createTransport(transport)

        

            //Mail option settings
            let mailOps = {
                from:   firstName + lastName,
                to: EMAIL,
                subject: `New Message from Contact Form from ${firstName}`,
                text: messageContent

            }

                let mail = await transporter.sendMail(mailOps, (err, res) => {

                    if(err){
                    console.log('error occurs:', err)
                    }else {
                        res.status(200).json(mail)
                    }
                })
    
        res.sendStatus(200)
    }
}