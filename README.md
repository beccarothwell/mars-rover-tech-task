# 👾 🚀 Mars Rover Tech Task 👾 🚀

This application creates a Plateau grid, creates a Rover, and moves the Rover around the Plateau grid.

It outputs the Rover's postion and direction at the end of each set of movement instructions.

## Requirements

This application requires Node version 18

To install Node.js follow this link and click on the green button for Mac or Windows: https://nodejs.org/en/download/

If you already have Node.js installed you can check which version is installed by typing the following command in your terminal:

    node --version

Your terminal should respond with something similar to the following:

    v18.16.0

🔍 Don't worry if you don't see the exact same version of Node 18. Any version that starts with v18 should work correctly

## Setup Instructions

In order to run this application you must first `fork` and `clone` the repository from Github.

Go to the Github website to `fork` the repository into your account.

Use the `git clone` command _on the forked repository in your account_ to make a local copy of the repository on your computer.

Open a terminal and navigate to the directory on your command line

Run `npm install` to install local dependencies.

## Testing

This application uses Jest for unit testing.

Run `npm test` to run all tests in the application.

This will also promt Jest to begin watching all files for changes. Any saved changes to the application files will automatically rerun the tests.

## Using the application

Input values for the Plateau, Rover, and Movement Instructions are found in index.ts.

To see the output for the specified values run `npm start` in the terminal.

This will also prompt nodemon to begin watching all files for changes. Any saved changes to the application files will automatically rerun index.ts and display the new output values.

Try changing the input values in index.ts to see what the new output values for the Rover position might be!

## Key features

The Rover cannot be placed outside of the boundaries of the defined Plateau.
If the input attempts to place a Rover outside of the Plateau an error is thrown and no Rover is created.

The Rover cannot move past the boundaries of the defined Plateau.
If the input movement instructions attempt to move the Rover outside of the Plateau the Rover stops at the last valid instruction, and an error is thrown.

If an invalid compass direction input is given, or an invalid movement instruction input, then an error is thrown.

Multiple Rovers can be placed on the Plateau, however they cannot currently interact with each other.
It is possible for Rovers to occupy the same coordinates - future updates would prevent this, see future thoughts below.

## Assumptions

My initial feelings were that this task would require OOP to create classes for the Plateau and Rover, and instantiate an instance of each class.
However I noted that the Mars Rover Additional Info - TypeScript pdf stated:

> "💡 In general, prefer basic objects..."

My default, and the style of programming I am most comfortable with, is also functional programming. So, given the above advice, I felt it would be best this time to stick to types and basic objects, rather than getting stuck trying to work with classes.
This is something to potentially consider though if the application is updated in future.

I chose to have `parseMovementInput()` parse individual movement instruction characters, rather than parsing the whole input string, because I wanted to allow the Rover to follow any valid instructions in an input string, then stop at an invalid instruction - whether an invalid input or movement past the boundary of the Plateau. I had hoped to then output the position the Rover had stopped at, and any error messages such as "cannot move past the boundaries of the Plateau" or "invalid movement instruction, instructions must be 'L', 'R', or 'M'.

I chose to allow case insensitive instructions for input, provided they were the correct character, and parse them toUpperCase to validate lowercase input.

## Future thoughts / considerations

### Console input, output, and error messages

I would have liked to set the application up to accept input from the console and print output responses, including printing error messages instead of throwing errors when the rover hits the edge of the plateau, and for invalid input. I got part of the way, but recognised that there was not time to adequately complete this addition, so chose to remove those functions rather than submitting unfinished code.

In future, a console implementation would print messages such as the below for a successful Rover placement:

    ------------------------------------------------------------------------------------------------
    | Rover placed on Plateau at coordinates x:${rover.x}, y:${rover.y}, facing ${rover.direction} |
    ------------------------------------------------------------------------------------------------

And display error such as this if the Rover is placed outside of the Plateau:

    ---------------------------------------------------
    | Rover cannot be placed outside of the Plateau   |
    | x coordinate must be between 0 and ${plateau.x} |
    | y coordinate must be between 0 and ${plateau.y} |
    ---------------------------------------------------

A successful Rover movement would display a message such as this:

    --------------------------------------------------------------------------------------
    | Rover movement succcessfully completed                                             |
    | Rover stopped at coordinates x:${rover.x}, y:${rover.y}, facing ${rover.direction} |
    --------------------------------------------------------------------------------------

An instruction input which attempts to move the Rover outside of the Plateau would move the Rover as far as it could,
before displaying an error such as the below:

    --------------------------------------------------------------------------------------
    | Rover cannot move outside of the Plateau. The maximum x coordinate is ${plateau.x} |
    | Rover stopped at coordinates x:${rover.x}, y:${rover.y}, facing ${rover.direction} |
    --------------------------------------------------------------------------------------

### Multiple Rovers, and other objects on the Plateau

Multiple Rovers can currently be placed on the Plateau, however they cannot interact with each other, or with anything else on the Plateau.
In future I would initially like to add an optional rovers?: property to the Plateau object.
When a Rover moves to a set of coordinates on the Plateau, it would then not only check that the coordinates are within bounds,
but would also check that there is not another Rover occupying those coordinates.
If there were, it would stop at the last valid movement instruction, similarly to when it reaches the edge of the Plateau.

Once implemented, I would then like to expand this further, by having a randomly generated array of objects placed on the Plateau, at the point of Plateau creation, for the Rovers to interact with. For example rocks to navigate around, samples to collect, Martians to interact with etc.

My initial thoughts are that this would possibly require a Map of occupied coordinates, with a key => value pairs such as:

    [x,y]: {x: 1, y: 2, direction: 'N'} : Rover,
    [x,y]: {} : Rock,
    [x,y]: {} : Sample

When an movement instruction of `'M'` was received, the application could then run a function such as checkPlateauCoordinates to find out if there was anything occupying the next set of coordiates, and act accordingly, by stoping the Rover and outputting the result to the console.

In future I would also like to add an function to add a name to each Rover object, to distinguish multiple Rovers moving about the Plateau.

### Vehicles other than Rovers

To add future vehicles other than Rovers, assuming they moved in the same way as a Rover about the Plateau, I would likely want to seperate out the placement and movement logic into files for Vehicles, using a type or interface for Vehicles, that is then extended and built on seperately for each type of Vehicle such as Rover or Buggy.
