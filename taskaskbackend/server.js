import express from 'express';
import mongoose from "mongoose";
import Cors from 'cors';


// App config 
const app = express(); 
const port = process.env.port || 8001; 
const connection_url = `mongodb+srv://admin:9Lv9TkdGHZ7P8e2@cluster0.vldvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`



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
app.get('/URL HERE', (req, res) => res.status(200).send("HELLO WORLD!!")); 
app.post('URL HERE', (req, res) => {
    const dbCard = req.body; 

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err); 
        } else {
            res.status(201).send(data);     
        }
    });
}); 

app.get('/URL HERE', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});


// Listener 
app.listen(port, () => console.log(`listening on localhost: ${port}`));