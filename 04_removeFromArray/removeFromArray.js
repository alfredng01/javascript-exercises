const removeFromArray = function(arr, item1, item2 = null, item3 = null, item4 = null) 
{
    const item1Index = (element) => element == item1;
    let firstItemIndex = arr.findIndex(item1Index);
    
    if (firstItemIndex != -1)
    {  
      arr.splice(firstItemIndex, 1);
    }
    
    if (item2 != null)
    {
        const item2Index = (element) => element == item2;
        let secondItemIndex = arr.findIndex(item2Index);
        if (secondItemIndex != -1)
        {
          arr.splice(secondItemIndex, 1);
        }
    }
    
    if (item3 != null)
    {
        const item3Index = (element) => element == item3;
        let thirdItemIndex = arr.findIndex(item3Index);
        if (thirdItemIndex != -1)
        {
          arr.splice(thirdItemIndex, 1);
        }
    }
    
    if (item4 != null)
    {
        const item4Index = (element) => element == item4;
        let fourthItemIndex = arr.findIndex(item4Index);
        if (fourthItemIndex != -1)
        {
          arr.splice(fourthItemIndex, 1);
        }
    }
    
    return (arr);
};


// Do not edit below this line
module.exports = removeFromArray;
