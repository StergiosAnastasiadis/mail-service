import express from 'express';

const app = express()

app.get('/', (req, res) => res.send('<h1>MailService</h1>'));


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Mail Service started on port: ${port}`))