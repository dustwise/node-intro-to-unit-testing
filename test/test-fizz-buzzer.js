const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('Fizz Buzz Tests', () => {
  
  it('should return buzz', () => { 
    const buzzCases = [10, 20, 100];

    buzzCases.forEach(buzzCase => {
      fizzBuzzer(buzzCase).should.equal('buzz');
    });
  });

  it('should return fizz', () => { 
    const fizzCases = [6, 9, 12];

    fizzCases.forEach(fizzCase => {
      fizzBuzzer(fizzCase).should.equal('fizz');
    });
  });
  
  it('should return fizz-buzz', () => { 
    const fizzBuzzCases = [45, 15, 150];

    fizzBuzzCases.forEach(fizzBuzzCase => {
      fizzBuzzer(fizzBuzzCase).should.equal('fizz-buzz');
    });
  });

  //edge case
  it('should throw an error if incorrect inputs', () =>{
    const throwCases = ["12", false, "bread"];

    throwCases.forEach(throwCase => {
      (() => fizzBuzzer(throwCase)).should.throw(Error);
    });
  });
});
