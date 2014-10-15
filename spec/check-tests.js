/*
 Copyright 2014 Black Pear Software Ltd.

 QRISK2-2014 is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 QRISK2-2014 is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with QRISK2-2014.  If not, see <http://www.gnu.org/licenses/>
 */
var utils = require('../lib/check');

var should = require('chai').should();
var expect = require('chai').expect;

describe('check', function () {
    describe('hasFields', function () {
        it('should return true when value has expected properties', function () {
            var value = {
                a: 1,
                b: 2
            };
            var expected = ['a', 'b'];

            var result = utils.hasProperties(value, expected);

            result.should.be.true;
        });

        it('should return false when value does not have expected properties', function () {
            var value = {
                a: 1,
                b: 2
            };
            var expected = ['a', 'c'];

            var result = utils.hasProperties(value, expected);

            result.should.be.false;
        });
    });

    describe('isZeroOrOne', function () {
        it('should return true when input 0', function () {
            var result = utils.isZeroOrOne(0);

            result.should.be.true;
        });

        it('should return true when input 1', function () {
            var result = utils.isZeroOrOne(1);

            result.should.be.true;
        });

        it('should return false when input -1', function () {
            var result = utils.isZeroOrOne(-1);

            result.should.be.false;
        });

        it('should return false when input 2', function () {
            var result = utils.isZeroOrOne(2);

            result.should.be.false;
        });

        it('should return false when input undefined', function () {
            var result = utils.isZeroOrOne(undefined);

            result.should.be.false;
        });
    });

    describe('isInRange', function () {
        it('should return false when input 24 and range 25-84', function () {
            var result = utils.isInRange(24, 25, 84);

            result.should.be.false;
        });

        it('should return true when input 25 and range 25-84', function () {
            var result = utils.isInRange(25, 25, 84);

            result.should.be.true;
        });

        it('should return true when input 84 and range 25-84', function () {
            var result = utils.isInRange(84, 25, 84);

            result.should.be.true;
        });

        it('should return false when input 85 and range 25-84', function () {
            var result = utils.isInRange(85, 25, 84);

            result.should.be.false;
        });
    });
});