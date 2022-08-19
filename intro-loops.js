for (let x = 1; x <= 20; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log('JuliaJames');
  }
  else if (x % 5 === 0) {
    console.log('James');
  }
  else if (x % 3 === 0){
    console.log('Julia');
  }
  else if (x % 3 !== 0 || x % 5 !== 0) {
    console.log(x)
  }
}