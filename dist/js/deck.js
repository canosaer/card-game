class Deck{DEFAULT_DECK_SIZE=52;deckSize=null;SUITS=["♥","♦","♣","♠"];RANKS=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];constructor(s){this.deckSize=s||this.DEFAULT_DECK_SIZE,this.create()}create(){this.cards=[],this.SUITS.forEach((s=>{this.RANKS.forEach((t=>{this.cards.push(new Card(s,t))}))}))}shuffle(){for(var s,t,r=this.cards.length;r;)t=Math.floor(Math.random()*r--),s=this.cards[r],this.cards[r]=this.cards[t],this.cards[t]=s;return this.cards}reset(){this.create()}deal(s){let t=[];for(let r=0;r<s;r++)t.push(this.cards.pop());return t}}new Deck;
//# sourceMappingURL=deck.js.map