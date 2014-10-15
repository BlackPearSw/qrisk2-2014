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
var args = require('../lib/args');

var should = require('chai').should();
var expect = require('chai').expect;

describe('args', function () {
    it('should be implemented', function () {
        should.exist(args);
    });

    var expected = ['age', 'b_AF', 'b_ra', 'b_renal', 'b_treatedhyp', 'b_type1', 'b_type2', 'bmi', 'ethrisk', 'fh_cvd', 'rati', 'sbp', 'smoke_cat', 'surv', 'town'];

    expected.forEach(function (item) {
        it('should include ' + item, function () {
            var result = args.some(function(arg){
                return arg === item;
            });

             expect(result).to.be.true;
        });
    });
});