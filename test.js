const checkNumbers = (matrix, n) => {
    let i = 1
    const list = Array.from(Array(n).keys())
    console.log(list)

    for (let i = 0; i < n; i++) {
        return matrix[i]
    }
}

function result(matrixList) {
    const n = matrixList.length;

    for (let i = 0; i < n; i++) {
        console.log(matrixList[i]);
        console.log(checkNumbers(matrixList[i], n))
    }



}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(result(matrix));

console.log("hello")