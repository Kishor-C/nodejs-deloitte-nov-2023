import fs from 'fs';

// writing data asynchronously 
fs.writeFile('demo-async.txt', 'Today is tuesday\n', {flag : 'a+'}, (err)=> {
    if(err) {
        console.log('Writing failed!')
    } else {
        console.log('Writing done.')
    }
});
// writing data synchronously 
fs.writeFileSync('demo-sync.txt', 'Tomorrow is wednesday\n', {flag : 'a+'});
console.log('file writing is done');
//reading data asynchrnously
fs.readFile('demo-async.txt', (err, data) => {
    if(err) {
        console.log('failed to read: '+err);
    } else {
        console.log(data.toString());
    }
});