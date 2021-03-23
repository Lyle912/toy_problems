var onesToWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty"
];
var tensToWords = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
]
var numbersToPlace = {
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
  1000000000000: "trillion",
  1000000000000000: "quadrillion",
  1000000000000000000: "quintillion"
};

Number.prototype.toEnglish = function () {
  const arrayOfDigits = Array.from(String(this), Number)
  //console.log(arrayOfDigits)
  if (numbersToPlace.hasOwnProperty(this)) return `one ${numbersToPlace[this]}`
  if (this <= 20) return onesToWords[this]
  if (this < 100) {
    return `${tensToWords[arrayOfDigits[0]]}${arrayOfDigits[1] === 0 ? "" : '-' + onesToWords[arrayOfDigits[1]]}`
  }

};

const toEnglish = Number.prototype.toEnglish;

console.log((100).toEnglish())