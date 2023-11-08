// MongoClient provides methods to connect
import { MongoClient } from "mongodb";
// since mongodb is in localhost and running in 27017
let url = 'mongodb://127.0.0.1:27017';

fetchAll();
function fetchAll() {
    MongoClient.connect(url)
    .then(client => {
        let db = client.db('mydb');
        // find all the documents & convert into array to iterate
        db.collection('profile').find().toArray()
        .then(value => console.log(value))
        .catch(err => console.log(err))
        .finally(() => client.close());
    })
    .catch(error => console.log('database connection failed: '+error));
}

function store() {
    // connecting
    MongoClient.connect(url)
        .then(client => {
            // use the database mydb to store the document
            let db = client.db('mydb');
            // use collection() to access the collection
            // insertOne returns promise, hence use then, catch to find the promise status
            // finally is executed in either of the case
            db.collection("profile").insertOne({ name: "Rohit", phone: 993939 })
                .then(value => console.log(value))
                .catch(reason => console.log(reason))
                .finally(() => client.close())
        })
        .catch(error => console.log('database connnection failed: ' + error));
}
