import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


const PORT = process.env.PORT|| 5000;

try {
    app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
} catch(e) {
    console.log(e);
}