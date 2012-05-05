/* Exercise 1 */

/* Definizione dei domini */
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]); 

var p0 = [[-1.4,0,0],[-0.35,0.1,0],[-0.35,-0.1,0],[-1.4,0,0]];
var p01 = [[-1.2,0,0],[0,0.1,0],[0,-0.1,0],[-1.2,0,0]];
var p1 = p01.map(function(p) {return [p[0]-0.3,p[1],p[2]+0.41]});
var p02 = [[-1.2,0,0],[0,0.1,0],[0,-0.1,0],[-1.2,0,0]];
var p2 = p02.map(function(p) {return [p[0]-0.3,p[1],p[2]+1]});
var p03 = [[-1,0,0],[0,0.1,0],[0,-0.1,0],[-1,0,0]];
var p3 = p03.map(function(p) {return [p[0]-0.3,p[1],p[2]+2.82]});
var p04 = [[-0.8,0,0],[0,0.1,0],[0,-0.1,0],[-0.8,0,0]];
var p4 = p04.map(function(p) {return [p[0]-0.3,p[1],p[2]+4.23]});
var p05 = [[-0.6,0,0],[0,0.1,0],[0,-0.1,0],[-0.6,0,0]];
var p5 = p05.map(function(p) {return [p[0]-0.3,p[1],p[2]+5.64]});


var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);

/* Viene definita la parte non ricurva dell'ala */
var wing1 = BEZIER(S1)([c1,c2,c3,c4,c5]);
var dritta = MAP(wing1)(domain2);

/* Viene definita la parte non ricurva dell'ala */
var wing2 = BEZIER(S1)([c0,c1]);
var storta = MAP(wing2)(domain2);

/* Incluse le due parti in un unico oggetto e disegnate, con l'opportuna posizionamento */
var leftWing = T([0])([-0.6])(R([0,1])([PI])(R([1,2])([PI/2])(STRUCT([dritta,storta]))));
DRAW(leftWing);