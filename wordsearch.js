const wordSearch = (letters, word) => { 
    let verticalWord;
    let horizontalWord;
    // Horizontal Check Function: 
    if (letters.length === 0 || !word) {
    return false;
    };
    // joins each element of letters into a string
    const horizontalJoin = letters.map(ls => ls.join(''))
    // // iterate thorugh elements of joined string
    for (l of horizontalJoin) {
    //     // if string includes specified word
        if (l.includes(word)) {
    //         // console.log(l);
            horizontalWord = true}
    } 

    // Vertical Check Function:
    let verticalResults = [];
    for (let col = 0; col < letters[0].length; col++) {
        let verticalArray = [];
        verticalResults.push(verticalArray);
      for (let row = 0; row < letters.length; row++) {
        verticalArray.push(letters[row][col]);
        }        
    }
    // makes an array out of our vertical results
    const verticalJoin = verticalResults.map(ls => ls.join(''))
    // iterate through strings of verticalJoin array's elements
    for (l of verticalJoin) {
        // console.log(l);
        // if that element includes the provided word
        if (l.includes(word)) {
            verticalWord = true;
        }
    }
    console.log(`horizontalWord: `, horizontalWord);
    console.log(`verticalWord: `, verticalWord)

    if (horizontalWord || verticalWord === true) {
        return true;
    }   
   else return false;
};

module.exports = wordSearch


// TEST FOR FALSE
wordSearch([
    ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'I', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'F', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'L', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')

  // TEST FOR TRUE
  wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'SEINFELD')