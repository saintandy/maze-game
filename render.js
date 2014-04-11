
var blockSize = 25;

var cnvs = document.getElementById("game");
var ctx = cnvs.getContext("2d");

var width = cnvs.width;
var height = cnvs.height;

function DrawPlayer() {
	ctx.fillRect(player.x,player.y,10,10);
}

function DrawMaze() {
	for(var i = 0; i < hrLines.length; ++i) {
		for(var j = 0; j < hrLines[i].length; ++j) {
			if(hrLines[i][j]) {
				ctx.beginPath();
				ctx.moveTo(blockSize*i,blockSize*j);
				ctx.lineTo(blockSize*(i+1),blockSize*j);
				ctx.stroke();
			}
		}
	}
	for(var i = 0; i < hrLines.length; ++i) {
		for(var j = 0; j < hrLines[i].length; ++j) {
			if(hrLines[i][j]) {
				ctx.beginPath();
				ctx.moveTo(blockSize*i,blockSize*j);
				ctx.lineTo(blockSize*i,blockSize*(j+1));
				ctx.stroke();
			}
		}
	}

}

function Render() {
	DrawPlayer();
	DrawMaze();
}

Render();