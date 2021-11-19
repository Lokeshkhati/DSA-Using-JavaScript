// If we do not know in which order the array is sorted(ascending/descending)

const arr = [54, 45, 34,  21, 12,5,1];
let target = 5;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  //find whether the array is sorted in ascending0r descending order
  let isAsc = arr[start] < arr[end];
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (isAsc) {
      if (target < arr[mid]) {
        end = mid - 1;
      }
       else {
        start = mid + 1;
      }
    }
    else{
        if (target > arr[mid]) {
            end = mid - 1;
          } else {
            start = mid + 1;
          } 
    }
  }
  return -1;
}
let ans = binarySearch(arr, target);

console.log(ans);
