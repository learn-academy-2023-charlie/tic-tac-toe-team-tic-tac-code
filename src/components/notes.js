const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const lines2 = [0, 1, 2]
newSquares = ['X','O','X','X']
var x_arr = newSquares.filter((value, index) => (value ==='X'))
var x_arr = []
var y_arr = []
for (let i =0; i < lines.length;i++){
    console.log(lines[i]);
}