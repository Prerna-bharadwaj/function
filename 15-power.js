function power(b,n){
    let res=1;
    for (let x=1; x<=n; x++){
        res=b*res;
    }
    return res;
}
console.log(power(2,3));