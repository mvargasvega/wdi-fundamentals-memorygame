console.log("Up and running!");




var cards = [
  {
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
  },
  {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
  },
  {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
  },
  {
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = []
cardOne.push(cardsInPlay);
cardTwo.push(cardsInPlay);



var checkForMatch = function(){
//  this.setAttribute('src',cards[cardId]cardImage)
  if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
    }
  } else{

  }

var flipCard = function () {
  var cardId ;//= this.getAttribute('data-id', i);
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  checkForMatch();
}



var createBoard = function() {
    for(i = 1; i <= cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','Images/back.png');
    cardElement.setAttribute( 'data-id', i );
    addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }

}

createBoard();
