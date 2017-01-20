function iterativeLog(a) {
  a.forEach(b => {console.log(`${a.indexOf(b)}: ${b}`)})
}

function iterate(callback) {
  var array = [1,2,3];
  array.forEach(callback);
  return array;
  }

function doToArray(array, callback) {
  array.forEach(callback);
  return array;
} 