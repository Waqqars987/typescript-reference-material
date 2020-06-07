//type Alias
type Combinable = number | string; // Union Type
type ConversionDescriptor = 'as-number' | 'as-text'; // Literal Types(based on Core Types)

function combine (input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
	let result: Combinable;
	if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
	// if (resultConversion === 'number') {
	// 	return +result;
	// } else {
	// 	return result.toString();
	// }
}

const combinedAges = combine(25, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('25', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Waqqar', 'Suleman', 'as-text');
console.log(combinedNames);
