// default values:

function defaultValues(myValue){
	if(!myValue){
		myValue = "No value supplied!!";
	}
	console.log("The value entered is : " + myValue);
}

defaultValues();

// default values : better approach 

function defaultValuesBetter(myValue){
	myValue = myValue || "Default Value!";
	console.log("Better : The value entered is : " + myValue);
};

defaultValuesBetter();