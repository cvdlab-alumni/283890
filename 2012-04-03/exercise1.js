var border1 = POLYLINE([[1,2],[0,2],[0,0],[39,0],[39,1],[36,1],[36,4],[52,4],[52,6],[51,6]]);
var border2 = POLYLINE([[8,1],[1,1],[1,22],[9,22],[9,17]]);
var border3 = POLYLINE([[9,17],[39,17],[39,16]]);
var border4 = POLYLINE([[37.75,16],[51,16],[51,5],[41.25,5]]);
var pool1 = POLYLINE([[8,1],[21,1],[21,10],[1,10]]); // tracciati solo le linee rilevanti
var pool2 = POLYLINE([[47,16],[47,5]]); // tracciate solo le linee rilevanti
var wall1 = POLYLINE([[6.5,15],[26.5,15]]);
var wall2 = POLYLINE([[7,22],[7,20.75],[5,20.75],[9,20.75]]);
var wall3 = POLYLINE([[5,22],[5,17],[1,17],[9,17]]);
var wall4 = POLYLINE([[25,7.25],[34,7.25]]);
var wall5 = POLYLINE([[31,7.25],[31,13.75],[32,13.75],[32,7.25],[31,7.25]]);
var wall6 = POLYLINE([[30,13.75],[40,13.75]]);
var wall7 = POLYLINE([[37.25,11.5],[42.5,11.5]]);
var wall8 = POLYLINE([[30,5],[41.25,5]]);
var wall9 = POLYLINE([[44.75,7],[44.75,14]]);

var benches = POLYLINE([[6.75,14],[22,14],[22,14.75],[6.75,14.75],[6.75,14]]);
var segments = POLYLINE([[8.95,14],[8.95,14.75],[11.15,14.75],[11.15,14],[13.35,14],[13.35,14.75],[15.55,14.75],
	[15.55,14],[17.75,14],[17.75,14.75],[19.95,14.75],[19.95,14]]);
var stairs = POLYLINE([[36.375,1],[36.375,4],[36.75,4],[36.75,1],[37.125,1],[37.125,4],[37.5,4],[37.5,1],[37.875,1],
	[37.875,4],[38.25,4],[38.25,1],[38.625,1],[38.625,4],[39,4],[39,1]]);

var pillar1 = POLYLINE([[25.9,6.9],[26.1,6.9],[26.1,7.1],[25.9,7.1],[25.9,6.9]]);
var pillar2 = POLYLINE([[25.9,13.9],[26.1,13.9],[26.1,14.1],[25.9,14.1],[25.9,13.9]]);
var pillar3 = POLYLINE([[32.15,6.9],[32.35,6.9],[32.35,7.1],[32.15,7.1],[32.15,6.9]]);
var pillar4 = POLYLINE([[32.15,13.9],[32.35,13.9],[32.35,14.1],[32.15,14.1],[32.15,13.9]]);
var pillar5 = POLYLINE([[38.65,6.9],[38.85,6.9],[38.85,7.1],[38.65,7.1],[38.65,6.9]]);
var pillar6 = POLYLINE([[38.65,13.9],[38.85,13.9],[38.85,14.1],[38.65,14.1],[38.65,13.9]]);
var pillar7 = POLYLINE([[44.9,6.9],[45.1,6.9],[45.1,7.1],[44.9,7.1],[44.9,6.9]]);
var pillar8 = POLYLINE([[44.9,13.9],[45.1,13.9],[45.1,14.1],[44.9,14.1],[44.9,13.9]]);
var pillars = STRUCT([pillar1,pillar2,pillar3,pillar4,pillar5,pillar6,pillar7,pillar8]);
var darkParts = COLOR([0,0,0])(STRUCT([border2,border4,wall1,wall2,wall4,wall5,wall6,wall7,wall9,pillars]));

var plain = STRUCT([border1,border3,pool1,pool2,wall3,wall8,benches,segments,stairs,darkParts]);
DRAW(plain);