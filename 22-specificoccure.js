function countoccurrence(str, letter){
    let count=0;
    for(let x=0; x<str.length; x++){
        if(str[x]===letter){
            count++;
        }
        return count;
    }
}
const sampleString = 'w3resource.com';
const letterToCount = 'o';
const occurrence = countoccurrence(sampleString, letterToCount);

console.log(occurrence);