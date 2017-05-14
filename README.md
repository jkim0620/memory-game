# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Overview

* **One page website** - Memory Game.

![screen shot 2017-05-14 at 3 39 31 pm](https://cloud.githubusercontent.com/assets/18605009/26037159/d055f034-38bb-11e7-917f-1640865cff3c.png)

![screen shot 2017-05-14 at 3 39 57 pm](https://cloud.githubusercontent.com/assets/18605009/26037162/fdd5c8f4-38bb-11e7-8786-68c05cad81b9.png)

![screen shot 2017-05-14 at 3 40 55 pm](https://cloud.githubusercontent.com/assets/18605009/26037193/8576b034-38bc-11e7-8ea0-7a00581d466c.png)

* Used modals for home page, instruction page and popups instead of linking pages to keep the website as simple as possible.

![screen shot 2017-05-14 at 3 47 29 pm](https://cloud.githubusercontent.com/assets/18605009/26037202/af43b1aa-38bc-11e7-8b2e-71f01b543106.png)  

* **Color swatches**

![screen shot 2017-05-14 at 3 48 18 pm](https://cloud.githubusercontent.com/assets/18605009/26037221/fd434942-38bc-11e7-872d-a24814033a5d.png)  - rgb(58, 58, 79)

![screen shot 2017-05-14 at 3 50 33 pm](https://cloud.githubusercontent.com/assets/18605009/26037238/62525436-38bd-11e7-8764-f24e0f19609b.png)  - rgb(162, 249, 232)

![screen shot 2017-05-14 at 3 52 06 pm](https://cloud.githubusercontent.com/assets/18605009/26037241/6e64d302-38bd-11e7-8cfc-f7ea4ebffbca.png)  - rgb(244, 66, 66)

---

### How to play

* User will be given a random card.
* Cards will flash instantly face up and then back down.
* User gets 3 guesses to find the matching card.
* User will be hinted with hot & cold clues.

---

### Built with

* **jQuery** for DOM Manipulation - popups, modals, alert, click functions, Math functions, time setting etc.
* **HTML5**
* **CSS3**
* **Flexbox** for grid system and responsive web page

---

### Unsolved problems

* **Flipping effect**
* **Adding keypress functions** for a better user experience

---

### References

* **Stackoverflow:**

http://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas

```javascript
if (!x2) x2 = 0;
if (!y2) y2 = 0;
return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
```

http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
```javascript
let shuffleCards = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
```

* **W3Schools:** http://www.w3schools.com
* **jQeury API Documentation:** http://api.jquery.com/
* **CSS-Tricks(Flexbox):** https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---

### Special Thanks to

#
![screen shot 2017-05-14 at 2 57 17 pm](https://cloud.githubusercontent.com/assets/18605009/26037127/e65caffe-38ba-11e7-9a7f-ceb1bc3c6c0a.png)

**##Wonderful characters of 'Guess Who?' board game by -Hasbro**
