
/**
 * Filter an array of strings prefixed by a given string.
 *
 * This method also allow to sort output (optional)
 *
 * @param {String} prefix
 * @param {Array} array
 * @param {Boolean?} sort
 * @return {Array}
 * @api public
 */

module.exports = function (prefix, array, sort) {
  const length = prefix.length
  const output = array.filter(function(item) {
    return prefix === item.substring(0, length)
  })
  return sort ? output.sort() : output
}
