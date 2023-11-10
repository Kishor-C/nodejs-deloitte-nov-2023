export function Greet() {
    let user = {name: "Virat", phone: 999393};
    return (<div>
        <h3>Hello {user.name}, your phone no is: {user.phone}</h3>
    </div>)
}
/*
    we need to import as 
    import {Greet} from './components/Hello';
    we need to use this in other components like <Greet />
*/