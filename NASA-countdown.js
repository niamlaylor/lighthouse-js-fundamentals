t = 60

while (t >= 0) {
  if (t === 50) {
    console.log('T-' + t + ' seconds');
    console.log('Orbiter transfers from ground to internal power');
  }
  else if (t === 31) {
    console.log('T-' + t + ' seconds');
    console.log('Ground launch sequencer is go for auto sequence start');
  }
  else if (t === 16) {
    console.log('T-' + t + ' seconds');
    console.log('Activate launch pad sound suppression system');
  }
  else if (t === 10) {
    console.log('T-' + t + ' seconds');
    console.log('Activate main engine hydrogen burnoff system');
  }
  else if (t === 6) {
    console.log('T-' + t + ' seconds');
    console.log('Main engine start');
  }
  else if (t === 0) {
    console.log('Solid rocket booster ignition and liftoff!');
  }
  else {
    console.log('T-' + t + ' seconds');
  }
  t--
}