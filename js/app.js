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
  let $okBtn = $("#okBtn");
  let $goBtn = $("#goBtn");
  let $exit = $("#exit");

  let $card = $(".card");
  let cardArr = [];

  let randomCard;

  // Creating an array of cards
  for (let i = 0; i < $card.length; i++) {
    cardArr.push($card[i]);
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

  console.log(cardArr);

  let pickRandomCard = function(arr) {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
    // return array[i];
  }

  // Testing shuffleCards function on click
  // $("#tempBtn").on("click", function() {
  //   console.log("clicked");
  //   $(".card").remove();
  //   shuffleCards(cardArr);
  //   console.log(cardArr);
  //   console.log(cardArr[0]);
  //   for(let i = 0; i < cardArr.length; i++) {
  //     $(".container").append(cardArr[i]);
  //   }
  // });

  $startBtn.on("click", function() {
    console.log('click');
    $(".modal-intro-wrapper").fadeOut(500);
    $(".modal-instruction-wrapper").fadeIn(500);
  });

  $okBtn.on("click", function() {
    console.log('click');
    $(".modal-instruction-wrapper").fadeOut(500);
    $(".modal-popup-wrapper").fadeIn(500);
    let findMe = pickRandomCard(cardArr);
    $(".card-box").append(findMe);
    console.log(pickRandomCard(cardArr));
  });

  $goBtn.on("click", function() {
    console.log('click');
    $(".modal-popup-wrapper").fadeOut(500);
    $(".card").remove();
    shuffleCards(cardArr);
    console.log(cardArr);
    console.log(cardArr[0]);
    for(let i = 0; i < cardArr.length; i++) {
      $(".container").append(cardArr[i]);
    }
  });

  $exit.on("click", function() {
    $(".modal-wrapper-2").fadeOut(500);
  });



});
