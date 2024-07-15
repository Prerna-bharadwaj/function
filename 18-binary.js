function binarySearch(arr, target) {
    let left = 0;                      // Start index
    let right = arr.length - 1;       // End index

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Middle index

        // Check if the target is present at mid
        if (arr[mid] === target) {
            return mid; // Target found, return the index
        }
        
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        
        else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;
const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`); 
} else {
    console.log('Element not found');
}
