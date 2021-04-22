// function anagram(text1, text2) {
//   return text1.toLocaleLowerCase().split("").sort().join("") == text2.toLocaleLowerCase().split("").sort().join("");
// }

// console.log(anagram("Mary", "Army"));



const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

let map = new Map();

for (let value of arr) {
  let key = value.toLocaleLowerCase().split("").sort().join("");
  map.set(key, value);
}

console.log(map);
console.log(map.keys());
console.log(map.values());
