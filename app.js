import express from 'express';
import router from './services/router.js';
import helmet from 'helmet';
import { corsOptions } from './constants/config.js';
import cors from 'cors'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use(router);
app.get('/', (req, res) => res.send('<h1>MailService</h1>'));

app.use(cors(corsOptions))

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Mail Service started on port: ${port}`));