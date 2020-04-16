module.exports.date = new Date();
module.exports.greeting = function(name) {
    switch (new Date().getHours()) {
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
                return "Good morning " + name;
                break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
                return "Good afternoon " + name;
                break;
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
                return "Good evening " + name;
                break;
        default:
                return "Good night " + name;
    };
}