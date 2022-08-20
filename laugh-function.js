let sound = ''
function laugh(num) {
  for (let x = 0; x < num; x++) {
    sound = sound + 'ha';
  }
  sound = sound + '!';
  return sound;
}
console.log(laugh(5));