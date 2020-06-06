// empty {}  is same 'object' type
// const person: { name: string; age: number } = {
// 	name: 'Waqqar',
// 	age: 25
// };

// tuple
// const person: { name: string; age: number; hobbies: string[]; role: [number, string] } = {
// 	name: 'Waqqar',
// 	age: 25,
// 	hobbies: [ 'Sports', 'Cooking' ],
// 	role: [ 2, 'author' ]
// };

// person.role.push('admin'); //push() is an exception on tuple regarding the length of the tuple
// person.role[1] = 10;
// person.role=[0,'admin','user']

enum Role {
	ADMIN = 'ADMIN',
	READ_ONLY = 100,
	AUTHOR
}

const person = {
	name: 'Waqqar',
	age: 25,
	hobbies: [ 'Sports', 'Cooking' ],
	role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = [ 'Sports' ];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// console.log(hobby.map()); ERROR
}

if (person.role === Role.ADMIN) {
	console.log('is admin');
}
