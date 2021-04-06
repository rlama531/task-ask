import express from 'express';
import mongoose from "mongoose";
import Cors from 'cors';
import Posts from "./dbPosts.js"
//import password from "./private.json";

// App config 
const app = express(); 
const port = process.env.port || 8001; 
const connection_url = `mongodb+srv://admin:<password>@cluster0.vldvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// Middlewares 
app.use(express.json()); 
app.use(Cors());

// DB config 
mongoose.connect(connection_url,  {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true,
})


// API Endpoints 
app.get('/', (req, res) => res.status(200).send("HELLO WORLD!!")); 
app.post('/upload', (req, res) => {
    const dbPost= req.body; 

    Posts.create(dbPost, (err, data) => {
        if (err) {
            res.status(500).send(err); 
        } else {
            res.status(201).send(data);     
        }
    });
}); 

app.get('/upload', (req, res) => {
    Posts.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});


// Listener 
app.listen(port, () => console.log(`listening on localhost: ${port}`));