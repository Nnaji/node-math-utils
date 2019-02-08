const utils = require('./src/scripts/js/nmutils');
let numArray = [1, 2, 3, 4, 5];

console.log(utils.addn(...numArray));
console.log(utils.addn(1, 2, 3, 4));
console.log(utils.add([1, 2, 3]));


// let [one, two, three] = [1, 2, 3];

// console.log(one, two, three);