import express from 'express';
// create a top-level express object to create api's
let app = express();
// to convert json to javascript object
app.use(express.json());
// start the express server using app.listen(port, callback)
app.listen(8888, () => console.log('Server started, use http://ip:8888/ to access the apis'));

// webservice that handles HTTP get
app.get('/greet/:username/:phone', (request, response) => {
    let username = request.params.username;
    let phoneno = request.params.phone;
    let emailId = request.query.email;
    //console.log(emailId);
    // HTTP status code like 2XX, 4XX
    response.status(200).json({method: 'http get', name : username, phone: phoneno, email: emailId});
});
app.post('/greet', (request, response) => {
    let body = request.body;
    response.status(201).json({method:'http post', url: request.url, data: body});
});