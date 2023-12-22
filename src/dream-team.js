const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let name = [];
  if (!Array.isArray(members)) return false;

  members.forEach((elem) => {
    if (typeof elem === 'string') {
      let newName = elem.trim();
      name.push(newName[0].toUpperCase());
    }
  });
  name.sort();
  return name.join('');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam,
};
