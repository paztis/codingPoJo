/**
 * Created by thales on 09/06/2016.
 */
'use strict'

var CONSTANTS = require("./../global.js")

class Grid {

    constructor() {
        this.nbRows = 6;
        this.nbColumns = 7;
        this._cells = new Array(this.nbColumns);

        for (var i = 0; i < this.nbColumns; i++) {
            this._cells[i] = new Array(this.nbRows);
        }
    }

    getCell(column, row) {
        if (column < 0 ||
            column >= this.nbColumns ||
            row < 0 ||
            row >= this.nbRows) {
            throw new Error(CONSTANTS.ERROR_INVALID_CELL);
        }
        return this._cells[column][row];
    }

    addToken(column) {
        if (column >= this.nbColumns || column < 0) {
            throw new Error(CONSTANTS.ERROR_INVALID_COLUMN);
        }
        if (this._cells[column][this.nbRows - 1]) {
            throw new Error(CONSTANTS.ERROR_COLUMN_FULL);
        }

        for (var i = 0; i < this.nbRows; i++) {
            if (!this._cells[column][i]) {
                this._cells[column][i] = true;
                break;
            }
        }
    }

    getCells() {
        return this._cells;
    }
}

module.exports = Grid;
