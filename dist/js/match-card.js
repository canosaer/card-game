class MatchCard extends Game{start=()=>{this.clickCount=0,this.clickedCards=[],this.freeze=!1,this.deck.shuffle(),this.cardFacing="down",this.startCards=this.deck.deal(12),this.startCards.forEach((e=>{this.addCardToBoard(e,this.cardFacing)})),document.querySelector(".start").style.display="none";document.querySelectorAll(".card").forEach((e=>{e.addEventListener("click",this.handleClick)})),document.querySelector(".finish").style.display="inline"};handleClick=e=>{if(!this.freeze){if(this.clickCount<=2&&e.target.classList.contains("card-back")){this.clickCount++,e.target.remove();const t={rank:e.currentTarget.querySelector(".rank").textContent,suit:e.currentTarget.querySelector(".suit").textContent,element:e.currentTarget};this.clickedCards.push(t)}2===this.clickCount&&this.checkMatch()}};checkMatch=()=>{this.clickedCards[0].rank===this.clickedCards[1].rank||this.clickedCards[0].suit===this.clickedCards[1].suit?this.handleMatch():(this.freeze=!0,this.showMessage("No match."),setTimeout((()=>{this.clickedCards.forEach((e=>{if(console.log(e.element),!e.element.querySelector("card-back")){const t=document.createElement("div");t.classList.add("card-back"),e.element.appendChild(t)}this.freeze=!1})),this.clickedCards=[]}),750)),this.clickCount=0};handleMatch=()=>{this.showMessage("You found a match!"),this.clickedCards.forEach((e=>{e.element.removeEventListener("click",this.handleClick)})),this.clickedCards=[],this.clickCount=0};finish(){document.querySelector(".finish").style.display="none",document.querySelectorAll(".card").forEach((e=>{e.remove()})),document.querySelector(".start").style.display="inline"}}new MatchCard;
//# sourceMappingURL=match-card.js.map