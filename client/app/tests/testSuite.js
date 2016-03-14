

require(['jquery', 'expect', 'mocha'], function ($, expect, mocha) {

    describe("TestSuite", function() {
        describe("TestCase", function() {
            it("basic tests", function() {

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

            it("async test", function(done) {

                setTimeout(function() {
                    expect(true).to.be.ok();
                    done();
                });

            });
        });
    });
});