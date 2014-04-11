
var blockSize = 25;

var cnvs = document.getElementById("game");

var width = cnvs.width;
var height = cnvs.height;

//Testing
/*
var hrLines = new Array(height/blockSize + 1);
for(var i = 0; i < hrLines.length; ++i) {
	hrLines[i] = new Array(width/blockSize);
	for(var j = 0; j < hrLines[i].length; ++j)
		hrLines[i][j] = (Math.random() < 0.5)?true:false;
}
var vrLines = new Array(height/blockSize); // nu e + 1 aici?
for(var i = 0; i < vrLines.length; ++i) {
	vrLines[i] = new Array(width/blockSize + 1);
	for(var j = 0; j < vrLines[i].length; ++j) {
		vrLines[i][j] = (Math.random() < 0.5)?true:false;
	}
}
*/
//Asta e ce am eu nevoie. Acum le fac random, dar de preferat ar fi sa aiba o logica in spate.
//Ce e important pentru mine e vrLines, hrLines si player. Iti dai seama ce fac.

//end Testing

var fr = [];
for (var i = 0; i < blockSize; ++i)
	fr[i] = [];

function inside(node) {
	if (node.x >= 0 && node.x < blockSize && node.y >= 0 && node.y <= blockSize)
		return true;
	return false;
}

// la inceput presupun ca toate sunt puse

var hrLines = new Array(height/blockSize + 1);
for(var i = 0; i < hrLines.length; ++i) {
	hrLines[i] = new Array(width/blockSize);
	for(var j = 0; j < hrLines[i].length; ++j)
		hrLines[i][j] = true;
}
var vrLines = new Array(height/blockSize); // nu e + 1 aici?
for(var i = 0; i < vrLines.length; ++i) {
	vrLines[i] = new Array(width/blockSize + 1);
	for(var j = 0; j < vrLines[i].length; ++j)
		vrLines[i][j] = true;//fr[i][j] && fr[i][j] ? false : (Math.random() <= 0.4 ? false : true);
}

function dfs(node) {
	var where = Math.random();
	
	if (!inside(node)) // ai ajuns la un capat, deci ti-ai facut drumul
		return ;
	
	if (where <= 0.25) {
		node.x++;
		hrLines[node.y][node.x] = true;
	}
	else
	if (where <= 0.5) {
		node.x--;
		hrLines[node.y][node.x] = true;
	}
	else
	if (where <= 0.75) {
		node.y++;
		vrLines[node.y][node.x] = true;
	}
	else {
		node.y--;
		hrLines[node.y][node.x] = true; // niciuna din astea nu e buna, dar intelegi tu ce vreau sa zic
		// incerc sa scot barele dintre astea 2 care sunt consecutive
		// incearca sa le scrii tu, eu nu inteleg cum iti faci coordonatele sincer
	}
	
	dfs(node);
}

var init = {x: 12, y: 12}; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
dfs(init);

var player = {x:0, y:0}; // aici incearca sa plecam din mijloc, adica de la 12 12
// oricum cred ca nu e buna functia DrawPlayer

// o sa ma uit mai tarziu, acum nu prea pot.
// incearca tu daca iti da seama sa vezi bugurile alea.. daca nu le fac eu cat de curand

// multa bafta :)
