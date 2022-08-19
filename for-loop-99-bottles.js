
for (let bottles = 99; bottles > 0; bottles--){
  if (bottles === 1) {
    console.log(bottles + ' bottle of juice on the wall! ' + bottles + ' bottle of juice! Take one down, pass it around... ' + (bottles - 1) + ' bottles of juice on the wall.')
  }
  else if (bottles === 2) {
    console.log((bottles + ' bottles of juice on the wall! ' + bottles + ' bottles of juice! Take one down, pass it around... ' + (bottles - 1) + ' bottle of juice on the wall.'))
  }
  else if (bottles > 1) {
    console.log(bottles + ' bottles of juice on the wall! ' + bottles + ' bottles of juice! Take one down, pass it around... ' + (bottles - 1) + ' bottles of juice on the wall.')
  }
}