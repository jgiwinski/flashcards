const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a players guess', function() {
    const turn = new Turn('function');
    expect(turn.guess).to.equal('function');
  });

  it('should create a new Card instance', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('function', card);
    expect(turn.card).to.equal(card);
  });

  it('should return the players guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('function', card);
    const guess = turn.returnGuess()
    expect(guess).to.deep.equal('function');
  });

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('function', card);
    const currentCard = turn.returnCard()
    expect(currentCard).to.deep.equal(card);
  });

  it('should evaluate if the guess is incorrect or correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('object', card);
    const evaluatedGuess = turn.evaluateGuess();
    expect(evaluatedGuess).to.deep.equal(true);
  });

  it('should return a message saying if the guess was correct or not', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('array', card);
    const feedback = turn.giveFeedback();
    expect(feedback).to.deep.equal('incorrect!');
  });
});
