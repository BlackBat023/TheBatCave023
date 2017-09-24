function telephoneCheck(num){
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
    regex.test(num);
}

telephoneCheck("555-555-5555");

///^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d\-[\s\-]? \d{4}$/gm  //^$ tests the validity of whatever's between the //
//(1\s?)? means that 1 with or without a space is valid
//(\(d{3}\)) means that ( & ) is validated as well as d = digits and {3} = 3 digit count | = or
//\s validates spaces and \- validates a -
//? indicates optionals
//() assigns a capture group