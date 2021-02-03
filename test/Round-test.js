const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(function() {
    card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card2 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    card3 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should hold cards as an array', function() {
    expect(round.deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1)
  });

  describe('takeTurn', function() {

    it('should have a turn counter that starts at 0', function() {
      expect(round.turn).to.deep.equal(0);
    })

    it('should create a new turn instance when a guess is made', function() {
      round.makeGuess("array");
      expect(round.makeGuess()).to.deep.equal();
    });

    it.skip('should increase the turn count after every guess', function() {
      round.makeGuess();
      expect(round.turn).to.deep.equal(1);
    });

    it.skip('should make the next card become the current card', function() {

    });

    it.skip('should keep record of the guesses - incorrect guesses should be stored in an incorrectGuesses array', function() {

    });

    it.skip('should give feedback after each guess whether it is correct or not', function() {

    });
  })

  it.skip('should calculate and return a percentage of correct guesses', function() {
    // calculatePercentageCorrect
  });

  it.skip('should end the round with a message', function() {

  });

});
