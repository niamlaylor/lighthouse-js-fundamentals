function makeLine(length) {
  let line = '';
  for (let j = 1; j <= length; j++) {
    line += '* '
  }
  return line + '\n';
}

function buildTriangle(length) {
  let triangle = '';
  let lineNumber = 1;
  for (let lineNumber = 1; lineNumber <= length; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
console.log(buildTriangle(10));