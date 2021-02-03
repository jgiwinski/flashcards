const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    // this.currentCard = this.deck.cards[0];
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  }
  countTurn() {
    this.turn++
  }
  makeGuess(guess) {
    const playerTurn = new Turn(guess, this.returnCurrentCard())
    this.countTurn();
  }
}

module.exports = Round;
