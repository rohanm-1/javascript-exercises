// ...args is a rest operator that allows the function to accept an indefinite number of parameters
const removeFromArray = function(array, ...args) {
    const newArr = [];
    array.forEach((item) =>{
        if(!args.includes(item))
            newArr.push(item)
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
