const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // prettier-ignore
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let next = '--discard-next';
  let prev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if (arr[i - 1] == next) {
      result.pop();
      continue;
    }
    if (arr[i] == prev) {
      if (arr[i - 1] && arr[i - 2] != next) {
        result.pop();
        result.pop();
      }
    }
    if (arr[i] == doubleNext) {
      result.push(arr[i + 1]);
    }
    if (arr[i] == doublePrev) {
      if (arr[i - 1] && arr[i - 2] != next) result.push(arr[i - 1]);
    }
  }

  console.log(result);

  const newres = result.filter((elem) => {
    if (
      elem !== next &&
      elem !== prev &&
      elem !== doubleNext &&
      elem !== doublePrev
    ) {
      return elem;
    }
  });

  console.log(newres);
  return newres;
  // remove line with error and write your code here
}
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform,
};
