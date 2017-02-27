// var divIndex = ['#topLeft', '#middleTop', '#topRight', '#middleLeft', '#middle', '#middleRight', '#bottomLeft', '#middleBottom', '#bottomRight'];
var $gameboard = $('.gameboard');

var player1 = [];
var player2 = [];
var activePlayer = true;

var turnCount = 0;

var winCondition =  [
                    ['1','2','3'],
                    ['1','4','7'],
                    ['1','5','9'],
                    ['2','5','8'],
                    ['3','6','9'],
                    ['4','5','6'],
                    ['7','8','9'],
                    ['3','6','9']
                  ];
var winner = [];

  // player1.every(winCondition[0]) === winCondition[0];

 // var findWinner = for (var i = 0; i < winCondition.length; i++) {
 //                    if (turnCount >= 5) {
 //                        player1.join().sort().includes(winCondition[i].join())
 //                      }
 //                    };
// var checkWin = if (player1.contains(winCondition1)) {
//   console.log("player 1 wins!");
// };

//if either player array contains all three numbers in one of the win condition arrays that player wins
var game = [
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9'
];
//game grid array to push into player arrays. When game array is empty without a winner the game is a draw

// $topLeft.on('click', function(event) {
// for (var i = 0; i <= 8; i++) {
//   if x >= i
//   return parseInt(i);//experimenting for event lisener.
// }
//player1


// $('.gameboard').on('click', function(event) {
  // debugger
  // if (activePlayer ===  true) {
  //   activePlayer = false
  // } else {
  //   activePlayer = true;
  // }
  // if (activePlayer === false) {
  //   player1.push(event.target.getAttribute('data-cell'));
  //   // event.target.//chanfge Class attribute;
  // } if (activePlayer === true) {
  //   player2.push(event.target.getAttribute('data-cell'))//change Class attribute;
  // } if (player1.join() === winCondition1.join()) {
  //   console.log('Player 1 wins')};
  //   if (player2.join() === winCondition1.join()) {
  //   console.log('Player 2 wins');
  //   }
//   });
// }); //WORKS -
$('.gameboard').on('click', function(event) {
  turnCount++;
  if (activePlayer ===  true) {
    activePlayer = false
  } else {
    activePlayer = true;
  }
  if (player1.includes(event.target.getAttribute('data-cell'))) {
    activePlayer = true;
  } else if (activePlayer === false) {
      player1.push(event.target.getAttribute('data-cell'));
      $(event.target).addClass('player1Img')

  } if (player2.includes(event.target.getAttribute('data-cell'))) {
    activePlayer = false;
  }  else if (activePlayer === true) {
    player2.push(event.target.getAttribute('data-cell'))
    $(event.target).addClass('player2Img')
  } for (var i = 0; i < winCondition.length; i++) {
    if (player1.sort().join().includes(winCondition[i].join())) {
    winner = 'Player 1';}
    if (player2.sort().join().includes(winCondition[i].join())) {
    winner = 'Player 2';
    }
    // else if (turnCount === 9) {
    //   $('player2Img').addClass($('gameboardInner'));
    //   $('player2Img').addClass($('gameboardInner'));
    //   player1 = [];
    //   player2 = [];
    //   activePlayer = true;
    //   turnCount = 0;
    //}
  }
});
