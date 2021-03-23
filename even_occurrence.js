var evenOccurrence = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var count = 0
    arr.forEach(element => {
      if (element === arr[i]) count++
    })
    if (count % 2 === 0) return arr[i]
  };
  return null
}