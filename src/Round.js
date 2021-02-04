const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turn];
  }
  countTurn() {
    this.turn++
  }
  makeGuess(guess) {
    const playerTurn = new Turn(guess, this.returnCurrentCard())
    if(!playerTurn.evaluateGuess()) {
      this.incorrectGuesses.push(playerTurn.card.id);
      playerTurn.giveFeedback();
    } else {
      playerTurn.giveFeedback();
    }
    this.countTurn();
    this.returnCurrentCard();
  }
  calculatePercentageCorrect() {
    return Math.round(100 - this.incorrectGuesses.length / this.deck.cards.length * 100);
  }
  endRound() {

  }
}

module.exports = Round;
