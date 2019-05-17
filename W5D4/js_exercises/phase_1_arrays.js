Array.prototype.uniq = function () {
    myMap = {}
    newArray = []
    this.forEach(function (el) {
        if (!myMap[el]) {
            myMap[el] = 1
        } else {
            myMap[el] += 1
        }
    })

    for (let key in myMap) {
        if (myMap[key] === 1) {
            newArray.push(parseInt(key))
        }
    }
    return newArray
}

Array.prototype.twoSum = function () {
    result = []

    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                result.push([i, j])
            }
        }
    }
    return result
}

Array.prototype.transpose = function () {
    const result = JSON.parse(JSON.stringify(this))
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            result[j][i] = this[i][j]
        }
    }
    return result
}
