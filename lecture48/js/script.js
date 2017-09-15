// this object

// function myFunction(){
// 	console.log("Hari om!");
// 	this.myName = "NEW_NAME";
// 	console.log(this);
// }

// myFunction();


// Function constructors

function Circle(radius){
	this.radius= radius;
	console.log(this);
}

Circle.prototype.getArea = function() {
	return Math.PI * Math.pow(this.radius,2);
};
// Circle(10);

var myCircle = new Circle(10);
// this outside the function call
console.log(myCircle);
console.log(myCircle.getArea());
console.log(this);