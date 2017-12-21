/* rewrite Links to append version parameter*/
function rewriteLinks ()
{
    var getParams = [];
    var link, isHttp, isWWW, isHtm, isHtml, isJump, fragment, newLink;

    // decode URL
    document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() 
    {
        function decode(a) 
        {
            return decodeURIComponent(a.split('+').join(' '));
        }

        getParams[decode(arguments[1])] = decode(arguments[2]);
    });

    // rewrite
    if(typeof getParams["version"] != 'undefined')
    {        
        var el = document.getElementsByTagName('a');
        
        for (var i = 0; i < el.length; i++)
        {
            link = el[i]['href'];
            
            if(typeof link != 'undefined')
            {
                // check if link is internal
                isHttp = link.indexOf('http://') != -1;
                isWWW = link.indexOf('www.') == 0;
                isHtml = link.indexOf('.html') != -1;
                isHtm = !isHtml && link.indexOf('.htm') != -1;
                isJump = link.indexOf('#') != -1;
                         
                if (!isHttp && !isWWW && (isHtml || isHtm))
                {
                    fragment = isJump? link.substring(link.indexOf('#'), link.length) : '';
                    newLink = isJump?link.substring(0, link.indexOf('#')):link;
                    newLink = newLink + (newLink.indexOf('?version=')==-1?'?version=' + getParams["version"]:'');
                    newLink = newLink + fragment;
                    
                    el[i]['href'] = newLink;
                }
            }
        }
    }
};

/* Event registration */
if (document.addEventListener){
	/* No IE */
	if(document.readyState === "complete")
	{
		rewriteLinks();
	}
	else
	{
		document.addEventListener('DOMContentLoaded', rewriteLinks, false); 
	}
} else if (document.attachEvent){
  /* IE */
	isIE = true;
	if(document.readyState === "complete")
	{
		rewriteLinks();
	} 
	else
	{
		window.attachEvent('onload', rewriteLinks );
	}
} 