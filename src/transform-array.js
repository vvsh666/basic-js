const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (Array.isArray(arr)) {
        const resArr = [];
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case "--discard-next":
                    if (arr[i + 1]) {
                        i++;
                    }
                    break;
                case "--discard-prev":
                    if (arr[i - 1]) {
                        resArr.pop();
                    }
                    break;
                case "--double-next":
                    if (arr[i + 1]) {
                        i++;
                        resArr.push(arr[i]);
                        resArr.push(arr[i]);
                    }
                    break;
                case "--double-prev":
                    if (arr[i - 1]) {
                        resArr.push(arr[i - 1]);
                    }
                    break;
                default:
                    resArr.push(arr[i]);
                    break;
            }
        }
        return resArr;
    } else {
        return console.error("parameter must be an instance of the Array!");
    }
}

module.exports = {
    transform,
};
