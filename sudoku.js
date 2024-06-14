const { log } = require("console");
const fs = require("fs");

function read(str) {
  let str = fs.readFileSync("./puzzles.txt", "utf-8");
  let newStr = str.split("\r\n");
  let arrAll = [];
  let firstArr = [];
  for (let i = 0; i < newStr.length; i++) {
    firstArr.push(newStr[i].split(""));
    for (let y = 0; y < 9; y++) {
      arrAll.push(firstArr[i].slice(0, 9));
      firstArr[i].splice(0, 9);
    }
  }
  return arrAll;
}

read();

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
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
