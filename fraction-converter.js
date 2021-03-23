var toFraction = function (number) {
  // Your code here

  //bandaid solution for  full numers
  if(!number.toString().includes(".")) return (number + "/1")

  //negative numbers
  var negative = false
  if(number<0){
    number = Math.abs(number)
    negative = true
  }

  var numerator = number.toString().replace('.','')
  var denominator = Math.pow(10, (numerator.length-1))

  var recurrsionGCD = (numerator, denominator) => {
    //base case
    if (denominator === 0) return (numerator)
    //Euclidean Algorithm
    return (recurrsionGCD(denominator, numerator % denominator))
  };

  var gcd = recurrsionGCD(numerator, denominator)

  //divide top and bottom by GCD
  if (!negative)  return (numerator / gcd + "/" + denominator / gcd)
  return ("-" + numerator / gcd + "/" + denominator / gcd)
}

console.log(toFraction("-5"))