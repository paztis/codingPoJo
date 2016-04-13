require.config({
    paths: {
        'jquery': '../lib/jquery/dist/jquery',
        'underscore': '../lib/underscore-amd/underscore',

        'mocha': '../lib/mocha/mocha',
        'expect': '../lib/expect/index'
    },

    shim: {
        'mocha': {
            init: function () {
                mocha.setup('bdd');
                return mocha;
            }
        },
        'expect': {
            init: function () {
                return expect;
            }
        }
    }
});