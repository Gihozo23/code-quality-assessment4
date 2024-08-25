const reverseVowels = (string) => {
  const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  const array = string.split("");
  let leftSide = 0;
  let rightSide = array.length - 1;
  console.log(rightSide, leftSide);
  while (leftSide < rightSide) {
    if (vowels.indexOf(array[leftSide]) === -1) {
      leftSide++;
      continue;
    }
    if (vowels.indexOf(array[rightSide]) === -1) {
      rightSide--;
      continue;
    }
    [array[leftSide], array[rightSide]] = [array[rightSide], array[leftSide]];
    rightSide--;
    leftSide++;
  }

  return array.join("");
};
