define(["underscore", "backbone", "../global", "./serviceGrid"], function (_, Backbone, CONSTANTS, serviceGrid) {

    var Grid = Backbone.Model.extend({
        initialize: function () {
            var self = this;
            serviceGrid.getGrid().then(function(json){
                self._cells = json;
                self.nbColumns = json.length;
                self.nbRows = json[0].length;
                self.trigger(Grid.events.GRID_UPDATED);
            });
        },

        getCell: function (column, row) {
            if (column < 0 ||
                column >= this.nbColumns ||
                row < 0 ||
                row >= this.nbRows) {
                throw new Error(CONSTANTS.ERROR_INVALID_CELL);
            }
            return this._cells[column][row];
        },

        addToken: function (column) {
            var self = this;
            serviceGrid.addToken(column).then(function(json){
                self._cells =json;
                self.trigger(Grid.events.GRID_UPDATED);
            });
        },

        getCells: function() {
            return this._cells = serviceGrid.getGrid();
        }


},
    {
        events: {
            TOKEN_ADDED: "TOKEN_ADDED",
            GRID_UPDATED: "GRID_UPDATED"
        }
    }
    )
    ;

    return Grid;
})
;