function larger(arr, num){
    return arr.filter(function(Element){
    return Element>num;
    });
}
const number=[1,5,10,6,8];
const x=5;
const result=(larger(number,x));
console.log(result);