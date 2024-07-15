function isperfect(num){
    if(num<=1){
        return false;
    }
    let tem=0;
    for(let x=0; x<=num/2; x++){
        if(num%x===0){
            tem+=x;
        }
    }
    return tem===num;

}
console.log(isperfect(5));
console.log(isperfect(8128));
console.log(isperfect(28));
console.log(isperfect(496));