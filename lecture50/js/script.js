var myCollection = new Array();

myCollection[0] = "Bharath";
myCollection[1] = {
	name: "Karnataka",
	capital: "Bengaluru"
};
myCollection[2] = function (){
	console.log("Namaste !!!");
};

console.log(myCollection);

var literalArray = ["goa","karnataka",{name: "crime and punishment",author: "Dostevsky"}];

console.log(literalArray);

for(var i = 0; i < myCollection.length; i++){
	console.log(" Here is :" + myCollection[i]);
}