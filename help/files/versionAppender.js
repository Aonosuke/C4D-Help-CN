/* Gets the specified parameter from the current url and returns its value. If the 
   parameter is not available it returns undefined. */
var isIE = false;
	 
function getParamter( param )
{
	var result;
	// cleanup
	param = param.replace("/[\[]/","\\\[").replace("/[\]]/","\\\]");
	var query = "[\\?&]"+param+"=([^&#]*)";
	var regex = new RegExp( query );
	var filter = regex.exec( window.location.href );
	if( filter == null ) {
		result = "";
	} else {
		result = filter[1];
	}
	return result;
}

function getAnchor( )
{
	var result;
	var query = "#(.*)";
	var regex = new RegExp( query );
	var filter = regex.exec( window.location.href );
	if( filter == null ) {
		result = "";
	} else {
		result = filter[1];
	}
	return result;
}

/* Appends the CINEMA 4D version to the HTML element. */
function handleVersion () {
	var element = document.getElementsByTagName('body');
	var version = getParamter("version");
	var versionString = "";

	if 	(version == "1010"){versionString = "prime";}
	else if (version == "1011"){versionString = "bodypaint3d";}
	else if (version == "1015"){versionString = "visualize";} 
	else if (version == "1016"){versionString = "broadcast";}
	else if (version == "1014"){versionString = "studio";} 
	else if (version == "1017"){versionString = "lite";}

	if (isIE == true)
	{
		element[0].className = versionString;
		setTimeout(function(){forceRedraw(document.getElementsByTagName('html')[0]);}, 15);
		var anchor = getAnchor();
		if (anchor.length > 0)
		{
			window.location.hash=anchor;
		}
	}
	else
	{
		element[0].setAttribute('class',versionString);
		
	}
	
}

/* Event registration */
if (document.addEventListener){
	/* No IE */
	if(document.readyState === "complete")
	{
		handleVersion();
	}
	else
	{
		document.addEventListener('DOMContentLoaded', handleVersion, false); 
	}
} else if (document.attachEvent){
  /* IE */
	isIE = true;
	if(document.readyState === "complete")
	{
		handleVersion();
	} 
	else
	{
		window.attachEvent('onload', handleVersion );
	}
} 

function forceRedraw (element){

    if (!element) { return; }
		var backup = element.className;
		element.className = 'none';
		var redrawFix = element.offsetHeight;
		element.style.display = 'block';
		element.className = backup;
}


	function dummy(){ } 
	function change(Media){ 
	var elements = document.getElementsByTagName('a');
		if(document.getElementById(Media).style.display=='none') 
		document.getElementById(Media).style.display='block';
		else document.getElementById(Media).style.display='none';
	} 
