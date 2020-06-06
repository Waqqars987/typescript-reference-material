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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Waqqar',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); ERROR
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
