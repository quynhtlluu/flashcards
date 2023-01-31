class Card {
    constructor(cardId, cardQuestions, possibleCardAnswers, correctCardAnswer) {
        this.id = cardId;
        this.question = cardQuestions;
        this.answers = possibleCardAnswers;
        this.correctAnswer = correctCardAnswer;
    }
}

module.exports = Card;