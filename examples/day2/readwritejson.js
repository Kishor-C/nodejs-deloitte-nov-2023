import fs from 'fs';

// json files are valid only if the proper json structure is stored
// json structure { "key" : value, "key" : value}
// json array structure [ {"key": value, "key":value}, {"key":value, "key":value}]

// we can create a javascript object & write that to the json file by converting it into json
// writing the JSON to the JSON file
let users = [{id: 123, name:"Dhoni", phone:9993}, {id: 456, name:"Virat", phone:9883}]
fs.writeFileSync('demo.json', JSON.stringify(users)); // fails if users is not a JSON
// reading the JSON and converting it into Javascript object to access the properties
let json = fs.readFileSync('demo.json').toString();
let js = JSON.parse(json);
console.log(js[0].name);
// write a new json without erasing the old array
let user2 = {id:999, name:"Rohit", phone:8888};
fs.writeFileSync('demo.json', JSON.stringify(user2), {flag: 'a+'})