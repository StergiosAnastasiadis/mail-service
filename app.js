import express from 'express';
import router from './services/router.js'

const app = express()


app.use(router)
app.get('/', (req, res) => res.send('<h1>MailService</h1>'));


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Mail Service started on port: ${port}`))