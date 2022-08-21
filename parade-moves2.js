const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']  

let finalPosition = function(entry) {
  let xyCoordinates = [0, 0]
  for (let i = 0; i < entry.length; i++) {
    if (entry[i] === 'north') {
      xyCoordinates[1] += 1;
    }
    else if (entry[i] === 'south') {
      xyCoordinates[1] -= 1;
    }
    else if (entry[i] === 'east') {
      xyCoordinates[0] += 1;
    }
    else if (entry[i] === 'west') {
      xyCoordinates[0] -= 1;
    }
  } return xyCoordinates
}
console.log(finalPosition(moves));