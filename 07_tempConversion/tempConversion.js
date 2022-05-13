const ftoc = function(temp) 
{
  let unroundedTemp = (temp - 32) * (5 / 9)
  let roundedTemp = Math.round(unroundedTemp * 10) / 10

  return roundedTemp
};

const ctof = function(temp) 
{
  let unroundedTemp = (temp * (9 / 5)) + 32
  let roundedTemp = Math.round(unroundedTemp * 10) / 10

  return roundedTemp
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
