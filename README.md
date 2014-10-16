QRisk2-2014
===========
Javascript implementation of the QRisk2-2014 10 year cardiovascular risk prediction algorithms.

For further details of the algorithm see the [QRisk website](http://qrisk.org/index.php)

Installation
------------

    npm install qrisk2-2014

Test
----
To execute unit tests:

    mocha spec/*.js
    
An additional set of regression tests can be found at [qrisk2-2014-regression](https://github.com/BlackPearSw/qrisk2-2014-regression)

Use
---

    var qrisk2 = require('qrisk2-2014');

    var args = {
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

    var risk = qrisk2.male(args);

    console.log('10 year cardiovascular risk = ', risk.score, '%');
    console.log(risk);


Copyright
---------
* QRISK2-2014 implementation copyright 2013 ClinRisk Ltd.
* Modifications to port QRISK2-2014 to javascript copyright 2014 Black Pear Software Ltd.
* Unit tests and examples copyright 2014 Black Pear Software Ltd.

License
-------
QRISK2-2014 is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

QRISK2-2014 is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with QRISK2-2014.  If not, see <http://www.gnu.org/licenses/>.

Additional terms:

The following disclaimer must be held together with any risk score score generated by this code.  If the score is
displayed, then this disclaimer must be displayed or otherwise be made easily accessible, e.g. by a prominent link
alongside it.

The initial version of this file, to be found at http://svn.clinrisk.co.uk/opensource/qrisk2, faithfully 
implements QRISK2-2014.

ClinRisk Ltd. have released this code under the GNU Lesser General Public License to enable others to implement 
the algorithm faithfully.
 
However, the nature of the GNU Lesser General Public License is such that we cannot prevent, for example, someone
accidentally altering the coefficients, getting the inputs wrong, or just poor programming.
 
ClinRisk Ltd. stress, therefore, that it is the responsibility of the end user to check that the source that they
receive produces the same results as the original code posted at http://svn.clinrisk.co.uk/opensource/qrisk2.

Inaccurate implementations of risk scores can lead to wrong patients being given the wrong treatment. 

Acknowledgements
----------------
Supported by [Black Pear Software Ltd](www.blackpear.com)
