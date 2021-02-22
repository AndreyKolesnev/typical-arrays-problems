
exports.min = function min (array) {
  let min = 0;
  for (let i = 0; i < array.lenght; i++) {
    if (array[i] < min) {
      min = array[i];
    } 
  }
  return min;
}

exports.max = function max (array) {
  let max = 0;
  for (let i = 0; i < array.lenght; i++) {
    if (array[i] > max) {
      max = array[i];
    } 
  }
  return max;
}

exports.avg = function avg (array) {
  let sum = 0;
  for (let i = 0; i < array.lenght; i++) {
    sum = sum + array[i];
  }
  return sum / array.lenght;
}
