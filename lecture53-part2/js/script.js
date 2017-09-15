function sayHello(){
	console.log("hello!!");
	// get the value in the input
	var name = document.getElementById("name").value;
	console.log(name);
	var message = "<h2> Namaste " + name + "! </h2>";
	// text content setting
	// document.getElementById("content").textContent= message;
	//setting HTML content 
	document.getElementById("content").innerHTML = message;

	if(name === "student"){
		var title = document.querySelector("#title").textContent;
		console.log(title);
		var newTitle = title + " Interesting concept!!"
		document.querySelector("#title").textContent = newTitle;
	}
}

