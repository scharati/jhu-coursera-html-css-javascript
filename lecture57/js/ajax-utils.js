(function(global){

// creating a namespace
var ajaxUtils = {};

function getRequestObject(){
	if(window.XMLHttpRequest){
		return (new XMLHttpRequest());
	}
	else if (window.ActiveXObject) {
		return (new ActiveXObject("Microsoft.XMLHTTP"));
	}
	else{
		global.alert("AJAX not supported!!");
		return(null);
	}
}

// sending the request to the server
ajaxUtils.sendGetRequest = 
	function(requestUrl,responseHandler){
		var request = getRequestObject();
		request.onreadystatechange = function(){
			handleResponse(request,responseHandler);
		};
		request.open("GET",requestUrl, true);
		request.send(null);
	};

function handleResponse(request,responseHandler){
	if((request.readyState == 4) && (request.status == 200)){
		responseHandler(request);
	}
}

// make it available on window
global.$ajaxUtils = ajaxUtils;

})(window);