class Game {
    constructor(deckSize){
        this.deckSize = deckSize
        this.deck = new Deck(deckSize)

        this.setupListeners()

        new MessageHandler()
    }

    setupListeners(){
        document.querySelector(`.start`).addEventListener(`click`, this.handleStart)
        document.querySelector(`.shuffle`).addEventListener(`click`, this.shuffle)
        document.querySelector(`.finish`).addEventListener(`click`, this.finish)
    }

    showMessage(message) {
        let evt = new CustomEvent(`message`, {detail: { message: message }})
        document.dispatchEvent(evt)

        setTimeout(() => {
            let evt = new CustomEvent(`clear-message`)
            document.dispatchEvent(evt)
        }, 5000)
    }

    start = () => {
        console.log(`parent start`)
    }

    handleStart = () => {
        console.log(`child start`)
        this.showMessage(`The game has begun!`)
        this.start()
    }

    shuffle = () => {
        this.showMessage(`Shuffling ...`)
        this.deck.shuffle()
        this.showMessage(`The deck has been shuffled`)
    }

    deal(numCards) {

    }

    addCardToBoard(card, facing) {
        const deckEl = document.querySelector(`.deck`)
        const cardEl = card.render(facing)
        deckEl.appendChild(cardEl)
    }

    showAll() {
        // const deckEl = document.querySelector(`.deck`)
        // deckEl.innerHTML = ``

        this.cards.forEach((card) => {
            this.addCardToBoard(card)
            // const cardEl = card.render()
            // deckEl.appendChild(cardEl)
        })
    }


    finish() {

    }
}