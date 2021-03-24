var makeChange = function (total) {
  //YOUR CODE HERE
  var coinOptions = [1, 2, 5, 10, 20, 50, 100, 200]
  var answerArray = []

  var calculateChange = (currentCoins, sumNeeded) => {
    if (sumNeeded === 0) {
      var addToAnswer = true;
      answerArray.forEach(answer => {
        if (answer.length === currentCoins.length) addToAnswer = false
      })
      if (addToAnswer) answerArray.push(currentCoins)
      return
    }
    coinOptions.forEach(coin => {
      if (sumNeeded - coin >= 0) calculateChange(currentCoins.concat(coin), sumNeeded - coin)
    })

  }
  calculateChange([], total)
  return answerArray.length
}

console.log(makeChange(5))