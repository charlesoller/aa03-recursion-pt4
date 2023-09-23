/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
[
  [],       [ 1 ],
  [ 1, 2 ], [ 1, 3 ],
  [ 2 ],    [ 2, 3 ],
  [ 3 ],    [ 1, 2, 3 ]
]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr, finalArr = [[]]) => {
  if (!arr.length) return finalArr
  // finalArr.forEach(el => {
  //   [arr.shift()].concat(el)
  // })
  for (let i = finalArr.length - 1; i >= 0; i--) {
    finalArr.push(finalArr[i].concat([arr[0]]))
  }
  arr.shift()
  return subsets(arr, finalArr)
}

//  final array = []
// base case = []
// before we push, lets concat element with previous element, then push.


console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]
console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
