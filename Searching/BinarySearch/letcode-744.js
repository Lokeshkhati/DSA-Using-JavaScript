// Smallest charecter larger then target

const letters = ["a", "d", "f", "j"];
let target = "c";

function smallestCharLargerThenTarget(letters, target) {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2);
    if (target > letters[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
    return (letters[start%letters.length])
  // if (start === letters.length) {
  //     return letters[0]
  // }
  // else{
  //     return letters[start]
  // }
}

let ans = smallestCharLargerThenTarget(letters, target);
console.log(ans);
