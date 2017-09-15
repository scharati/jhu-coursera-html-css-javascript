// Functions

function multiply(x,y){
	return x*y;
}

multiply.version = "v.1.0.0";
console.log(multiply.version);
console.log(multiply);

function makeMultiplier(multiplier){
	var myFunc = function(x){
		return multiplier * x;
	};

	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log("doubleAll: ");
console.log(doubleAll(100));

// passing functions:

function doOperation(x,operation){
	return operation(x);
}

console.log(doOperation(5,multiplyBy3));
console.log(doOperation(100,doubleAll));