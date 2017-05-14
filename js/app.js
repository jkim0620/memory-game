$(document).ready(function() {
  /*
  PROGRAM Where's Waldo Memory Game
    User should click on start button to start the game

    On click of start button, a picture of Waldo will be given to the user
    Flip all cards(approx 30-50 cards) so that user can see the pic side
    User will have 2 seconds to observe
    After time is up, flip back the cards.
    User should find Waldo within 3 guesses
      #1. If the user clicks on wrong card, it would flip for a sec and flip back, and hint the user by giving hot or cold clues

      #2. If the user doesn't get the answer after 3 guesses the cards will shuffle and flip to the pic side, and another 2 seconds will be given to the user
      and repeat #1

      #3. If the user finds Waldo, alert "You win" and give the user two options (continue / end)

      #4-1. if user wants to continue, move on to next stage.
        New character will be given to the user
        Shuffle the cards and flip cards for 3seconds and user repeats #1,2,3 and 4

      #4-2. if user wants to end, end the game.
  END
  */

  // variables
  let $startBtn = $("#startBtn");
  let $endBtn = $("#endBtn");
  let $continueBtn = $("#continueBtn");
  let $goBtn = $("#goBtn");
  let $infoBtn = $("#infoBtn");
  let $goBackBtn = $("#goBackBtn");
  let $replayBtn = $("#replayBtn");
  let $endGameBtn = $("#endGameBtn");
  let $exitBtn = $("#exitBtn");
  let $returnBtn = $("#returnBtn");
  let $resumeBtn = $("#resumeBtn");
  let $quitBtn = $("#quitBtn");

  console.log($startBtn);

  let findMe;
  let clickedCard;
  let guesses = 3;

  let $card = $(".card");
  let cardArr = [];

  let randomCard;
  let $thisIsMe;
  let $thisIsMeIndex;
  let currentIndexNum;
  let showMe;
  let x1;
  let x2;
  let y1;
  let y2;

  // Creating an array of cards
  for (let i = 0; i < $card.length; i++) {
    cardArr.push($card[i]);
  }

  // Calculating the distance
  let calculateDistance = function() {
    if ($thisIsMeIndex === 0 || $thisIsMeIndex === 1 || $thisIsMeIndex === 2 || $thisIsMeIndex === 3 || $thisIsMeIndex === 4 || $thisIsMeIndex === 5) {
      y1 = 4;
    } else if ($thisIsMeIndex === 6 || $thisIsMeIndex === 7 || $thisIsMeIndex === 8 || $thisIsMeIndex === 9 || $thisIsMeIndex === 10 || $thisIsMeIndex === 11) {
      y1 = 3;
    } else if ($thisIsMeIndex === 12 || $thisIsMeIndex === 13 || $thisIsMeIndex === 14 || $thisIsMeIndex === 15 || $thisIsMeIndex === 16 || $thisIsMeIndex === 17) {
      y1 = 2;
    } else if ($thisIsMeIndex === 18 || $thisIsMeIndex === 19 || $thisIsMeIndex === 20 || $thisIsMeIndex === 21 || $thisIsMeIndex === 22 || $thisIsMeIndex === 23) {
      y1 = 1;
    }

    if ($thisIsMeIndex === 5 || $thisIsMeIndex === 11 || $thisIsMeIndex === 17 || $thisIsMeIndex === 23) {
      x1 = 6;
    } else if ($thisIsMeIndex === 4 || $thisIsMeIndex === 10 || $thisIsMeIndex === 16 || $thisIsMeIndex === 22) {
      x1 = 5;
    } else if ($thisIsMeIndex === 3 || $thisIsMeIndex === 9 || $thisIsMeIndex === 15 || $thisIsMeIndex === 21) {
      x1 = 4;
    } else if ($thisIsMeIndex === 2 || $thisIsMeIndex === 8 || $thisIsMeIndex === 14 || $thisIsMeIndex === 20) {
      x1 = 3;
    } else if ($thisIsMeIndex === 1 || $thisIsMeIndex === 7 || $thisIsMeIndex === 13 || $thisIsMeIndex === 19) {
      x1 = 2;
    } else if ($thisIsMeIndex === 0 || $thisIsMeIndex === 6 || $thisIsMeIndex === 12 || $thisIsMeIndex === 18) {
      x1 = 1;
    }

    if (currentIndexNum === 0 || currentIndexNum === 1 || currentIndexNum === 2 || currentIndexNum === 3 || currentIndexNum === 4 || currentIndexNum === 5) {
      y2 = 4;
    } else if (currentIndexNum === 6 || currentIndexNum === 7 || currentIndexNum === 8 || currentIndexNum === 9 || currentIndexNum === 10 || currentIndexNum === 11) {
      y2 = 3;
    } else if (currentIndexNum === 12 || currentIndexNum === 13 || currentIndexNum === 14 || currentIndexNum === 15 || currentIndexNum === 16 || currentIndexNum === 17) {
      y2 = 2;
    } else if (currentIndexNum === 18 || currentIndexNum === 19 || currentIndexNum === 20 || currentIndexNum === 21 || currentIndexNum === 22 || currentIndexNum === 23) {
      y2 = 1;
    }

    if (currentIndexNum === 5 || currentIndexNum === 11 || currentIndexNum === 17 || currentIndexNum === 23) {
      x2 = 6;
    } else if (currentIndexNum === 4 || currentIndexNum === 10 || currentIndexNum === 16 || currentIndexNum === 22) {
      x2 = 5;
    } else if (currentIndexNum === 3 || currentIndexNum === 9 || currentIndexNum === 15 || currentIndexNum === 21) {
      x2 = 4;
    } else if (currentIndexNum === 2 || currentIndexNum === 8 || currentIndexNum === 14 || currentIndexNum === 20) {
      x2 = 3;
    } else if (currentIndexNum === 1 || currentIndexNum === 7 || currentIndexNum === 13 || currentIndexNum === 19) {
      x2 = 2;
    } else if (currentIndexNum === 0 || currentIndexNum === 6 || currentIndexNum === 12 || currentIndexNum === 18) {
      x2 = 1;
    }

    // Got this code from stackoverflow http://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas
    if (!x2) x2 = 0;
    if (!y2) y2 = 0;
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }

  // flip the cards face down
  let flipCardFaceDown = function() {
    $(".back").css({
      "display": "none"
    });
    $(".front").css({
      "display": "block"
    });
  }

  let flipCardFaceUp = function() {
    $(".front").css({
      "display": "none"
    });
    $(".back").css({
      "display": "block"
    });
  }

  // Function for shuffling cards
  // Couldn't figure out how to shuffle an array so got some help from stackoverflow
  // (http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
  let shuffleCards = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  //picks a random card from cardArr
  let pickRandomCard = function(arr) {
    let i = Math.floor(Math.random() * arr.length);
     return arr[i];
  }

  // pop up the card that user has to find
  let popupGame = function() {
    findMe = pickRandomCard(cardArr);
    $thisIsMe = $(findMe);

    $(".modal-popup-wrapper").fadeIn(500);
    $(".card-box").append(findMe);
  }

  // replay function
  let replayGame = function() {
    $(".modal-replay-wrapper").fadeIn(500);
  }

  // game function
  let playGame = function() {
    $(".card").remove();
    shuffleCards(cardArr);
    console.log(cardArr);
    console.log(cardArr[0]);
    for(let i = 0; i < cardArr.length; i++) {
      $(".flex-container").append(cardArr[i]);
      if (cardArr[i] === $thisIsMe[0]) {
        $thisIsMeIndex = i;
      }
    }
    window.setTimeout(function() {
      flipCardFaceUp();
    }, 500);
    window.setTimeout(function() {
      flipCardFaceDown();
    }, 650);

    $card.on("click", function() {
      $($(this).children().eq(0)).css({
        "display": "none"
      });
      $($(this).children().eq(1)).css({
        "display": "block"
      });

      clickedCard = $(this)[0];

      for (let i = 0; i < cardArr.length; i++) {
        // getting the index number of clicked item
        if (cardArr[i] === $(this)[0]) {
          currentIndexNum = i;
        }
      }

      // if clickedCard is not the answer
      if ($(this)[0] !== $thisIsMe[0]) {
        // and if there are remaining guesses DO THIS
        if (guesses > 0) {
          // hot or cold clues
          if (calculateDistance() > 3) {
            window.setTimeout(function() {
              $("#coldAlert").show(500);
            }, 200);
            window.setTimeout(function() {
              flipCardFaceDown();
            }, 1000);
            window.setTimeout(function() {
              $("#coldAlert").fadeOut(500);
            }, 1500);
          } else if (calculateDistance() > 1.5) {
            window.setTimeout(function() {
              $("#warmAlert").show(500);
            }, 200);
            window.setTimeout(function() {
              flipCardFaceDown();
            }, 1000);
            window.setTimeout(function() {
              $("#warmAlert").fadeOut(500)
            }, 1500);
          } else {
            window.setTimeout(function() {
              $("#hotAlert").show(500);
            }, 200);
            window.setTimeout(function() {
              flipCardFaceDown();
            }, 1000);
            window.setTimeout(function() {
              $("#hotAlert").fadeOut(500)
            }, 1500);
          }

          guesses -= 1;
          $("#guesses").text(guesses);

          if (guesses === 0) {
            $card.off();
            window.setTimeout(function() {
              flipCardFaceUp();
              guesses = 3;
              $("#guesses").text(guesses);
            }, 2200);
            window.setTimeout(function() {
              replayGame();
              $(".modal-replay-wrapper p").text("Your guess is up! Play again?");
            }, 2700);
          }

        }

      } else if ($(this)[0] === $thisIsMe[0] && guesses > 0) {
        window.setTimeout(function() {
          $("#foundMeAlert").fadeIn(500);
        }, 400);
        window.setTimeout(function() {
          $("#foundMeAlert").fadeOut()
        }, 1700);
        window.setTimeout(function() {
          $(this).off();
          guesses = 3;
          $("#guesses").text(guesses);
          flipCardFaceUp();
          replayGame();
          $(".modal-replay-wrapper p").text("You got me! Play again?");
        }, 2100);
      }
    }); // End of current card click function
  } // End of playGame function

  // end game function
  let endGame = function() {
    $("#modal-end").fadeIn(500);
  }

  $startBtn.on("click", function() {
    $(".modal-intro-wrapper").fadeOut(500);
    $(".modal-instruction-wrapper").fadeIn(500);
  });

  $endBtn.on("click", function() {
    endGame();
  });

  $continueBtn.on("click", function() {
    console.log('click');
    $(".modal-instruction-wrapper").fadeOut(500);
    popupGame();
  });

  $goBtn.on("click", function() {
    $(".modal-popup-wrapper").fadeOut(500);
    playGame();
  });

  $goBackBtn.on("click", function() {
    $("#modal-instruction-copy").fadeOut(500);
  });

  $infoBtn.on("click", function() {
    $("#modal-instruction-copy").fadeIn(500);
  });

  $exitBtn.on("click", function() {
    $("#modal-confirm").fadeIn(500);
  });

  $replayBtn.on("click", function() {
    $(".modal-replay-wrapper").fadeOut(500);
    popupGame();
  });

  $endGameBtn.on("click", function() {
    endGame();
  });

  $returnBtn.on("click", function() {
    $("#modal-replay").fadeOut(200);
    $("#modal-end").fadeOut(500);
    $("#modal-intro").fadeIn(500);
  });

  $resumeBtn.on("click", function() {
    $("#modal-confirm").fadeOut(500);
  });

  $quitBtn.on("click", function() {
    $("#modal-confirm").fadeOut(500);
    flipCardFaceUp();
    endGame();
  });
});
