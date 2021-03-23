var bubbleSort = function(array) {
  // Your code here.
  var temp = 0;
  for(var i = 0; i <array.length; i++){
    if (array[i]>array[i+1]){
      temp = array[i]
      array[i] = array[i+1]
      array[i+1] = temp
      i-=2
    }
  }
  return array
};

console.log(bubbleSort([2,1,3,100,92,21,2,1,3,100,92,21]))