function anagram(text1, text2) {
  return text1.toLocaleLowerCase().split("").sort().join("") == text2.toLocaleLowerCase().split("").sort().join("");
}

console.log(anagram("Mary", "Army"));
