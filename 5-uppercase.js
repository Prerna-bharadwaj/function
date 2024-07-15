function uppercase(str) {
    
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


const inputString = 'the quick brown fox';
const result = uppercase(inputString);
console.log(result); 