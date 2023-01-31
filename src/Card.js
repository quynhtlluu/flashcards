class Card {
    constructor(cardId, cardQuestions, possibleCardAnswers, correctCardAnswer) {
        this.id = cardId;
        this.question = cardQuestions;
    }
}

module.exports = Card;