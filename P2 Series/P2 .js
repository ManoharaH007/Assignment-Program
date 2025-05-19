function generateOddSeries(a) {
    let result = [];
    for (let i = 0; i < a; i++) {
      result.push(2 * i + 1);
    }
    return result.join(", ");
  }
  
  
  const a = 5; 
  console.log("Output:", generateOddSeries(a)); 




  //output
 // Output: 1, 3, 5, 7, 9