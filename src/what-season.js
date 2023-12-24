const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  if (isNaN(Date.parse(date))) throw new Error('Invalid date!');
  if (Object.getOwnPropertyNames(date).length) throw new Error('Invalid date!');

  let month = date.getMonth();

  // if (date instanceof Object) throw new Error('Invalid date!');
  if (month == 11 || (month <= 1 && month >= 0)) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  // remove line with error and write your code here
}

module.exports = {
  getSeason,
};
