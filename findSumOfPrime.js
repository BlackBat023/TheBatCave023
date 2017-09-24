function sumOfPrime(num){
    var primeArr = [];

    for(var x = 2;x <= num; x++){
        if(isPrimeNumber(x)){
            primeArr.push(x);
        }
    }

    primeArr.reduce(function(a, b){
        return a + b;
    });
}

function isPrimeNumber(num){

    for(var i = 2; i < num; i++){
        if(i % 2 == 0){
            return true;
        }
    }
    return false;
}

sumOfPrime(10);