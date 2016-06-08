var expect = require('chai').expect;

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
