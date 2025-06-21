module.exports = function (prefix, array, sort) {
  const length = prefix.length;
  const output = array.filter(function (item) {
    return prefix === item.substring(0, length);
  });
  return sort ? output.sort() : output;
};
