function printReverse(arr) {
    var rev = [];
    arr.forEach(e => {
        rev.unshift(e);
    });
    return rev;
}

function isUniform(arr) {
    var testSet = new Set(arr);
    if (testSet.size === 1) {
        return true;
    }
    return false;
}

function sumArray(arr) {
    var sum = 0;
    arr.forEach(e => {
        sum += e;
    });
    return sum;
}

function max(arr) {
    var max = arr[0];
    arr.forEach(e => {
        if (e > max) {
            max = e;
        }
    });
    return max;
}