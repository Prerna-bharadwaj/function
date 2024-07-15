function longestPalindrome(s) {
    let maxLength = 0;
    let longestPalindrome = "";

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        
        let palindrome1 = expandAroundCenter(i, i);
        let palindrome2 = expandAroundCenter(i, i + 1); 

        // Choose the longer palindrome
        let longerPalindrome = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

        if (longerPalindrome.length > maxLength) {
            maxLength = longerPalindrome.length;
            longestPalindrome = longerPalindrome;
        }
    }

    return longestPalindrome;
}

let inputString = "bananas";
console.log("Longest palindromic substring:", longestPalindrome(inputString)); 

inputString = "abracadabra";
console.log("Longest palindromic substring:", longestPalindrome(inputString)); 
