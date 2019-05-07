'use strict';

const getArea = require('./index');

let cases = [], pass = 0, fail = 0;

cases.push({
    input: {
        shapes: [ 'square', 'rectangle', 'circle', 'triangle' ],
        values: [ [ 2 ], [ 3, 4 ], [ 5 ], [ 2, 4 ] ]
    },
    output: [4, 12, 78.5, 4]
});

cases.push({
    input: {
        shapes: [ 'square', 'trapezium', 'rectangle'],
        values: [ [ 2 ], [ 3, 3, 4 ], [ 1, 3 ] ]
    },
    output: [-1]
});

for (let _case of cases){
    getArea(_case.input.shapes, _case.input.values).then(output => {
        let isEqual = _case.output.every( (item, idx) => item === output[idx]);
        (isEqual) ? pass++ : fail++;
    }).catch(error => {
        let isEqual = _case.output.every( (item, idx) => item === error[idx]);
        (isEqual) ? pass++ : fail++;
    });
}

setTimeout(() => {
    console.log(`${pass} passed, ${fail} failed`);
}, 2000);
