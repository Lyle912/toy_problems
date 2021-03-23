var translateRomanNumeral = function (romanNumeral) {
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var runningTotal = 0
  if (typeof romanNumeral !== "string") return null
  for (var i = 0; i < romanNumeral.length; i++) {
    if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) runningTotal -= DIGIT_VALUES[romanNumeral[i]]
    else {
      runningTotal += DIGIT_VALUES[romanNumeral[i]]
    }
  }
  return runningTotal
};