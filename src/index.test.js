var expect = require('chai').expect
var starwar = require('./index');

describe("starnames", function() {
    describe("all", function() {
        it("should be an array of strings", function() {
            expect(starwar.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === "string";
                });
            }
        });

        it("should contain 'Luke Skywalker'", function() {
            expect(starwar.all).to.include('Luke Skywalker');
        });


    });

    describe("random", function() {
        it("should return a random item from the starwar.all", function() {
            var randomItem = starwar.random();
            expect(starwar.all).to.include(randomItem);
        });

    });
});
