
function repeatedWord(str){
  let splitString = split(str);

  for(let i = 0; i < splitString.length; i++){
    for(let j = 0; j < splitString.length; j++){
      if(splitString[i] === splitString[j] && i !== j){
        return splitString[i];
      }
    }
  }
  return 'no repeted repeatedWord';
}

function split(str) {
  let repeatedWord = [];
  let currentWord = '';
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === ' ') {
      repeatedWord.push(currentWord);
      currentWord = '';
    } else {
      currentWord += str[i];
    }
  }



  if (currentWord.length > 0) {
    repeatedWord.push(currentWord);
  }

  return repeatedWord;
}

module.exports = repeatedWord;
