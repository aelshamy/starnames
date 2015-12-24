var expect = require('chai').expect
var starWars = require('./index');

describe("starnames", function() {
    describe("all", function() {
        it("should be an array of strings", function() {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === "string";
                });
            }
        });

        it("should contain 'Luke Skywalker'", function() {
            expect(starWars.all).to.include('Luke Skywalker');
        });

        it("should have at least 5 names starts with 'J'", function() {
            var items = starWars.all.filter(function(item) {
                return item.substring(0, 1) === 'J'
            })
            expect(items).to.have.length.of.at.least(5);

        });


    });

    describe("random", function() {
        it("should return a random item from the starWars.all", function() {
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });
        it("should return array of random items if passed a number", function() {
            var randomItems = starWars.random(3);
            expect(randomItems).to.have.length(3);

            randomItems.forEach(function(item) {
                expect(starWars.all).to.include(item);
            })
        });

    });


});
