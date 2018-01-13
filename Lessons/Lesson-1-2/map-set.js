// Map - really associative array
// with any keys

const key1 = {};
const key2 = {};
const map = new Map([
  [key1, 'one'],
  [key2, 'two'],
  [{}, 'three'],
  [{}, 'four'],
  [{}, 'five']
 ]);

//use get method with maps
console.log(map.get(key1));
console.log(map.get(key2));

// show all values
//1
map.forEach((item) => console.log(item));
//2 -
for (let keyValue of map.values()) {
  console.log(keyValue);
}
//3 +++
for (let [key, value] of map) {
  console.log(value);
}


// Set

const set = new Set(['one', 'two', 'three', 'four']);

console.log(set.add('five'));
console.log(set.add('one'));
