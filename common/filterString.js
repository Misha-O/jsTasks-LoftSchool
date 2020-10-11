let string = "Hello! How are you ?";
let vowels = ["A", "E", "I", "O", "U", "Y", "a", "e", "i", "o", "u", "y"];

let getVowels = (filteredString) => {
  let removedVowels = "";

  for (let i = 0; i < filteredString.length; i++) {
    let currentLetter = filteredString[i];

    if (vowels.includes(currentLetter)) {
      removedVowels += currentLetter;
    }
  }

  return removedVowels;
};

console.log(getVowels(string));
