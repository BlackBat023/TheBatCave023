function diffArray(arr1, arr2){
    var newArr = arr1.concut(arr2);

    return newArr.filter(function(value, index, array){
        if(array.slice(index+1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) === -1){
            return value;
        }
    });
}

function removeDups(arr){
    var result = [];

    arr.forEach(function(value){
        if(result.indexOf(value) < 0){
            result.push(value);
        }
    });
    return result;
}
function sym(args) {

    args = Array.prototype.slice.call(arguments);
    
    return args.reduce(function(acc, next){
        acc = removeDups(acc);
        next = removeDups(next);
        acc = diffArray(acc, next);
        return acc;
    });
}

sym([1, 2, 3], [5, 2, 1, 4]);