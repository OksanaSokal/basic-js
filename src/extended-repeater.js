const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') str = String(str);
  if (
    options.hasOwnProperty('addition') &&
    typeof options.addition !== 'string'
  )
    options.addition = String(options.addition);

  if (options.separator == undefined) options.separator = '+';
  if (options.additionSeparator == undefined) options.additionSeparator = '|';
  if (options.repeatTimes == undefined) return str + options.addition;

  let result = [];
  let additions = [];
  let strAdd = '';

  if (options.hasOwnProperty('additionRepeatTimes')) {
    for (let k = 1; k <= options.additionRepeatTimes; k++) {
      additions.push(options.addition);
      strAdd = additions.join(options.additionSeparator);
    }
  } else {
    if (
      options.hasOwnProperty('repeatTimes') &&
      options.hasOwnProperty('addition')
    ) {
      strAdd = options.addition;
    }
  }

  for (let i = 1; i <= options.repeatTimes; i++) {
    let a = str + strAdd;
    result.push(a);
  }

  return result.join(options.separator);

  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
