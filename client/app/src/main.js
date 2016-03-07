require.config({
    paths: {
        'jquery': '../lib/jquery/dist/jquery',
        'underscore': '../lib/underscore-amd/underscore'
    }
});

require(['jquery'], function ($) {


    $("#APP").html("Hello");

});