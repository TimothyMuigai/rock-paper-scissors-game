# Rock-Paper-Scissors-Game

- In this project, I was be building a rock paper scissors game using JavaScript. The game would involve two players who would each select one of three options - rock, paper, or scissors - and the winner would be determined by a set of rules created.

## Design:

1. A user interface that allows the players to select their choices by use of buttons each representing a choice(rock,paper,scissors)
2. A set of rules implemented in the game logic that determines the winner of each round
3. A mechanism for keeping score of the game
4. A reset button to start a new game
5. A color mechanism for showing who is ahead, behind and if it is a draw

## Challenges:

1. Coming up with the how to implement the buttons in the game logic
2. Implementing the game restart logic 
3. Resetting the scores and input(players choices) each round

## Overcoming the challenges:

1. I used addEventListener for each choice(rock, paper, scissors) for each player and assigned each to a variable player(1 and 2)choices then used the two variables to compare each player's input/choice to determine the winner
2. I assigned the relevant variables to their default ie.zero(0) or an empty space(" "). 
3. I assigned the players choices to the default zero(0) at the end of the ifs' statement before closing the playGame() function and an if statement at the beginning of the function ensuring the scores are updated after both players input their choices.

