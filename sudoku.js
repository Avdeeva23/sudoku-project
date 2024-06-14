const { log } = require("console");
const fs = require("fs");

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







function read() {
  let str = fs.readFileSync("./puzzles.txt", "utf-8");
  let newStr = str.split("\r\n");
  let arrAll = [];
  let firstArr = [];
  
  for (let i = 0; i < newStr.length; i++) {
    let secondArr=[]
    firstArr.push(newStr[i].split(""));
    for (let y = 0; y < 9; y++) {
      secondArr.push(firstArr[i].slice(0, 9));
      firstArr[i].splice(0, 9);

      
      // for (let x = 0; x < 3; x++){
        
      //   arr2.push(secondArr[y].slice(0, 3));
      //   secondArr[y].splice(0, 3);
      //   arrAll.push(arr2)
        

      // }
    
    }
    arrAll.push(secondArr)

       
  }
  console.log(arrAll)
  return arrAll;
}
read()
; 



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
