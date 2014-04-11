
var blockSize = 25;

var cnvs = document.getElementById("game");

var width = cnvs.width;
var height = cnvs.height;

//Testing
var hrLines = new Array(height/blockSize + 1);
for(var i = 0; i < hrLines.length; ++i) {
	hrLines[i] = new Array(width/blockSize);
	for(var j = 0; j < hrLines[i].length; ++j)
		hrLines[i][j] = (Math.random() < 0.5)?true:false;
}
var vrLines = new Array(height/blockSize);
for(var i = 0; i < vrLines.length; ++i) {
	vrLines[i] = new Array(width/blockSize + 1);
	for(var j = 0; j < vrLines[i].length; ++j) {
		vrLines[i][j] = (Math.random() < 0.5)?true:false;
	}
}

//Asta e ce am eu nevoie. Acum le fac random, dar de preferat ar fi sa aiba o logica in spate.
//Ce e important pentru mine e vrLines, hrLines si player. Iti dai seama ce fac.

//end Testing

var player = {x:0, y:0};
