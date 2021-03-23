var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

var telephoneWords = function (digitString) {

  const answerArray = [];
  var recursion = (currentString, nextLetter) => {
    if (currentString.length === digitString.length) {
      answerArray.push(currentString)
      return
    }
    for (let i = 0; i < (phoneDigitsToLetters[digitString[nextLetter]]).length; i++) {
      recursion(currentString + phoneDigitsToLetters[digitString[nextLetter]][i], nextLetter+1)
    }
  }
  recursion('', 0)
  return answerArray
}

console.log(telephoneWords('5678'))