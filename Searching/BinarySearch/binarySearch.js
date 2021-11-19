const arr = [4,7,11,17,21,49,52];
let target = 5;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else if(target === arr[mid]) {
      return mid;
    } 
  
  }
  return  -1;
}
let ans = binarySearch(arr, target);

console.log(ans);
