Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

Array.prototype.myMap = function (callback) {
    results = []
    for (let i = 0; i < this.length; i++) {
        results.push(callback(this[i]))
    }
    return results
}

Array.prototype.myReduce = function (callback, val = undefined) {
    let offset = 0;
    let acc = 0;

    if (!val) {
        offset = 1
        acc = this[0]
    } else {
        acc = val
    }
    for (let i = offset; i < this.length; i++) {
        acc = callback(acc, this[i])
    }
    return acc
}

