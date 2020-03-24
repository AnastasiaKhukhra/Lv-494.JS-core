//TASK 1
/*function propsCount(currentObject) {
    let count = 0;
    for (let i in currentObject) {
        count = count + 1;
    }
    console.log(count);
};

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development"
};

propsCount(mentor); */


//TASK 2
/* let product = {
    name: "Eucerin",
    subname: "DermatoCLEAN",
    country: "Italy",
    cost: 400,
    age: 18
};

function showProps(obj) {
    let arrProperty = [];
    let arrValue = [];
    for (let property in obj) {
        arrProperty.push(property);
        arrValue.push(obj[property]);
    }
    console.log(arrProperty, arrValue);
};

showProps(product); */



//TASK 3
/*class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    #experience = 1.2;

    get showExp() {
        return this.#experience; 
    };

    set setExp(value) {
        this.#experience = value;
    };

    calculateSalary() {
        return this.dayRate * this.workingDays;
    };

    calculateSalaryWithExperience() {
        return this.calculateSalary() * this.#experience;
    };

    showSalary() {
        console.log(this.fullName + " salary: " + this.calculateSalary());
    };

    showSalaryWithExperience() {
        console.log(this.fullName + " salary: " + this.calculateSalaryWithExperience());
    };
};

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 1.5;
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 1.5;
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3];
workers.sort(function (a, b) {
    return a.calculateSalaryWithExperience() - b.calculateSalaryWithExperience()
});

workers.forEach(worker => 
    console.log(worker.fullName + ": " + worker.calculateSalaryWithExperience()));*/



//TASK 4
/*class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return this.surname + " " + this.name;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        this.midleName = midleName;
        return super.showFullName() + " " + this.midleName;
    }
    showCourse() {
        let course = new Date().getFullYear() - this.year;
        if (course > 6 || course === 0) {
            return "You are not studing";
        }
        return course;
    }   
}

var stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5*/



//TASK 5
/* class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(side, height) {
        super();
        this.side = side;
        this.height = height;
    }
    getArea() {
        return this.side * this.height * (1 / 2);
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super()
        this.side = side;
    }
    getArea() {
        return this.side ** 2;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super()
        this.radius = radius;
    }
    getArea() {
        return this.radius ** 2 * Math.PI;
    }
        
}

function handleFigures(figures) {
    let areasArray = [];

    for (figure in figures) {
        if (figures[figure] instanceof GeometricFigure) {
            areasArray.push(figures[figure].getArea());
            console.log("Geometric figure: " + figures[figure] + " - area: " + figures[figure].getArea());
        };
    }

    console.log(areasArray.reduce(function (total, amount) {
            return total + amount;
        }));
}


const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures)); */

/*Geometric figure: Triangle - area: 10
Geometric figure: Square - area: 49
Geometric figure: Circle - area: 78.53981633974483
137.53981633974485 // total area*/