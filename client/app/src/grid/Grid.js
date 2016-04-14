define(["underscore"], function (_) {

    var Grid = function () {
        this.nbRows = 6;
        this.nbColumns = 7;
        this._cases = new Array(this.nbColumns);

        for (var i = 0; i < this.nbColumns; i++) {
            this._cases[i] = new Array(this.nbRows);
        }


    };

    Grid.prototype.getCase = function (column, row) {
        if (column < 0 ||
            column >= this.nbColumns ||
            row < 0 ||
            row >= this.nbRows) {
            throw new Error("Case not valid");
        }
        return this._cases[column][row];
    };

    Grid.prototype.addToken = function (column) {
        for (var i=0; i<this.nbRows ; i++) {
            if (!this._cases[column][i]) {
                this._cases[column][i] = true;
                break;
            }
        }
    }

    return Grid;
});