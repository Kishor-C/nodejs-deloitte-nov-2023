// MongoClient provides methods to connect
import { MongoClient } from "mongodb";
import express from 'express';
import cors from 'cors';
// since mongodb is in localhost and running in 27017
let url = 'mongodb://127.0.0.1:27017';

let app = express();
app.use(express.json());
app.use(cors()); // enables CORS
app.listen(9999, () => console.log('server started in 9999'));

app.post('/profile', (request, response) => {
    let body = request.body;
    MongoClient.connect(url)
        .then(client => {
            // use the database mydb to store the document
            let db = client.db('mydb');
            // use collection() to access the collection
            // insertOne returns promise, hence use then, catch to find the promise status
            // finally is executed in either of the case
            db.collection("profile").insertOne(body)
                .then(value => response.status(200).json(value))
                .catch(reason => response.status(404).json(reason))
                .finally(() => client.close())
        })
        .catch(error => response.status(404).json({"message":"DB ERROR"}));
});

app.get('/profile', (request, response) => {
    MongoClient.connect(url)
    .then(client => {
        let db = client.db('mydb');
        // find all the documents & convert into array to iterate
        db.collection('profile').find().toArray()
        .then(value => response.json(value))
        .catch(err => response.status(404).json("message", "Unable to fetch profile"))
        .finally(() => client.close());
    })
    .catch(error => response.status(404).json({"message":"DB ERROR"}));

});



