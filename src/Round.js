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
    this.countTurn();
    if(!playerTurn.evaluateGuess()) {
      this.incorrectGuesses.push(playerTurn.card.id);
      return playerTurn.giveFeedback();
    } else {
      return playerTurn.giveFeedback();
    }
    this.returnCurrentCard();
  }
  calculatePercentageCorrect() {
    return Math.round(100 - this.incorrectGuesses.length / this.deck.cards.length * 100);
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`;
  }
}

module.exports = Round;
