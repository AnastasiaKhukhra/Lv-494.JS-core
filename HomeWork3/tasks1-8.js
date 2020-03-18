//TASK1_1 
/*let arr = [2, 3, 4, 5];
let res = 1;
for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
}
console.log(res);*/


//TASK1_2
/*let arr = [2, 3, 4, 5];
let i = 0;
let res = 1;
while (i < arr.length) {
    res *= arr[i];
    i++;
};
console.log(res);*/


//TASK2
/*for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
};*/


//TASK3
/*function randArray(k) {
    let x = [];
    for (let i = 0; i < k; i++) {
        x[i] = Math.floor(Math.random() * 500) + 1;
    }
    console.log(x);
};

randArray(10); */

//TASK 4
/*function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        res = a ** b
        return res;
    };
};
raiseToDegree(3, 4); */

//TASK 5
/*function findMin1() {
    return Math.min.apply(null, arguments);
};

findMin1(12, 14, 4, -4, 0.2); */

/* function findMin2() {
    let min = Infinity;
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
};

findMin2(12, 14, 4, -4, 0.2); */

//TASK 6
/*function findUnique(arr) {
    arr.sort();
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            return false;
        }
    }
    return true;
};

findUnique([1, 2, 3, 5, 3]);*/

//TASK 7
/* function lastElem(arr, k) { 
    if (k === undefined) {
        k = 1;
     };
        while (k !== 0) {
            arr = arr.splice(-k);
            k--;
            return arr;
        }
}
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5] */


//TASK 8
/* function upperCase(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        const shouldBeBig = (i === 0 || str[i - 1] === ' ');
        res += shouldBeBig ? str[i].toUpperCase() : str [i];
    };
    return res;
};

upperCase('i love java script'); */