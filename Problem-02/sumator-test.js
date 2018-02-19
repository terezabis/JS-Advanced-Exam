let expect = require('chai').expect;
let Sumator = require("./sumator").Sumator;

describe("Test class Sumator's functions", function () {
    let sumator;
    beforeEach(function() {
        sumator = new Sumator();
    });

    it("should contains property 'data'", function () {
        expect(sumator.hasOwnProperty('data')).to.be.equal(true);
    });
    it("data should contains array", function () {
        sumator.add(1);
        sumator.add(2);
        expect(typeof sumator.data).to.equal('object');
    });

    it("should return empty array on start", function () {
        expect(sumator.toString()).to.be.equal('(empty)');
    });
    it("should return array joined with ','",function () {
        sumator.add(1);
        sumator.add(2);
        sumator.add("three");
        sumator.add(4);
        expect(sumator.toString()).to.be.equal('1, 2, three, 4');
    });
    it("should return one element",function () {
        sumator.add(1);
        expect(sumator.toString()).to.be.equal('1');
    });
    it("toString() should return string",function () {
        sumator.add(1);
        sumator.add(2);
        expect(typeof sumator.toString()).to.be.equal('string');
    });
    it("should return string splite by ', '",function () {
        sumator.add(1);
        sumator.add(2);
        expect(sumator.toString()).to.not.be.equal('1,2');
    });

    describe("Test Add function", function () {
        it("add string", function () {
            sumator.add('hello');
            sumator.add('2');
            expect(sumator.toString()).to.be.equal('hello, 2');
        });

        it("add object", function () {
            sumator.add({name: 'ivan'});
            expect(sumator.toString()).to.be.equal('[object Object]');
        });
        it("add string", function () {
            sumator.add(3.14);
            sumator.add(99);
            expect(sumator.toString()).to.be.equal('3.14, 99');
        });
    });

    describe("Test sumNums()",function () {
        it("sum one element",function () {
            sumator.add(2);
            expect(sumator.sumNums()).to.be.equal(2);
        });
        it("sum many elements",function () {
            sumator.add(2);
            sumator.add(4);
            sumator.add(6);
            expect(sumator.sumNums()).to.be.equal(12);
        });
        it("sum numbers and string elements",function () {
            sumator.add('one');
            sumator.add(4);
            sumator.add(6);
            expect(sumator.sumNums()).to.be.equal(10);
        });
        it("sum many elements",function () {
            sumator.add(2);
            sumator.add('4');
            sumator.add(6);
            expect(sumator.sumNums()).to.be.equal(8);
        });
        it("sum string element",function () {
            sumator.add('one');
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it("sum string element",function () {
            sumator.add('2');
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it("sum object element",function () {
            sumator.add({key: 'value'});
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it("sum no elements",function () {
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it("sum numbers and string elements",function () {
            sumator.add(2.2);
            sumator.add(1.1);
            sumator.add(5.5);
            expect(sumator.sumNums()).to.be.equal(8.8);
        });

        it("sum many elements",function () {
            sumator.add(1);
            sumator.add(2);
            sumator.add("three");
            sumator.add(4);
            sumator.add("5.5");
            sumator.add(7.7);
            expect(sumator.sumNums()).to.be.equal(14.7);
        });
    });

    describe("Test removeByFilter(filterFunc)", function () {
        it("shuld remove all > 3", function () {
            sumator.add(2);
            sumator.add(5);
            sumator.add(10);
            let filterFunc = function (value) {
                return value>3
            };
            sumator.removeByFilter(filterFunc);
            expect(sumator.toString()).to.be.equal('2');
        });
        it("shuld remove nothing", function () {
            sumator.add(2);
            sumator.add(5);
            sumator.add(10);
            let filterFunc = function (value) {
                return value<1
            };
            sumator.removeByFilter(filterFunc);
            expect(sumator.toString()).to.be.equal('2, 5, 10');
        });
        it("shuld remove nothing", function () {
            sumator.add('one');
            sumator.add('two');
            sumator.add(10);
            let filterFunc = function (value) {
                return value='one';
            };
            sumator.removeByFilter(filterFunc);
            expect(sumator.toString()).to.be.equal('(empty)');
        });

        it("shuld remove all even numbers", function () {
            sumator.add(2);
            sumator.add(5);
            sumator.add(10);
            sumator.add('10');
            let filterFunc = function (value) {
                return value% 2 === 0
            };
            sumator.removeByFilter(filterFunc);
            expect(sumator.toString()).to.be.equal('5');
        });
    });
});