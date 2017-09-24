function dropElements(arr, func){
    //Use a while loop to itterate through the array until contition set to false
    while(!func(arr[0])){
        arr.shift();
    }
}

dropElements([1, 2, 3], function(n) {return n < 3; });