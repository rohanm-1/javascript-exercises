const reverseString = function(word) {
    let res = "";
    for(let i = word.length-1; i > -1; i--){
        res += word[i];
    }
    return res;
};
// my solution is still O(n) space but posted solution uses string methods so it's 1 line of code
// Do not edit below this line
module.exports = reverseString;
