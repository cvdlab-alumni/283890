
var pista1 = T([0,1])([-5,-10])(SIMPLEX_GRID([[0,5],[0,25]]));
var pista2 = T([0,1])([-10,15])(SIMPLEX_GRID([[0,10],[0,10]]));
var halfpista = COLOR([0.8,0.8,0.8,1])(STRUCT([pista1,pista2]));
var grass1 = T([0,1])([-15,-15])(SIMPLEX_GRID([[15],[5]]));
var grass2 = T([0,1])([-10,-10])(SIMPLEX_GRID([[5],[25]]));
var grass3 = T([0,1])([-15,-10])(SIMPLEX_GRID([[5],[40]]));
var grass4 = T([0,1])([-10,25])(SIMPLEX_GRID([[10],[5]]));
var halfgrass = COLOR([0.14,0.56,0.14,1])(STRUCT([grass1,grass2,grass3,grass4]));
var halfairstrip = STRUCT([halfpista,halfgrass]);
var airstrip = STRUCT([halfairstrip,S([0])([-1])(halfairstrip)]);
DRAW(airstrip);


var rgb = function (colors) {
	return colors.map(function (item, index) {
		return item/255;
	} )
}