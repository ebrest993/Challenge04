## THIS IS A CODING QUIZ WEBSITE ##

# What follows is an explanation of functions and variables

# Question/Answer Arrays

I elected to put my questions and answers alongside one another in arrays. I've been told several times this was the more complicated way to go about this project, but by then it was too late to start over. So I proceeded to make it work as best as possible.

# START GAME FUNCTION

Upon starting the game, the "start game" button is disabled, and the timer starts, simultaneously pulling up the first question.

# QUESTION ONE

This function creates a div element, and populates it with the first question and four answer buttons. A for loop is used to generate the buttons themselves and populate them with said answers. An if/else statement is used to determine if the user has given a correct answer (which adds to their score), or an incorrect answer (which deducts 5 seconds from the timer).

# REMAINING QUESTIONS

The following questions follow the same pattern, with the noted addition of a .remove() method. This removes the previous question as the user progresses through the quiz.

# END GAME

After the final question, the user is prompted with a textarea to input their initials.

# STILL TO DO

Obviously this is an incomplete challenge. I restarted several times, and found way too much on my plate as a result.

The remains of my to-do list are as follows:
 - add remainder of the 5 questions
 - debug the .remove() method
 - display the high scores and initials upon completion
 - add comments to js file