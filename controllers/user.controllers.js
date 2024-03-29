import asyncHandler from 'express-async-handler'
import { sendEmail } from '../email/sendEmail.js'

const activateAccount = asyncHandler(async (req, res) => {
    const { email, firstname, lastname, activationToken } = req.body
    if (!email || !firstname || !lastname || !activationToken) {
        res.status(400).send({ error: true, statusCode: 400, message: "Add Field Required for This Email: email | firstname | lastname | activationToken" })
    }

    const buttonLink = `https:/localhost:3000/activate-account/?email=${email}&activationToken=${activationToken}"`
    const emailResponse = await sendEmail({ email, firstname, lastname, buttonLink, template: 'activateAccount' })

    emailResponse.error && res.status(500).send(emailResponse)
    !emailResponse.error && res.status(200).send(emailResponse)
})

export { activateAccount }