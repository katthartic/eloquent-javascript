// Write a program that creates a string that represents an 8×8 grid,
//using newline characters to separate lines. At each position of the
//grid there is either a space or a "#" character. The characters should
//form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a binding
//size = 8 and change the program so that it works for any size, outputting
//a grid of the given width and height.

//Assumptions
  // no arguments
  // must use newline characters, no separate logs

//Psuedo code
  // define three string variables
    // str starts with space
    // str starts with #
    // output string
  // for loop to create first str
    // if odd place space, if even place #
  // for loop to create second str
    // if even place space, if odd place #
  // for loop to creat final
    // concatenate rows

function chessboard() {
    let firstRow = '\n'
    let secondRow = '\n'
    let board = ''
    for (let i = 1; i <=8; i++) {
        if (i % 2 === 1) firstRow = ' ' + firstRow
        if (i % 2 === 0) firstRow = '#' + firstRow
    }
    for (let j = 1; j <=8; j++) {
        if (j % 2 === 1) secondRow = '#' + secondRow
        if (j % 2 === 0) secondRow = ' ' + secondRow
    }
    for (let k = 1; k <=8; k++) {
        board += firstRow + secondRow
    }
    console.log(board)
  }
