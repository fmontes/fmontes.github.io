function initFlickity(){new Flickity("#dribbbleShots",{wrapAround:!0,prevNextButtons:!1,pageDots:!1})}function displayShots(a){var b=document.getElementById("dribbbleShots"),c="";a.shuffle();for(var d=0;d<a.length;d++)c+='<div class="shot"><img src="'+a[d].images.normal+'" /></div>';b.innerHTML=c,setTimeout(function(){var a=document.getElementById("loading");a.parentElement.removeChild(a),window.matchMedia("(max-width: 599px)").matches&&initFlickity(),b.classList.add("done")},500)}Array.prototype.shuffle=function(){for(var a=this,b=a.length-1;b>=0;b--){var c=Math.floor(Math.random()*(b+1)),d=a[c];a[c]=a[b],a[b]=d}return a};var dribbbleUrl="https://api.dribbble.com/v1/users/27877/shots",dribbbleToken="e93e2bb2731a53c680c68bbf4e29acc6e89c573b2db9838adf017b6efc3b906f",request=new XMLHttpRequest;request.open("GET",dribbbleUrl+"?access_token="+dribbbleToken,!0),request.onload=function(){displayShots(JSON.parse(request.responseText))},request.onerror=function(){console.log(request.errorCode)},request.send();