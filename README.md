# Project #1: The Game

### Overview

#### Memory Game - A one page website for game app

https://jkim0620.github.io/memory-game/

![screen shot 2017-05-14 at 3 39 31 pm](https://cloud.githubusercontent.com/assets/18605009/26037159/d055f034-38bb-11e7-917f-1640865cff3c.png)

![screen shot 2017-05-14 at 3 39 57 pm](https://cloud.githubusercontent.com/assets/18605009/26037162/fdd5c8f4-38bb-11e7-8786-68c05cad81b9.png)

![screen shot 2017-05-14 at 3 40 55 pm](https://cloud.githubusercontent.com/assets/18605009/26037193/8576b034-38bc-11e7-8ea0-7a00581d466c.png)

* Used modals for home page, instruction page and popups instead of linking pages to keep the website as simple as possible.

![screen shot 2017-05-14 at 3 47 29 pm](https://cloud.githubusercontent.com/assets/18605009/26037202/af43b1aa-38bc-11e7-8b2e-71f01b543106.png)  

##### Color swatches

![swatch5](https://user-images.githubusercontent.com/18605009/27005952-2b6a659a-4df7-11e7-9949-7154ff41330f.png) - rgb(58, 58, 79)


![swatch6](https://user-images.githubusercontent.com/18605009/27005959-59a15252-4df7-11e7-9feb-d3418addd8ba.png) - rgb(162, 249, 232)


![swatch7](https://user-images.githubusercontent.com/18605009/27005963-78aceea4-4df7-11e7-81cb-05180ab4f348.png)  - rgb(244, 66, 66)

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
