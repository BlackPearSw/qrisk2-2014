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
module.exports = [
    {
        input: [25, 1, 1, 1, 1, 1, 1, 30, 4, 0, 12, 70, 3, 10, 11],
        expected: {
            'QRisk2.female': 100.000000,
            'QRisk2.male': 100.000000
        }
    },
    {
        input: [25, 0, 0, 0, 0, 0, 0, 35, 4, 0, 12, 70, 3, 10, 11],
        expected: {
            'QRisk2.female': 1.773995,
            'QRisk2.male': 1.161619
        }
    },
    {
        input: [35, 1, 0, 0, 0, 0, 0, 25, 4, 1, 4, 110, 3, 10, 11],
        expected: {
            'QRisk2.female': 23.290354,
            'QRisk2.male': 20.545890
        }
    },
    {
        input: [35, 0, 1, 0, 0, 0, 0, 25, 4, 1, 4, 110, 3, 10, 11],
        expected: {
            'QRisk2.female': 5.806421,
            'QRisk2.male': 7.154528
        }
    },
    {
        input: [45, 1, 1, 0, 0, 0, 0, 25, 4, 1, 8, 150, 1, 10, 0],
        expected: {
            'QRisk2.female': 40.262236,
            'QRisk2.male': 53.639356
        }
    },
    {
        input: [45, 0, 0, 1, 0, 0, 0, 25, 4, 1, 8, 150, 1, 10, 0],
        expected: {
            'QRisk2.female': 19.612349,
            'QRisk2.male': 40.736380
        }
    },
    {
        input: [55, 0, 1, 0, 1, 0, 0, 30, 3, 0, 8, 70, 1, 10, 11],
        expected: {
            'QRisk2.female': 28.211489,
            'QRisk2.male': 36.565744
        }
    },
    {
        input: [55, 1, 1, 1, 1, 0, 0, 35, 3, 0, 8, 70, 1, 10, 11],
        expected: {
            'QRisk2.female': 83.895346,
            'QRisk2.male': 84.042685
        }
    },
    {
        input: [
            65, 0, 0, 0, 1, 0, 1, 25, 3, 0, 4, 130, 3, 10, -7],
        expected: {
            'QRisk2.female': 47.012011,
            'QRisk2.male': 53.083096
        }
    },
    {
        input: [65, 1, 1, 1, 1, 1, 1, 20, 3, 1, 4, 90, 4, 10, 0],
        expected: {
            'QRisk2.female': 99.999958,
            'QRisk2.male': 99.992259
        }
    },
    {
        input: [75, 1, 1, 0, 1, 0, 0, 30, 3, 0, 1, 190, 2, 10, 11],
        expected: {
            'QRisk2.female': 81.837773,
            'QRisk2.male': 69.387732
        }
    },
    {
        input: [75, 0, 0, 1, 1, 0, 0, 30, 3, 0, 1, 190, 2, 10, 11],
        expected: {
            'QRisk2.female': 56.311453,
            'QRisk2.male': 51.054797
        }
    },
    {
        input: [84, 0, 0, 0, 0, 0, 0, 30, 3, 1, 1, 90, 3, 10, -7],
        expected: {
            'QRisk2.female': 64.471391,
            'QRisk2.male': 59.130835
        }
    },
    {
        input: [84, 1, 0, 0, 0, 0, 0, 30, 3, 1, 1, 90, 3, 10, -7],
        expected: {
            'QRisk2.female': 83.386475,
            'QRisk2.male': 75.069590
        }
    }
];