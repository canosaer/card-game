class MatchCard extends Game {
    start = () => {
        // super.start() // calls parent class's version of this method    
        this.deck.shuffle()
        this.cardFacing = `down`
        this.startCards = this.deck.deal(12)
        this.startCards.forEach(nextCard => {
            // nextCard.classList.add(`down`)
            console.log(nextCard)
            this.addCardToBoard(nextCard, this.cardFacing)
        })
    }
}

new MatchCard()