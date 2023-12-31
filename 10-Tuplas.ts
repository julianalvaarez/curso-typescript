

//! Tuplas: Son arrays con un limite fijado de longitud

type CellValue = 'X' | 'O' | ''

type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
]

const game:GameBoard = [
    ['O', 'X', 'O'],
    ['', 'O', ''],
    ['', 'X', 'X']
]