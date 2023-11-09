let map = new Map();

map.set('username', 'virat1234');
map.set('password', 'welcome@123');
map.set('roles', 'admin');

console.log(`Value: `+map.get('username'));
map.forEach((value, key) => console.log(`Key = ${key}, Value = ${value}`));
console.log('-------Keys----------');
let keys = map.keys();
for(let i = 0; i < map.size; i++) {
    console.log(keys.next().value);
}
