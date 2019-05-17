// sum with arguments keyword
function sum() {
    let arr = Array.from(arguments);
    let acc = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        acc += arr[i];
    }
    return acc;
}

console.log(sum(1, 2, 3, 4, 5));

// sum with rest operator
function sum(...args) {
    let acc = args.shift();
    for (let i = 0; i < args.length; i++) {
        acc += args[i];
    }
    return acc;
}

// bind with args
Function.prototype.myBind = function (context) {
    let fn = this;
    let bindArgs = Array.from(arguments).slice(1);

    return function () {
        let callArgs = Array.from(arguments);
        return fn.apply(context, bindArgs.concat(callArgs));
    }
}

// bind with ...
Function.prototype.myBind = function (context, ...bindArgs) {
    return (...callArgs) => {
        return this.apply(context, bindArgs.concat(callArgs))
    }
}

// Curried sum
function curriedSum(numArgs) {
    let numbers = [];
    function _curriedSum(num) {

        numbers.push(num);

        let sum = 0;
        if (numbers.length === numArgs) {
            numbers.forEach((el) => {
                sum += el;
            });
            return sum;

        } else {
            return _curriedSum;
        }

    }
    return _curriedSum;
}

// const sum = curriedSum(4);
// result = sum(5)(30)(20)(1);

// Function.prototype.curry

Function.prototype.curry = function (numArgs) {
    let numbers = [];
    function _curriedSum(num) {

        numbers.push(num);

        let sum = 0;
        if (numbers.length === numArgs) {
            numbers.forEach((el) => {
                sum += el;
            });
            return sum;

        } else {
            return _curriedSum;
        }

    }
    return _curriedSum;
}

// curry
Function.prototype.curry = function (numArgs) {
    const args = [];
    const fn = this;

    function _curriedFn(arg) {
        args.push(arg);

        if (args.length === numArgs) {
            return fn(...args);
        } else {
            return _curriedFn;
        }
    }

    return _curriedFn;
};

// curry with apply
Function.prototype.curry = function (numArgs) {
    const args = [];
    const fn = this;

    function _curriedFn(arg) {
        args.push(arg);

        if (args.length === numArgs) {
            return fn.apply(null, args);
        } else {
            return _curriedFn;
        }
    }

    return _curriedFn;
};