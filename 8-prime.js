function isPrime(num){
    if (num<=1){
        return false;
    }
    for(let x=2; x<num; x++){
        if(num%x===0){
            return false;
        }
        else{
            return true;
        }
    }
}

console.log(isPrime(32));
console.log(isPrime(17));