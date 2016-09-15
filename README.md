<!--
Creator: Alex White
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# JavaScript Racer OOP Refactor

### Introduction

In this lab, we will be working again on our JavaScript Racer game from last week. Except this time we want you to use an Object Oriented approach.

## Exercise

To write "Object Oriented" code, we have to think about the problem we're trying to solve in terms of its *actors*. What does each "actor" or object _know_ about the world, internally (e.g. what does it "encapsulate")? What behaviors or actions does the object need to be able to do? How do we tell the object to take an action (i.e. what is its "public interface")?

The most important rule of Object Oriented codes it to _avoid polluting the global namespace_. You may NOT have messy global variables in your code (e.g. "player_1_is_winner", "player_1_key_code", "game_over"), instead you must store game "state" _inside_ of your objects.

One of the most effective ways of writing Object Oriented code is to think about the interface _first_ by writing "driver code".

Here is some example driver code for making a cup of coffee:

```
var cup = new Cup();
cup.isEmpty(); // true

cup.fill(30); // 30

cup.isEmpty(); // false

cup.sip(); // 10
cup.sip(); // 10
cup.sip(); // 10
cup.sip(); // 0

cup.isEmpty(); // true
```

<details>
<summary>**How would you code the `Cup` described above?** (Click Here for solution)</summary>
<br>
```js
function Cup() {
    this.current_volume = 0; // percent of liquid in cup
    this.isEmpty = function() {
        return this.current_volume > 0;
    }
    this.fill = function(volume) {
        this.current_volume = this.current_volume + volume;
        // edge case! we can't fill the cup more than 100%!
        if (this.current_volume > 100) {
            this.current_volume = 100; // uh oh, we spilled some!
        }
        return this.current_volume;
    }
    this.sip = function() {
        var remaining_volume = this.current_volume - 10;
        if (remaining_volume > 0){
            var difference = this.current_volume - remaining_volume;
            this.current_volume = remaining_volume;
            return difference;
        } else {
            // edge case! current_volume can't be negative!
            this.current_volume = 0;
            return 0;
        }
    }
}
```
</details>

#### Exercise: Racing Game Driver Code
Using the above example, write driver code for an Object Oriented racing game.

* What objects do you need?
* What do your object know (what internal values do they store)?
* What can your objects do (what public methods do they have)?
* How do your objects interact? Do any of your objects know about / contain other objects?

#### Exercise: Racing Game Refactor

Please navigate in your terminal to your racing game from last week. Follow the instructions to create a new branch `oop_refactor` so you won't break your game or lose your original code.

First, make sure that your repo is "clean" (i.e. make sure you don't have any changes that you haven't commited).

```bash
git status # check and see if any files have changed
git add path/to/some_file.js # add your files
git commit -m "my description of what changed"
```

Now we're ready to get started! Let's create a new branch, so that we can play around without breaking our original project:

```bash
git branch oop_refactor # create a new branch, using your existing code
git checkout oop_refactor
```

You're ready to start coding! Make sure to follow your driver code!

**Bonus:**
- Add that feature you didn't have time to do over the weekend!

#### Starter code

Your starter code is your JS Racer game from last weekend. 

#### Deliverable

Your game should look the same as it did before, or better if you have time and want to update the UI :)

### Additional Resources

- Eloquent JavaScript's [chapter on Object Oriented Programming](http://eloquentjavascript.net/1st_edition/chapter8.html) gets a little advanced, but is excellent.

### Self Evaluation

During the previous exercise, rate your progress on a scale of 1-5 (5 being the highest) for the following criteria:

- **Persistence:** Do you handle frustration well? Do you independently pursue understanding?
- **Organization:** Do you thoughtfully implement best coding patterns and practices?
- **Collaboration:** Do you make an effort solve problems and share your ideas with others?
- **Communication:** Do you clearly convey your thoughts to others in illustrative and clear ways?
- **Self-compassion:** Do you make productive use of turning failures into learning opportunities?
- **Resourcefulness:** Do make an effort to compare and contrast new ideas with ones you already know? 
