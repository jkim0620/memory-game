# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Overview

Let's start out with something fun - **a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – it's up to you to come up with a fun and interesting game to build.

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!


---

### Technical Requirements

Your app must:

* **Render the game in the browser**
* **Design and implement logic for winning** & **visually display a win or loss state or which player won in a 2 player game**
* **Include separate HTML / CSS / JavaScript files**
* Use the **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **Vanilla JavaScript** or **jQuery** for **DOM manipulation**
* **Deploy your game online**, where the rest of the world can access it [To be shown on Thursday - Github Pages]
* Use **responsive design** for HTML and CSS (adhere to best practices)

---

### Necessary Deliverables

* A **working game, built by you**, hosted on the internet
* A **git repository hosted on Github**, with a link to your hosted game in the URL section, and **frequent** commits dating back to the very beginning of the project
* **A ``readme.md`` file** which must include:
  - Explanations of the technologies used
  - Approach taken
  - User stories
  - Wireframes
  - How-to-use instructions
  - Unsolved problems
* A presentation deck which must include:
  - ~5 slides
  - Wireframes
  - Features of your project
  - Constraints you had to work with (e.g. technological, timing, content, etc.)
  - Any other information you think might help us (your stakeholders) understand what you've built

---

### Instructions

* **1.** User will be given a random card.
* **2.** Cards will flash instantly face up and then back down.
* **3.** User gets 3 guesses to find the matching card.
* **4.** User will be hinted with hot & cold clues.

---

### Technologies

* **jQuery** User will be given a random card.
* **HTML5** Cards will flash instantly face up and then back down.
* **CSS3** User gets 3 guesses to find the matching card.

---

### References

* **Stackoverflow**   

  - http://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas

```javascript
if (!x2) x2 = 0;
if (!y2) y2 = 0;
return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
```

  - http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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

* **W3Schools**
* **MDN**
* **CSS-Tricks**

---

### Potential Project Ideas

##### Simon
A game with 4 colored "buttons". In this game, a round consists of lighting up one or more buttons in a random order, after which the player must reproduce that order by pressing the buttons. As the game progresses, the number of buttons to be pressed increases.

##### Card Counter
A game where cards are flipped over one by one over a set amount of time. By the end of the timer, user should be able to enter the "card count" or "score" based on a card counting strategy.

##### Connect Four
Users will take turns filling boxes in a grid and checking for a win condition. Gravity takes hold of the boxes and forces drops to the bottom of the game board!

##### Blackjack [Challenging]
Make a one player game where people down on their luck can lose all their money by guessing which card the computer will deal next!

---

### Useful Resources

* **[w3 CSS](http://www.w3schools.com/w3css/)** _(CSS tutorials and reference)_
* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[Github Pages](https://pages.github.com)** _(for hosting your game)_

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes as specified above? Did you use source control (Git) as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you added a personal spin or creative element into your project submission?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?

* __Presentation__: Did you present your game, your code, and your project-making experience clearly and effectively to the class?

* __Total__: Your instructors will give you a score for each section between:

| Score          | Expectations   |
| :------------- | :------------- |
| **0**          | _Incomplete._  |
| **1**          | _Does not meet expectations._ |
| **2**          | _Meets expectations, good job!_ |
| **3**          | _Exceeds expectations, you wonderful creature, you!_ |

This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!

### A Note on Plagiarism

Plagiarism is a serious offense and grounds for expulsion. Our entire policy can be found [in the wiki](https://github.com/ga-students/wdi-nyc-purple-rain-students/wiki/General-Assembly-Plagiarism-Policy).

You are encouraged to ask others, including students, instructors, and stackoverflow, for help. However, it is NOT ACCEPTABLE TO COPY another person's code and submit it as your own. More importantly, it is detrimental to your learning and growth.

All of the following are considered plagiarism or cheating:
* Turning in work that is not your own.
* Turning in someone else's work as your own.
* Hiring, or paying someone to do your work for you.
* Copying words or code without giving credit.
* Building or copying someone else’s idea without their knowledge or giving credit.
* Giving incorrect information about a source.
* Changing words, variable names, etc. but copying the code or files of a source without giving credit.
* Copying so many ideas or code blocks from a source that it makes up the majority of your work, whether you give credit or not.
* Failing to put a quotation in quotation marks.

In an effort to not plagiarize, credit for this content goes to:
* [Plagiarism.org](http://plagiarism.org/), specifically the “plagiarism 101” section.  Content was adapted for code.  For more information, please see:
  * [What is Plagiarism](http://www.plagiarism.org/plagiarism-101/what-is-plagiarism)
  * [Types of Plagiarism](http://www.plagiarism.org/plagiarism-101/types-of-plagiarism)
* [How do I safely write code in my own 'words' and not plagiarize?](http://programmers.stackexchange.com/questions/80167/how-do-i-safely-write-code-in-my-own-words-and-not-plagiarize)
* [Avoiding Plagiarism:  Writing Computer Code](http://www.upenn.edu/academicintegrity/ai_computercode.html)
