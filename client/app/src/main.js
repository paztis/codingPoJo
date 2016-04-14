

require(['jquery', 'underscore', 'grid/Grid', 'text!./templates/grid.templ.html'], function ($, _, Grid, templateGridString) {

    var grid = new Grid();
    var templateGrid = _.template(templateGridString);

    $("#APP").html(templateGrid({
        grid: grid
    }));

});