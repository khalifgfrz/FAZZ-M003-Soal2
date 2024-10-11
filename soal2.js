function lengthOfLastWord(s) {
  const words = s.trim().split(" ");

  const lastWord = words[words.length - 1];

  return lastWord.length;
}

const input = "Hello World";
const output = lengthOfLastWord(input);
console.log(output);
