function uniquecharacter(str){
    const uniquechar=new Set();
    for(const char of str){
        uniquechar.add(char); // Add character to the Set (duplicates are ignored)
    }

    // Convert the Set back to a string
    return Array.from(uniquechar).join('');
}
const inputString = "thequickbrownfoxjumpsoverthelazydog";
const result = uniquecharacter(inputString);
console.log(result); 

