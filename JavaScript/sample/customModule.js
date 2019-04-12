export function sum(int1, int2) {
    if (isNumber(int1) && isNumber(int2))
        return int1 + int2;
    else
        return -1;
}

function cube(num) {
    return num*num*num;
}

function square(num) {
    return num*num;
}

export {cube, square};

function isNumber(value) {
    return (typeof value === 'number');
}