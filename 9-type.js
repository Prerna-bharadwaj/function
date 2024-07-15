function gettype(value){
    return typeof value;
}
console.log(gettype("hello")); //string
console.log(gettype(1));  //number
console.log(gettype(true)); //boolean
console.log(gettype(undefined));  //undefined
console.log(gettype(function() {}));  //function
