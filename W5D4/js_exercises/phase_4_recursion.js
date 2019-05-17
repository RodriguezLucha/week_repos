let range = function (start, end) {
    if (start === end) {
        return [start]
    } else if (start > end) {
        return null
    }

    let remainder = range(start + 1, end)
    return [start].concat(remainder)
}

let sumRec = function (arr) {
    if (arr.length === 1) {
        return arr[0]
    } else if (arr.length === 0) {
        return 0
    }

    let sum_result_array = sumRec(arr.slice(1))
    return arr[0] + sum_result_array

}

let exponent1 = function (base, exp) {
    if (exp === 0) {
        return 1
    }
    return base * exponent1(base, exp - 1)
}

let exponent2 = function (base, exp) {
    if (exp === 0) {
        return 1;
    }
    else if (exp === 1) {
        return base;
    }

    if (exp % 2 === 0) {
        return (exponent2(base, exp / 2) ** 2)
    } else {
        return base * (exponent2(base, (exp - 1) / 2) ** 2)
    }
}

function fibonacci(n) {
    if (n === 1) {
        return [1]
    } else if (n === 2) {
        return [1, 1]
    }
    let result1 = fibonacci(n - 1)
    let next_fib = result1[result1.length - 1] + result1[result1.length - 2]
    return result1.concat(next_fib)
}

function deepDup(arr) {
    if (true) {
        return JSON.parse(JSON.stringify(arr))
    } else {
        deepDup(arr)
    }
}