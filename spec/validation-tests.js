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
var getValidationErrors = require('../lib/validation').getValidationErrors;
var objectHasProperties = require('../lib/validation').objectHasProperties;
var propertyIsInSet = require('../lib/validation').propertyIsInSet;
var propertyIsInRange = require('../lib/validation').propertyIsInRange;
var propertyIsZeroOrOne = require('../lib/validation').propertyIsZeroOrOne;
var propertyHasValue = require('../lib/validation').propertyHasValue;
var expectedArgs = require('../lib/args');

var expect = require('chai').expect;

describe('validation', function () {
    describe('getValidationErrors', function () {

        var rules = [
            objectHasProperties(expectedArgs),
            propertyIsInRange('age', 25, 84),
            propertyIsZeroOrOne('b_AF'),
            propertyIsZeroOrOne('b_ra'),
            propertyIsZeroOrOne('b_renal'),
            propertyIsZeroOrOne('b_treatedhyp'),
            propertyIsZeroOrOne('b_type1'),
            propertyIsZeroOrOne('b_type2'),
            propertyIsInRange('bmi', 20, 40),
            propertyIsInSet('ethrisk', [1, 2, 3, 4, 5, 6, 7, 8, 9]),
            propertyIsZeroOrOne('fh_cvd'),
            propertyIsInRange('rati', 1, 12),
            propertyIsInRange('sbp', 70, 210),
            propertyIsInSet('smoke_cat', [0, 1, 2, 3, 4]),
            propertyHasValue('surv', 10),
            propertyIsInRange('town', -7, 11)
        ];

        function makeValidArgs() {
            return {
                age: 30,
                b_AF: 0,
                b_ra: 0,
                b_renal: 0,
                b_treatedhyp: 0,
                b_type1: 0,
                b_type2: 0,
                bmi: 25,
                ethrisk: 1,
                fh_cvd: 0,
                rati: 1,
                sbp: 120,
                smoke_cat: 0,
                surv: 10,
                town: 0
            };
        }

        it('should be implemented', function () {
            expect(getValidationErrors).to.be.a('function');
        });

        it('should return an array of error strings', function () {
            var args = makeValidArgs();

            var result = getValidationErrors(args, rules);

            expect(result).to.be.an('array');
        });

        var rangeFields = [
            {
                field: 'age', min: 25, max: 84
            },
            {
                field: 'bmi', min: 20, max: 40
            },
            {
                field: 'rati', min: 1, max: 12
            },
            {
                field: 'sbp', min: 70, max: 210
            },
            {
                field: 'town', min: -7, max: 11
            }
        ];

        rangeFields.forEach(function (params) {
            describe('should check ' + params.field + ' is in range ' + params.min + ' to ' + params.max, function () {
                var args;
                var msg = params.field + ' must be in range (' + params.min + ',' + params.max + ')';
                beforeEach(function () {
                    args = makeValidArgs();
                });

                it('returning error when ' + params.field + ' is below range', function () {
                    args[params.field] = params.min - 1;

                    var result = getValidationErrors(args, rules);

                    expect(result).to.include(msg);
                });

                it('returning no error when ' + params.field + ' is ' + params.min, function () {
                    args[params.field] = params.min;

                    var result = getValidationErrors(args, rules);

                    expect(result).to.not.include(msg);
                });

                it('returning no error when ' + params.field + ' is ' + params.max, function () {
                    args[params.field] = params.max;

                    var result = getValidationErrors(args, rules);

                    expect(result).to.not.include(msg);
                });

                it('returning error when ' + params.field + ' is above range', function () {
                    args[params.field] = params.max + 1;

                    var result = getValidationErrors(args, rules);

                    expect(result).to.include(msg);
                });
            });
        });

        var categoricalFields = [
            {
                field: 'ethrisk', expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
                field: 'smoke_cat', expected: [0, 1, 2, 3, 4]
            }
        ];
        categoricalFields.forEach(function (params) {
            describe('should check ' + params.field + ' is in set [' + params.expected.join(' ') + ']', function () {
                var args;
                var msg = params.field + ' must be in set [' + params.expected.join(' ') + ']';
                beforeEach(function () {
                    args = makeValidArgs();
                });

                it('returning error when ' + params.field + ' is not in set', function () {
                    args[params.field] = -999;

                    var result = getValidationErrors(args, rules);

                    expect(result).to.include(msg);
                });

                it('returning no error when ' + params.field + ' is in set', function () {
                    args[params.field] = params.expected[0];

                    var result = getValidationErrors(args, rules);

                    expect(result).to.not.include(msg);
                });
            });
        });


        var bitFields = ['b_AF', 'b_ra', 'b_renal', 'b_treatedhyp', 'b_type1', 'b_type2', 'fh_cvd'];
        bitFields.forEach(function (field) {
            describe('should check ' + field + ' is zero or one', function () {

                var args;
                var msg = field + ' must be 0 or 1';
                beforeEach(function () {
                    args = makeValidArgs();
                });

                it('returning error when ' + field + ' is -1', function () {
                    args[field] = -1;

                    var result = getValidationErrors(args, rules);

                    expect(result).to.include(msg);
                });

                it('returning no error when ' + field + ' is 0', function () {
                    args[field] = 0;

                    var result = getValidationErrors(args, rules);

                    expect(result).to.not.include(msg);
                });

                it('returning no error when ' + field + ' is 1', function () {
                    args[field] = 1;

                    var result = getValidationErrors(args, rules);

                    expect(result).to.not.include(msg);
                });
            });
        });

        describe('should check surv is 10', function () {

            var args;
            var field = 'surv';
            var msg = field + ' must be 10';
            beforeEach(function () {
                args = makeValidArgs();
            });

            it('returning error when ' + field + ' is -1', function () {
                args[field] = -1;

                var result = getValidationErrors(args, rules);

                expect(result).to.include(msg);
            });

            it('returning no error when ' + field + ' is 10', function () {
                args[field] = 10;

                var result = getValidationErrors(args, rules);

                expect(result).to.not.include(msg);
            });

            it('returning error when ' + field + ' is 11', function () {
                args[field] = 11;

                var result = getValidationErrors(args, rules);

                expect(result).to.include(msg);
            });
        });
    });
});