function getSubsets(arr, subsetLength) {
    const result = [];

    function generateSubsets(start, currentSubset) {
        if (currentSubset.length === subsetLength) {
            result.push([...currentSubset]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            generateSubsets(i + 1, currentSubset);
            currentSubset.pop();
        }
    }

    generateSubsets(0, []);
    return result;
}


const sampleArray = [1, 2, 3];
const length = 2;
const subsets = getSubsets(sampleArray, length);

console.log(subsets); 