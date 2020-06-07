let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Waqqar';
/* with unknow, am extra type check is needed to be able to assing an unknown value to a value with a fixed type.
uknown is the better choice over any type because it makes that we are not allowed to do anything but we have at least 
some type checking */
if (typeof userInput === 'string') {
	userName = userInput;
}

/* This function never returns any value but always crashes the script by throwing an object.
Hence the return type of this function is 'never'. 'never' has to be specified explicitly. */
function generateError (message: string, code: number): never {
	throw { message: message, errorCode: code };
	// while (true) {}  // this will never return either
}

const result = generateError('An Error occurred', 500);
console.log('result', result);
