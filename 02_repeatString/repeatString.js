const repeatString = function(word, repetition) 
{
    if (word == "")
    {
        return ("");
    }

    if (repetition < 0)
    {
        return ("ERROR");
    }
    return word.repeat(repetition);
};

// Do not edit below this line
module.exports = repeatString;
