function steamrollArray(arr){
    return arr.reduce(function(acc, next){
        if(Array.isArray(next)){
            return steamrollArray(acc.concat(next));
        } else {
            acc.concat(next);
        }
    }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);