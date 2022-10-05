function getColumnValue(matrix, targetColumn) {
    var column = [];

    for (var i = 0; i < matrix.length; i++) {
        column.push(matrix[i][targetColumn]);
    }

    return column;
}

export { getColumnValue };