// Copy by value:

// var a =5;
// var b = a;

// console.log("variable a initial:" + a);
// console.log("variable b copied value from a: " + b);

// update one of the variables

// a = 3;
// console.log("variable a after update:" + a);
// console.log("variable b after update:" + b);


// Copy by reference

// var a = {x:7};
// var b = a;

// console.log(" a initial: ");
// console.log(a);
// console.log(" b initial(after copied from a): ");
// console.log(b);

// // update one of the objects

// b.x= 5;
// console.log("a after update:")
// console.log(a);
// console.log("b after update:");
// console.log(b);

// Pass by value (function examples:)

// function changeValue(primVal){
// 	console.log("inside myFunc : before :", primVal);
// 	primVal = 9;
// 	console.log("insie myFunc : after :", primVal);
// }

// var a = 7;
// console.log("outside myFunc passing a :" + a);

// changeValue(a);

// console.log("outside myFunc after call : a :" + a);

// Pass by reference

function changeObject(myObject){
	console.log("inside changeObject: myObject before :" );
	console.log(myObject);
	myObject.x= 5;
	console.log("inside changeObject :myObject after :");
	console.log(myObject);
}

var lObject = {x:7}
console.log("outside changeObject lObject before call :");
console.log(lObject);
changeObject(lObject);
console.log("outside changeObject lObject after call :");
console.log(lObject);
