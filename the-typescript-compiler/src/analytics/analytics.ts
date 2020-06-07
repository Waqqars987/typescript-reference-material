// for any type variables, TS is able to track the values we assign, but it does not work in case of function parameters
let logged;

function sendAnalytics (data: string) {
	console.log(data);
	logged = true;
	console.log(logged);
}

sendAnalytics('The Data');
