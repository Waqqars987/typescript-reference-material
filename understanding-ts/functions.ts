// Functions return type is inferrred by TS
function add (n1: number, n2: number) {
	return n1 + n2;
}

// Here the return type of the function is VOID, using void is recommeded if the function does not have a return statement
function printResult (num: number): void {
	console.log('Result: ' + num);
}

/* Callback with function type, by specifying 'void' as callback return type we ignore any result that is returned here.
Anything that might be returned will not be used */
function addAndHandle (n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

// If the return type of a function is 'undefined', then it must have a 'return'  statement
// function printResult1 (num: number): undefined {
// 	console.log('Result: ' + num);
// 	return;
// }

// let somevalue:undefined;

printResult(add(5, 12));

// Function types are types decribe a function regarindg params and return type of the function
// combinedValues should accept any function that aceepts 2 params where each param is a number and the function itself returns a number
let combinedValues: (a: number, b: number) => number; // Function type of combinedValues
combinedValues = add; // add() conforms to the type of combinedValues
console.log(combinedValues(2, 3));

// TS infers the type of 'result' from the callback
addAndHandle(10, 20, result => {
	console.log(result);
	return result; // TS does not pickup this return statement even though we mention in cb that the return type of cb is void
});
