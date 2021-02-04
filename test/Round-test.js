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
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should hold cards as an array', function() {
    const round = new Round(deck);
    expect(round.deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should return the current card being played', function() {
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1)
  });

  describe('takeTurn', function() {

    it('should have a turn counter that starts at 0', function() {
      const round = new Round(deck);
      expect(round.turn).to.deep.equal(0);
    })

    it('should increase the turn count after every guess', function() {
      const round = new Round(deck);
      round.makeGuess("array");
      round.makeGuess("function");
      round.makeGuess("object");
      expect(round.turn).to.deep.equal(3);
    });

    it('should make the next card become the current card', function() {
      const round = new Round(deck);
      round.makeGuess("array");
      expect(round.returnCurrentCard()).to.deep.equal(card2)
    });

    it('should keep record of the guesses - incorrect guesses should be stored in an incorrectGuesses array', function() {
      const round = new Round(deck);
      round.makeGuess("function");
      expect(round.incorrectGuesses.length).to.deep.equal(1)
    });

    it('should give feedback after each guess whether it is correct or not', function() {
      const round = new Round(deck);
      expect(round.makeGuess('array')).to.equal('correct!');
    });
  })

  it('should calculate and return a percentage of correct guesses', function() {
    const round = new Round(deck);
    round.makeGuess('array');
    round.makeGuess('mutator method');
    round.makeGuess('iteration method');
    expect(round.calculatePercentageCorrect()).to.deep.equal(67);
  });

  it('should end the round with a message', function() {
    const round = new Round(deck);
    round.makeGuess('array');
    round.makeGuess('mutator method');
    round.makeGuess('iteration method');
    expect(round.endRound()).to.equal(`** Round over! ** You answered 67% of the questions correctly!
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
  });

});
