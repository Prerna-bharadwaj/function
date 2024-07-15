function amountToCoins(amount, coins) {
    
    coins.sort((a, b) => b - a);
    
    const result = [];

    // Iter
    for (let coin of coins) {
        while (amount >= coin) {
            amount -= coin;  
            result.push(coin);  
        }
    }

    return result;
}


const coinsUsed = amountToCoins(46, [25, 10, 5, 2, 1]);
console.log(coinsUsed); 