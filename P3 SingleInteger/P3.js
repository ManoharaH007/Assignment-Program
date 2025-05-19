function generateOddSeriesWithCondition(a) {
  let limit = a;
  if (a % 2 === 0) {
    limit = a - 1;
  }
  let result = [];
  for (let i = 1; i <= limit; i += 2) {
    result.push(i);
  }
  return result.join(", ");
}


console.log( generateOddSeriesWithCondition(4)); 
console.log( generateOddSeriesWithCondition(6)); 

//output
// 1, 3
// 1, 3, 5