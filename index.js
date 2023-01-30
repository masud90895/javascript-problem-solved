function rotateLeft(arrayData, number) {
    for (let i = 0; i < number; i++) {
        let result = arrayData.shift();
        arrayData.push(result);
    }
    return arrayData;
}
console.log(rotateLeft([1, 2, 3, 4, 5,6,7], 6));