function countMultiples(arr) {
    const result = {};
  
    for (let i = 1; i <= 9; i++) {
      result[i] = 0; // Initialize counts
    }
  
    for (let num of arr) {
      for (let i = 1; i <= 9; i++) {
        if (num % i === 0) {
          result[i]++;
        }
      }
    }
  
    return result;
  }
  
  
  const inputArray = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  console.log("Output:", countMultiples(inputArray));

  
  //output
//   Output: {
//     '1': 11,
//     '2': 8,
//     '3': 4,
//     '4': 4,
//     '5': 3,
//     '6': 2,
//     '7': 0,
//     '8': 1,
//     '9': 1
//   }