var firstNonRepeatedCharacter = function (string) {

  for (var i = 0; i < string.length; i++) {
    if (string.indexOf(string[i], i + 1) === -1 && string.indexOf(string[i]) === i) {
      return string[i]
    }
  }
  return null
};

console.log(firstNonRepeatedCharacter("aba"))
