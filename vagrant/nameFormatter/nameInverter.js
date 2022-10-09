const nameInverter = function(name) {
  if (name === '' || name === 'Dr.' || name === 'Mr.' || name === 'Ms.' || name === 'Mrs.') { // initial check if the pass value is an empty string or just Dr.
    return '';
  };
  if (name === undefined) {
    return 'Error!';
  }

  const checkHowManyWords = name.trim().split(''); // This removes excess spaces at beginning and end and splits the words into an array
  let moreThanOneWord = false;
  let honorific = false;

  const checkIfHonorific = name.trim().split(' '); // make a constant here that trims/splits by word, not letter
  for (word of checkIfHonorific) {
    if (word === 'Dr.' || word === 'Mr.' || word === 'Ms.' || word === 'Mrs.') {
      honorific = true;
    }
  };

  for (word of checkHowManyWords) { // this checks to see if there are any spaces. If there are, then our name is more than one word
    if (word === ' ') {
      moreThanOneWord = true;
    }
  };

  if (!moreThanOneWord && !honorific) {
    return name.trim();
  }

  if (moreThanOneWord && !honorific) {
    const arrayOfNames = name.trim().split(' '); // This gives us an array of names with the spaces on either end removed
    const filteredToRemoveSpaces = arrayOfNames.filter((name) => { // This filters our array to only show values that aren't spaces
      return !(name === '');
    });
    return `${filteredToRemoveSpaces[filteredToRemoveSpaces.length - 1]}, ${filteredToRemoveSpaces.slice(0, filteredToRemoveSpaces.length - 1)}`; // This returns the last name followed by first name
  };
  if (moreThanOneWord && honorific) {
    const arrayOfNames = name.trim().split(' '); // This gives us an array of names with the spaces on either end removed
    const filteredToRemoveSpaces = arrayOfNames.filter((name) => { // This filters our array to only show values that aren't spaces
      return !(name === '');
    });
    return `${filteredToRemoveSpaces[0]} ${filteredToRemoveSpaces[filteredToRemoveSpaces.length - 1]}, ${filteredToRemoveSpaces[1]}`; // This returns the last name followed by first name
  };
};

module.exports = nameInverter;