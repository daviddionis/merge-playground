

function addTwoValues(a, b) {
    return a + b;
}

function addArrays(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        result.push(addTwoValues(arr1[i], arr2[i]));
    }
    return result;
}

function multiplyArrays(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        result.push(arr1[i] * arr2[i]);
    }
    return result;
}


function divideArrays(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        result.push(arr1[i] / arr2[i]);
    }
    return result;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(addArrays(arr1, arr2));

console.log(multiplyArrays(arr1, arr2));

console.log(divideArrays(arr1, arr2));