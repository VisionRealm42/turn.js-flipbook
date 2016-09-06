$( document ).ready(function() {
  $("#flipbook").turn({
    width: 982,
    height: 360,
  });
});

function ScrollDiv(){

 if(document.getElementById('ecran').scrollTop<(document.getElementById('ecran').scrollHeight-document.getElementById('ecran').offsetHeight)){-1
    document.getElementById('ecran').scrollTop=document.getElementById('ecran').scrollTop+1
		}
	}

setInterval(ScrollDiv,50)
