// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######


//Make loop to add # and log string

function makeTriangle (char='#', num=3) {
    let str = char
    for (i = 1; i <= num; i++) {
        console.log(str)
        str += char
    }
}