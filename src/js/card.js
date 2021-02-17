class Card{
    suit = null // heart, spade, club, diamonb
    rank = null // "A", "1", "2", ... "10", "J", "Q", "K"
    constructor(suit, rank){
        this.suit = suit;
        this.rank = rank;
    }

    render() {
        const cardEl = document.createElement(`div`)
        cardEl.classList.add(`card`)

        const suitEl = document.createElement(`span`)
        suitEl.classList.add(`suit`)
        suitEl.classList.add(this.suit)
        suitEl.innerHTML = this.suit

        const rankEl = document.createElement(`span`)
        rankEl.classList.add(`rank`)
        rankEl.innerHTML = this.rank

        cardEl.appendChild(rankEl)
        cardEl.appendChild(suitEl)

        return cardEl
    }
}