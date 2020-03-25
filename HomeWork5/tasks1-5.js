//TASK 1
/* function testThrow(exception) {
    try {
        throw exception;
    } catch (error) {
        console.log("Caught: " + error)
    }
}
testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened')); */



//TASK 2
/* function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new Error("Incorrect numbers were entered");
    }
    let area = width * height;
    return area;
}

try {
    console.log("Rectangle area: " + calcRectangleArea(6, 7));
    console.log("Rectangle area: " + calcRectangleArea(6, "sth"));
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} */



//TASK 3
/* function checkAge() {
    let age = prompt("Enter your age:", "0");
    if (age == "") {
        throw new Error("The field is empty! Please enter your age!");
    } else if (isNaN(age)) {
        throw new Error("You haven't entered a number!");
    } else if (age < 14) {
        throw new Error("You haven't an access to the film");
    } else {
        alert("Everything is fine! Enjoy the film!");
    }
}

try {
    let result = checkAge();
    console.log(result);
} catch (exception) {
    alert(exception.name);
    alert(exception.message);
} */ 
    


//TASK 4
/* class MonthException {
    constructor(message) {
        this.message = message;
    }
    name = "MonthException";
}

function showMonthName(month) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", 
                  "September", "October", "November", "December"];
    let i = month - 1;
    if (i < 0 || i > 11) {
        throw new MonthException("Incorrect month number");
    }
    return months[i];
}


try {
    console.log(showMonthName(5)); //May
    console.log(showMonthName(14)); //MonthException Incorrect month number
} catch(exception) {
    if (exception instanceof MonthException) {
        console.log(exception.name + " " + exception.message);
    }
} */



//TASK 5
/* function showUser(id) {
    if (id < 0) {
        throw new Error("ID must not be negative: " + id);
    }
    return {id: id};
}

function showUsers(ids) {
    let ids2 = [];
    for (id in ids) {
        if (ids[id] >= 0) {
            ids2.push({id: ids[id]});
        }
        try {
        showUser(ids[id]);
        } catch (error) {
            console.log(error.name + ": " + error.message);
        }
    }
    return ids2;
}

console.log(showUsers([2, 4, 6, -3]))*/