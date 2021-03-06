const axios = require('axios');

const nodemailer = require('nodemailer'),
    { EMAIL, PASSWORD, RECOM_KEY } = process.env;



module.exports = {
    contact: async(req, res) => {

        const { firstName, lastName, phoneNumber, userEmail, message, token } = req.body;
        // console.log('name', name, 'userEmail', userEmail, 'message', message)
        // console.log(token, 'tokkkken')
        
        //checks token for validation with google
        if(!token) return res.status(400).json({err: 'No Token'})
        const googleVerify = `https://www.google.com/recaptcha/api/siteverify?secret=${RECOM_KEY}&response=${token}`

        const googleResponse = await axios.post(googleVerify)
        
        const { success } = await googleResponse.data
        // console.log(success, 'google response')
        
        if(!success) return res.sendStatus(500)
        

        //Run mailer after validation
        const messageContent = ` name: ${firstName} ${lastName} \n Phone Number: ${phoneNumber} \n email: ${userEmail} \n message: ${message} `;
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

            await transporter.sendMail(mailOps)
        

        res.sendStatus(200)
    }
}