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
var QRisk2_2014 = require('../lib/index');

var testcases = require('./algorithm-testcases');
var should = require('chai').should();
var expect = require('chai').expect;

describe('algorithm', function () {
    var algorithms = [
        {
            name: 'QRisk2.female',
            version: '2014',
            implementation: QRisk2_2014.female
        },
        {
            name: 'QRisk2.male',
            version: '2014',
            implementation: QRisk2_2014.male
        }
    ];

    algorithms.forEach(function (algorithm) {
        var args;
        beforeEach(function () {
            args = {
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
        });

        describe(algorithm.name, function () {
            it('should be implemented as a function', function () {
                should.exist(algorithm.implementation);
                algorithm.implementation.should.be.a('function');
            });

            it('should throw an exception if args undefined', function () {
                should.Throw(function () {
                    algorithm.implementation();
                });
            });

            it('should throw an exception if args does not have all properties', function () {
                delete args.age;

                should.Throw(function () {
                    algorithm.implementation(args);
                });
            });

            it('should throw an exception if args invalid', function () {
                args.age = 16;

                should.Throw(function () {
                    algorithm.implementation(args);
                });
            });

            it('should return a result with score that is a floating point number between 0 and 100', function () {

                var result = algorithm.implementation(args);

                should.exist(result);
                expect(isNaN(result.score)).to.equal(false);
                expect(result.score < 0).to.equal(false);
                expect(result.score > 100).to.equal(false);
            });

            it('should return a result with algorithm name and version', function () {

                var result = algorithm.implementation(args);

                should.exist(result);
                expect(result.algorithm.name).to.equal(algorithm.name);
                expect(result.algorithm.version).to.equal(algorithm.version);
            });

            it('should return a result with disclaimer', function () {

                var result = algorithm.implementation(args);

                should.exist(result);
                expect(result.disclaimer).to.equal(QRisk2_2014.disclaimer);
            });

            describe('smoketest', function () {

                function getDescription(testcase){
                    return testcase.input.join(' ') + " >> " + testcase.expected[algorithm.name];
                }

                function getArgs(values) {
                    var args = {};

                    args.age = Number(values[0]);
                    args.b_AF = Number(values[1]);
                    args.b_ra = Number(values[2]);
                    args.b_renal = Number(values[3]);
                    args.b_treatedhyp = Number(values[4]);
                    args.b_type1 = Number(values[5]);
                    args.b_type2 = Number(values[6]);
                    args.bmi = Number(values[7]);
                    args.ethrisk = Number(values[8]);
                    args.fh_cvd = Number(values[9]);
                    args.rati = Number(values[10]);
                    args.sbp = Number(values[11]);
                    args.smoke_cat = Number(values[12]);
                    args.surv = Number(values[13]);
                    args.town = Number(values[14]);

                    return args;
                }

                testcases.forEach(function (testcase) {
                    it(getDescription(testcase), function(){
                        var args = getArgs(testcase.input);

                        var result = algorithm.implementation(args);

                        expect(result.score).to.equal(testcase.expected[algorithm.name]);

                    });
                });
            });
        });
    });
});
