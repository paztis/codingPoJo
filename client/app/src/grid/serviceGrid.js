/**
 * Created by thales on 07/10/2016.
 */
define([], function () {

    function getGrid() {
        var config = {
            method: 'GET',
            mode: 'cors'
        };
        return fetch('/api/grid', config).then(function (response) {
            return response.json();
        });
    };
    
    function addToken(col){
        var config = {
            method: 'POST',
            mode: 'cors'
        };
        return fetch('/api/grid/'+col, config).then(function (response) {
            return response.json();
        });
    };

    return {getGrid: getGrid, addToken :addToken}
});