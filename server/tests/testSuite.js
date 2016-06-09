var expect = require('chai').expect;
var CONSTANTS = require('../src/global.js');
var Grid = require("../src/model/grid.js");
var request = require('supertest');

describe("TestSuite", function () {
    describe("TestCase", function () {
        it("basic tests", function () {

            expect(true).to.be.true;
            expect(false).to.not.be.true;

            expect(1).to.equal(1);
            expect('1').to.not.equal(1);

            expect(5).to.be.a('number');
            expect([]).to.be.an('array');

            expect([1, 2]).to.contain(1);
            expect('hello world').to.contain('world');

            expect([1, 2, 3]).to.have.length(3);
            expect([]).to.be.empty;

            expect(function () {
                throw new Error("error msg");
            }).to.throw(Error);

            expect(function () {
                throw new Error("error msg");
            }).to.throw("error msg");

            expect(function () {
                throw new SyntaxError("SyntaxError");
            }).to.throw(SyntaxError);

        });

        // it("async test", function(done) {
        //
        //     setTimeout(function() {
        //         expect(true).to.be.ok();
        //         done();
        //     });
        //
        // });


    });


});

describe("ServerSuite", function () {
    var url = 'localhost:8888';

    describe("TestGetGrid", function () {

        it("grid exists", function () {
            var grid = new Grid();
            expect(grid).to.not.be.null;
        });

        it("be 6*7", function () {
            var grid = new Grid();
            expect(grid.nbRows).to.equal(6);
            expect(grid.nbColumns).to.equal(7);
        });

        it("Return invalid grid case", function () {
            var grid = new Grid();
            expect(function () {
                return grid.getCell(-1, 0);
            }).to.throw(Error);
            expect(function () {
                return grid.getCell(7, 0);
            }).to.throw(Error);
            expect(function () {
                return grid.getCell(0, -1);
            }).to.throw(Error);
            expect(function () {
                return grid.getCell(0, 6);
            }).to.throw(Error);
        });

        it("Return undefined grid case", function () {
            var grid = new Grid();
            expect(grid.getCell(0, 0)).to.be.undefined;
            expect(grid.getCell(grid.nbColumns - 1, 0)).to.be.undefined;
            expect(grid.getCell(0, grid.nbRows - 1)).to.be.undefined;
            expect(grid.getCell(grid.nbColumns - 1, grid.nbRows - 1)).to.be.undefined;
        });

    });

    describe("Test US2", function () {

        it("should add a token to the grid", function () {
            var grid = new Grid();

            grid.addToken(0);
            expect(grid.getCell(0, 0)).to.be.true;
            expect(grid.getCell(1, 0)).to.be.undefined;
            expect(grid.getCell(0, 1)).to.be.undefined;
            expect(grid.getCell(1, 0)).to.be.undefined;
            expect(grid.getCell(3, 1)).to.be.undefined;
            expect(grid.getCell(4, 3)).to.be.undefined;

        });

        it("should fail when out of grid", function () {
            var grid = new Grid();
            for (var i = 0; i < grid.nbRows; i++) {
                grid.addToken(0);
                expect(grid.getCell(0, i)).to.be.true;
            }

            expect(function () {
                return grid.addToken(0);
            }).to.throw(Error);
        });

        it("should fail when out of grid (invalid column)", function () {
            var grid = new Grid();
            expect(function () {
                return grid.addToken(-1);
            }).to.throw(Error);
            expect(function () {
                return grid.addToken(grid.nbColumns);
            }).to.throw(CONSTANTS.ERROR_INVALID_COLUMN);
        });
    });

    describe("Test US3", function () {
        it("call add token api", function (done) {
            request(url).post('grid/0')
                .send()
                .expect('Content-Type', /json/)
                .expect(200)
                .end(done);
        });

    });
});
