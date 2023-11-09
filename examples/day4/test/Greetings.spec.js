import { greet } from "../src/Greetings.js";
import {expect} from 'chai';
// all the test cases must be written inside an it('summary', callback) function
// all the it functions should be part of describe('summary', callback) function
/*
describe('test suite for greetings #greet', () => {
        it('greet must return welcome followed by the paramter, () => {expect == actual} )})
*/
describe('Test suite for #Greetings', () => {
    it('greet() must return Welcome', () => {
        let result = greet('Virat');
        expect(result).to.contain('Welcome');
    });
    it('greet() must return Welcome name', () => {
        let result = greet('Rohit');
        expect(result).to.equal('Welcome Rohit'); 
    });
});
