<?php
require('./solomon.index.php');

$cases = array();

$case1 = [
	'input' => [ 
		['0100', '1001', '0011', '0011'], 
		['0101', '1001', '0011', '0011'] 
	], 
	'output' => 2
];
array_push($cases, $case1);

$case2 = [
	'input' => [
        ['0010', '0111', '0100', '1111'],
        ['0010', '0111', '0110', '1111']
    ],
    'output' => 0
];
array_push($cases, $case2);

$case3 = [
	'input' => [
        ['111', '100', '100'],
        ['111', '100', '101']
    ],
    'output' => 1
];
array_push($cases, $case3);

$case4 = [
	'input' => [
        ['001', '011', '100'],
        ['001', '011', '101']
    ],
    'output' => 1
];
array_push($cases, $case4);

$pass = 0;
$fail = 0;

foreach ($cases as $key => $value) {
	$output = countMatches($value['input'][0], $value['input'][1]);

	if ($output === $value['output']) {
		$pass++;
	} else {
		$fail++;
	}
}

printf("Passed: %s, Failed: %s\n", $pass, $fail);
?>