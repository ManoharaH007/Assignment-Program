class Calculator {
    constructor(a, b, operation) {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.operation = operation.toLowerCase();
    }
  
    calculate() {
      switch (this.operation) {
        case "addition":
          return this.a + this.b;
        case "subtraction":
          return this.a - this.b;
        case "multiplication":
          return this.a * this.b;
        case "division":
          if (this.b === 0) {
            return "Error: Division by zero!";
          }
          return this.a / this.b;
        default:
          return "Invalid operation. Use: addition, subtraction, multiplication, division.";
      }
    }
  }
  
 
  const calc1 = new Calculator(10.5, 5.2, "addition");
  console.log("Result:", calc1.calculate()); 
  
  const calc2 = new Calculator(15.0, 3.0, "division");
  console.log("Result:", calc2.calculate()); 
  

  //out Put
//Result: 15.7
//Result: 5