let str = "";
var regex = /[^a,e,i,o,u,y]/gi;

function cont() {
    str = document.getElementById('input-cont').value;
	let count = 0;
	
	for (var i = 0; i < str.replace( /[^a,e,i,o,u,y]/gi,"").length; i++) {
	
	    count++;
	
	}
	
	document.getElementById('results').innerHTML = ('La phrase que vous avez saisi contient ' + count + ' voyelles' )
}