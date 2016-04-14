require(['jquery', 'expect', 'mocha', '../src/grid/Grid'], function ($, expect, mocha, Grid) {


    describe("TestSuite", function () {
        describe("TestCase", function () {
            it("basic tests", function () {

                expect(true).to.be.ok();
                expect(false).to.not.be.ok();

                expect(1).to.be(1);
                expect('1').to.not.be(1);

                expect(5).to.be.a('number');
                expect([]).to.be.an('array');

                expect([1, 2]).to.contain(1);
                expect('hello world').to.contain('world');

                expect([1, 2, 3]).to.have.length(3);
                expect([]).to.be.empty();

                expect(function () {
                    throw new Error("error");
                }).to.throwError();
                expect(function () {
                    throw new SyntaxError("SyntaxError");
                }).to.throwException(function (e) {
                    // get the exception object
                    expect(e).to.be.a(SyntaxError);
                });

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

        describe("Test US1", function () {

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
                    return grid.getCase(-1, 0);
                }).to.throwError();
                expect(function () {
                    return grid.getCase(7, 0);
                }).to.throwError();
                expect(function () {
                    return grid.getCase(0, -1);
                }).to.throwError();
                expect(function () {
                    return grid.getCase(0, 6);
                }).to.throwError();
            });

            it("Return undefined grid case", function () {
                var grid = new Grid();
                expect(grid.getCase(0, 0)).to.be(undefined);
                expect(grid.getCase(grid.nbColumns - 1, 0)).to.be(undefined);
                expect(grid.getCase(0, grid.nbRows - 1)).to.be(undefined);
                expect(grid.getCase(grid.nbColumns - 1, grid.nbRows - 1)).to.be(undefined);
            });


            it("Return valid grid case", function () {
                var grid = new Grid();
                grid.addToken(0);
                expect(grid.getCase(0, 0)).to.be(true);
                expect(grid.getCase(1, 0)).to.be(undefined);
                expect(grid.getCase(0, 1)).to.be(undefined);
                expect(grid.getCase(1, 0)).to.be(undefined);
                expect(grid.getCase(3, 1)).to.be(undefined);
                expect(grid.getCase(4, 3)).to.be(undefined);
            });

            it("should fail when out of grid", function () {
                var grid = new Grid();
                for(var i = 0; i< grid.nbRows; i++) {
                    grid.addToken(0);
                    expect(grid.getCase(0, i)).to.be(true);
                }

                expect(function () {
                    return grid.addToken(0);
                }).to.throwError();
            });
        });
    });
});