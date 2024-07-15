function findsecondlargestandgreatest(arr){
    arr.sort(function (a,b){
        return a-b;
    }
)
const secondlowest=arr[1];
const secondgreatest=arr[arr.length-2];
return[secondlowest,secondgreatest];
}
const array=[1,2,3,4,5];
const result=findsecondlargestandgreatest(array);
console.log(result);