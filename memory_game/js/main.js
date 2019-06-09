console.log("Up and running!");

let cards = ['queen', 'queen', 'king', 'king']
let cardsInPlay = []

let cardOne = cards[0]
cardsInPlay.push(cardOne)
let cardTwo = cards[2]
cardsInPlay.push(cardTwo)
console.log(cardsInPlay)
//  there should be two cards in the card array`
if (cardsInPlay[0] === cardsInPlay[1]) { 
	console.log("You found a match!")}
else cardsInPlay[0] !== cardsInPlay[1] 
	alert("Sorry, try again.!");
