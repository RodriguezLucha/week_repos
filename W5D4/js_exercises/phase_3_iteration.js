Array.prototype.myBubbleSort = function () {
    let res = this.slice()
    let index = 0
    while (index < res.length - 1) {
        if (res[index] > res[index + 1]) {
            let temp = res[index]
            res[index] = res[index + 1]
            res[index + 1] = temp
            index = 0
        }
        else {
            index++
        }
    }
    return res
}

String.prototype.substrings = function () {
    let res = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            res.push(this.substring(i, j))
        }
    }
    return res
}