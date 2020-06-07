function add (n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

const number1 = 5; // type inference by TS
const number2 = 2.8; // for a const variables, its VALUE is it's TYPE (here 2.8 is the type of number2) {LITERAL TYPE}
const printResult = true;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
