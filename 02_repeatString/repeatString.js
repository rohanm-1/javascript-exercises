const repeatString = function(word, repNum) {
    if(repNum < 0)
        return 'ERROR';
    let res = "";
    for(let i = 0; i < repNum; i++){
        res += word;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
