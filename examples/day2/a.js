export function add(x, y) {
    return x + y;
}
export function sub(x, y) { 
    return x - y;
}
export class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display() {
        //console.log(`Employee Id = ${this.id}, Name = ${this.name}, Salayr = ${this.salary}`)
        return `Employee Id = ${this.id}, Name = ${this.name}, Salary = ${this.salary}`;
    }
}
export const PI = 3.14;
export const USERS = [
    {id: 1, name: "Sachin"}, {id:2, name:"Virat"}
]