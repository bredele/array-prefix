

module.exports = function (prefix, array, sort) {
  const output = array.filter(function(item) {
    return  item.indexOf(prefix) > -1
  })
  return sort ? output.sort() : output
}
