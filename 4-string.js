function albhabetorder(str){
    return str.split('').sort().join('');
}
let inputString="webmaster";
const sortedstring =albhabetorder(inputString);
console.log(sortedstring);