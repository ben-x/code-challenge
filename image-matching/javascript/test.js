'use strict';

const countMatches = require('./index');

let cases = [];

cases.push({
    input: [
        ['0100', '1001', '0011', '0011'],
        ['0101', '1001', '0011', '0011'],
    ],
    output: 2
});

cases.push({
    input: [
        ['0010', '0111', '0100', '1111'],
        ['0010', '0111', '0110', '1111']
    ],
    output: 0
});

cases.push({
    input: [
        ['111', '100', '100'],
        ['111', '100', '101']
    ],
    output: 1
});

cases.push({
    input: [
        ['001', '011', '100'],
        ['001', '011', '101']
    ],
    output: 1
});

let pass = 0, fail = 0;

for (let _case of cases){
    let output = countMatches(_case.input[0], _case.input[1]);
    (output === _case.output) ? pass++ : fail++;
}

console.log(`${pass} passed, ${fail} failed`);