//TASK 1
/*function upperCase(str) {
    let regExp = /^[A-Z]/;
    regExp.test(str)? console.log("String's starts with uppercase character")
                    : console.log("String's not starts with uppercase character");
}
upperCase('regexp');
upperCase('RegExp');*/


//TASK 2
/*function checkEmail(str) {
    let regExp = /\w+@\w+\.\w+/;
    return regExp.test(str)
}
checkEmail("Qmail2@gmail.com");*/


//TASK 3
/*let str = "cdbBdbsb";
str.match(/d{1}(b+)(d{1})/i);*/ //["dbBd", "bB", "d"]


//TASK 4
/* let str = "Java Script"; 
str.replace(/(\w+)\s+(\w+)/, "$2, $1");  //"Script, Java" */


//TASK 5
/*function checkBankCard(str) {
        let regExp = /^(\d{4}-){3}\d{4}$/;
        return regExp.test(str);
    };

checkBankCard("9999-9999-9999-9999");*/


//TASK 6
/*function checkEmail(str) {
    let regExp = /^[a-z0-9]+(\w+)?(-{1})?(\w+)?@[a-z]+\.[a-z]+$/i;
    return regExp.test(str) ? console.log("Email is correct!")
                            : console.log("Email is not correct!");
}
checkEmail('my_mail@gmail.com'); //Email is correct!
checkEmail('#my_mail@gmail.com'); //Email is not correct!*/

//TASK 7
/*function checkLogin(str) {

    if ((str.length >= 2) && (str.length <= 10)) {
        let regExp = /^[a-z]((\d+(\.\d+)?)?([a-z]+)?){1,9}$/i;
        console.log(regExp.test(str));
    } else {
        console.log("false");
    };
    console.log(str.match(/(\d+\.\d+)|(\d+)/g));
};

checkLogin('ee1.1ret3'); //true  1.1, 3
checkLogin('ee1*1ret3'); //false  1, 1, 3 */



