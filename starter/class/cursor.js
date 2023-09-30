const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
    Screen.render();
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.render();
    Screen.printCommands();
  }

  up = () => {
  this.resetBackgroundColor();
  if (this.row !== 0) {
    this.row -= 1
  }
  this.setBackgroundColor();
    // Move cursor up
  }

  down = () => {
    this.resetBackgroundColor();
    if (this.row !== 2) {
      this.row += 1
    }
    this.setBackgroundColor();
    // Move cursor down
  }

  left = () => {
    this.resetBackgroundColor();
    if(this.col !== 2) {
      this.col += 1
    }
    this.setBackgroundColor();
    // Move cursor left
  }

  right = () => {
    this.resetBackgroundColor();
    if(this.col !== 2) {
      this.col += 1
    }
    this.setBackgroundColor();
    // Move cursor right
  }

}


module.exports = Cursor;
