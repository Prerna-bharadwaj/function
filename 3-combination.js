function generateCombinations(str) {
    const combinations = [];

    // Generate combinations
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            combinations.push(str.slice(i, j));
        }
    }

    return combinations;
}


const inputString = 'dog';
const result = generateCombinations(inputString);
console.log(result); 
