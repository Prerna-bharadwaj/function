function computeFactors(num) {
 
    if (num <= 0 || !Number.isInteger(num)) {
        return "Please enter a positive integer.";
    }

    const factors = [];

    // Loop to find factors
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}


console.log(computeFactors(12)); 
console.log(computeFactors(15)); 
console.log(computeFactors(1));  
console.log(computeFactors(0));  
