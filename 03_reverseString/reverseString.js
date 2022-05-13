const reverseString = function(word) 
{
    let wordArray = word.split("");
    let reversedArray = wordArray.reverse();
    let reversed = reversedArray.join("");

    return (reversed);

};

// Do not edit below this line
module.exports = reverseString;
