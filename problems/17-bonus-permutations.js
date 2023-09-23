/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/
function factorial(num) {

  if(num === 1) return num;


  return (num * factorial(num - 1));

  // return num === 1 ? num : num * factorial(num-1);
}

const permutations = (array, permArr = []) => {
  // if(permArr.length === factorial(array.length)){
  //   return permArr;
  // }

  // let temp = [];
  // temp.push(array[0]);
  // for(let i = 1; i < array.length; i++){
  //   temp.push(array[i]);
  // }
  // permArr.push(temp);

  // temp = [];
  // temp.push(array[0]);
  // for(let i = array.length-1; i > 0; i--){
  //   if(array.length === 2){
  //     temp.unshift(array[i]);
  //   } else {
  //     temp.push(array[i]);
  //   }
  // }
  // permArr.push(temp);
  // array.push(array.shift());

  // return permutations(array, permArr);



  if(permArr.length === factorial(array.length)){
    return permArr;
  }

  let copy = array.slice();
  for(let i = 0; i < array.length; i++){
    for (let j = i+1; j < array.length; j++){
      let firstEl = copy.slice(i, j);
      copy.push(firstEl)
      i++;
    }
  }


  return permutations(array, permArr);
};


console.log(permutations([1, 2])) // [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]

// console.log(permutations([1, 2, 3, 4])) // [[1, 2, 3], [1, 3, 2],


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
