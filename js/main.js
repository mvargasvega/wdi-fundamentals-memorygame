console.log("Up and running!");




var cards = ["queen","queen","king", "king"
 /* {
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
  }*/
];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
      } else {
     alert("Sorry, try again.")
   }
}

var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2){
      console.log ("Good Job, lets see if they match")
      checkForMatch();
    }else{
      console.log("Choose one more card")
    }
}

flipCard(0);
flipCard(1);
