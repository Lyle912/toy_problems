// function reverseInteger(number) {

//     var reverse = 0

//     for (let i = number; i > 0; i = (Math.floor(i / 10))) {
//         reverse = i % 10 + reverse * 10
//     }
//     return reverse
// }

//recursively 
function reverseIntegerRecursive(number, reversedNum = 0) {

    //base case
    if (number <= 0) return reversedNum

    //final return
    return (reverseIntegerRecursive(Math.floor(number / 10), number % 10 + reversedNum * 10))
}

console.log(reverseIntegerRecursive(123546))