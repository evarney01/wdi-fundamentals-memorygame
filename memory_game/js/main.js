console.log("Up and running!");

let cards = [{rank: "queen",
    suit: "hearts",
    cardImage:"images/queen-of-hearts.png" },{rank: "queen",
    suit: "diamonds",
    cardImage:"images/queen-of-diamonds.png" },{rank: "king",
    suit: "hearts",
    cardImage:"images/king-of-hearts.png" },{rank: "king",
    suit: "diamonds",
    cardImage:"images/king-of-diamonds.png" }]
	
function createBoard.clearfix(){
    for(let i = 0; i < cards.length; i++) {
        cards[i].cardImage
    }
}
let cardsInPlay = []



function cardFlip(num){
    
    let flipCard = cards[num]
    

    cardsInPlay.push(flipCard)
}



function checkMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("you found a match")
    } else {
        console.log("No match")
    };