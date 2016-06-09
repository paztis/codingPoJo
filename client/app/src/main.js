

require(['jquery', 'underscore', 'grid/Grid', 'text!./templates/grid.templ.html'], function ($, _, Grid, templateGridString) {

    var grid = new Grid();
    var templateGrid = _.template(templateGridString);
    var error = '';

    grid.addToken(0);
    render();

    $("#APP").delegate('.cell', 'click', function (event) {
        try {
            grid.addToken(+$(event.currentTarget).attr('data-col-index'));
        } catch(e) {
            error = e.message;
            render();
        }
    });

    grid.on(Grid.events.TOKEN_ADDED, function() {
        render();
    });

    function render() {
        $("#APP").html(templateGrid({
            grid: grid,
            error: error
        }));
    }

});