function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
 return [[[1, 2, 5, '.'], ['.', 2, 5, 8], [1, '.', 5, 5], [1, 2, 5, '.']]]
}



let input = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"]
];


let solveSudoku = function(board) {
	const size = 9;
	const boxSize = 3;

	const findEmpty = (board) => {
		 for (let r = 0; r < size; r++) {
			  for (let c = 0; c < size; c++) {
					if(board[r][c] === '.') {
						 return [r,c];
					}
			  }
		 }
		 return null;
	}

	const validate = (num, pos, board) => {
		 const [r,c] = pos;

		 //Check rows
		 for (let i = 0; i < size; i++) {
			  if (board[i][c] === num && i !== r) {
					return false;
			  }
		 }

		 //Check cols
		 for (let i = 0; i < size; i++) {
			  if (board[r][i] === num && i !== c) {
					return false;
			  }
		 }


		 //Check box
		 const boxRow = Math.floor( r/boxSize ) * boxSize;
		 const boxCol = Math.floor( c/boxSize ) * boxSize;

		 for (let i = boxRow; i < boxRow + boxSize; i++) {
			  for (let j = boxCol; j < boxCol + boxSize; j++) {
					if (board[i][j] === num && i !== r && j !== c) {
						 return false;
					}
			  }
		 }

		 return true;
	}

	const solve = () => {
		 const currPos = findEmpty(board);

		 if (currPos === null) {
			  return true;
		 }
		 //console.log('------------------------------');
		 for (let i = 1; i < size + 1; i++) {
			  const currNum = i.toString();
			  const isValid = validate(currNum, currPos, board);
			  //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
			  if (isValid) {
					const [x,y] = currPos;
					board[x][y] = currNum;

					if(solve()) {
						 return true;
					}

					board[x][y] = '.';
			  }
		 }

		 return false;
	}

	solve();
	return board;
};

console.table(input);
console.table(solveSudoku(input));








function solve() {
	let board = read[0]
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  const size = 4;
  const boxSize = 2;

  const findEmpty=(board)=>{
	  for (let row = 0; row < size; row++){
		  for (let col = 0; col < size; col++){
			  if(board[row][col] === '.'){
				  return [row, col]
				}
			} 
		}
		return null
	}

	const validate = (num, pos, board) =>{
		const [row, col] = pos;
		//Проверка строк
		for (let i = 0; i < size; i++){
			if (board[i][c] === num && i !== r){
				return false;
			}

		//Проверка колонок
		for (let i = 0; i < size; i++){
			if (board[row][i] === num && i !== col){
				return false;
			}
		}

		//Проверка квадратов
	const boxRow =Math.floor(row / boxSize) * boxSize;
	const boxCol =Math.floor(col / boxSize) * boxSize;

	for (let i = boxRow; i < boxRow + boxSize; i++){
		for (let j = boxCol; j < boxCol + boxSize; j++){
			if (board[i][j] === num && i !== r && j !== c){
				return false;
			}
		}
	}
	return true	
	}

	const solver=() => {
		const currPos = findEmpty(board)

		if (currPos === null){
		return true
		}

		for (let i = 1; i < size + 1; i++){
			const currentNum = i.toString();
			const isValid = validate(currentNum, currPos, board)

			if (isValid){
				const [x, y] = currPos;
				board[x][y] = currNum;

				if(solver())
				return true;
			}
			board[x][y];
		}

		return false;
	}
}

console.table(solve())

}
function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
