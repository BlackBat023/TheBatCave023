var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var first = firstAndLast.split(' ')[0];
    var last = firstAndLast.split(' ')[1];

    this.getFirstName = function(){
        return first;
    };

    this.getLastName = function(){
        return last;
    };

    this.getFullName = function(){
        return first + ' ' + last;
    };

    this.setFirstName = function(str){
        first = str;
    };

    this.setLastName = function(str){
        last = str;
    };

    this.setFullName = function(str){
        first = str.split(' ')[0];
        last = str.split(' ')[1];
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();