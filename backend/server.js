import express from 'express';
import { info } from './models/info.js';
import { info2 } from './models/info2.js';

const app = express();
app.use(express.json());

app.get('/', (res, req) =>{
res.send('hello world')
})
app.listen(8000, () =>{
    console.log("server is running at http://localhost/8000")
})