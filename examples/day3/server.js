// import http module
import http from 'http';
import url from 'url';
// createServer is to create a server instance that will have request processing logic
// the callbackFn has 2 arguments, 1st is the request & 2nd is the response
let server = http.createServer((request, response) => {
    // extracting the request url
    let urlObject = url.parse(request.url, true);
    let query = urlObject.query; // it returns the object with key & value
    let name = query.name; // url?name = Raj & age = 25
    let age = query.age;   
    // to specify the response content is html
    response.writeHead(200, {'content-type':'text/html'});
    response.write(`<h3>Hello ${name}, your age is ${age}`);
    // to signal that there's no more data to write
    response.end();
});
// start the server
server.listen(9999, () => console.log('Server started...'));