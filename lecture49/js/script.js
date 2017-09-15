// this and object literals

var myCircle = {
	radius : 10,
	getArea: function(){
		var self = this;
		var increaseRadius = function (){
			self.radius =20;
		}
		increaseRadius();
		return Math.PI * Math.pow(this.radius,2);
	}
};

console.log(myCircle);
console.log(myCircle.getArea());
console.log(myCircle);

