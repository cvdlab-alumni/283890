/* Exercise 3 */

/* Definizione dei domini */
var domain1 = INTERVALS(1)(40);
var domain2 = DOMAIN([[0,1],[0,1]])([60,60]);

/* Dati necessari per la superficie sinistra dello stabilizzatore verticale */
var cp3 = [[0,-0.1,0],[0,-0.1,1],[0,0,0],[0,0,0]];
var cc3 = CUBIC_HERMITE(S0)(cp3);
var curvacoda3 = MAP(cc3)(domain1);


var contpAP = [[0,-0.1,0],[-0.7,-0.1,0.3],[-0.7,-0.1,0.7],[-0.6,-0.1,1],[0,-0.1,1]];
var knots4ap = [0,0,0,1,2,3,3,3];
var c4ap = NUBS(S0)(2)(knots4ap)(contpAP);
var curve4AP = MAP(c4ap)(domain1);

var ap1 = BEZIER(S1)([c4ap,cc3]);
var alettoneP = MAP(ap1)(domain2); 

var alettonePS = T([1])([0.2])(alettoneP);


var cp3s = [[0,0.1,0],[0,0.1,1],[0,0,0],[0,0,0]];
var cc3s = CUBIC_HERMITE(S0)(cp3s);
var curvacoda3s = MAP(cc3s)(domain1);


var contpAPs = [[0,0.1,0],[-0.7,0.1,0.3],[-0.7,0.1,0.7],[-0.6,0.1,1],[0,0.1,1]];
var knots4aps = [0,0,0,1,2,3,3,3];
var c4aps = NUBS(S0)(2)(knots4aps)(contpAPs);
var curve4APs = MAP(c4aps)(domain1);


var apperim = BEZIER(S1)([c4aps,c4ap]);
var apperimsup = MAP(apperim)(domain2); 

var apperim1 = BEZIER(S1)([cc3s,cc3]);
var apperimsup1 = MAP(apperim1)(domain2);



/* Definisco la scritta del numero 4 sull'alettone */
var qcontrolpoints1 = [[-0.4,0,0.4],[-0.35,0,0.4],[0,0,0],[0,0,0]];
var qc1 = CUBIC_HERMITE(S0)(qcontrolpoints1);
var qcurve1 = MAP(qc1)(domain1);

var qcontrolpoints2 = [[0,0,0.7],[0.05,0,0.7],[0,0,0],[0,0,0]];
var qc2 = CUBIC_HERMITE(S0)(qcontrolpoints2);
var qcurve2 = MAP(qc2)(domain1);

var fasciaQ = BEZIER(S1)([qc1,qc2]);
var fasciaQuattro = MAP(fasciaQ)(domain2);

var verQ = SIMPLEX_GRID([[0.05],[0,0],[0,0.7]]);
var orQ = T([0,1,2])([-0.35,0,0.4])(SIMPLEX_GRID([[0.6],[0],[0.05]]));
var quattro = T([0,1,2])([-0.28,-0.11,0.2])(COLOR([0,0,0])(STRUCT([fasciaQuattro,verQ,orQ])));

var stabVert1 = STRUCT([alettoneP,alettonePS,apperimsup,apperimsup1,quattro]);

var cp4 = [[0,0.1,1],[0.6,0.1,0.75],[0,0,0],[0,0,0]];
var cc4 = CUBIC_HERMITE(S0)(cp4);
var curvacoda4 = MAP(cc4)(domain1);

var cp5 = [[0,0.1,0.3],[0.6,0.1,0.3],[0,0,0],[0,0,0]];
var cc5 = CUBIC_HERMITE(S0)(cp5);
var curvacoda5 = MAP(cc5)(domain1);

var aletf = BEZIER(S1)([cc5,cc4]);
var aletfsup = MAP(aletf)(domain2);

var aletfsupdx = T([1])([-0.2])(aletfsup);

var cp4d = [[0,-0.1,1],[0.6,-0.1,0.75],[0,0,0],[0,0,0]];
var cc4d = CUBIC_HERMITE(S0)(cp4d);
var curvacoda4d = MAP(cc4d)(domain1);

var cp5d = [[0,-0.1,0.3],[0.6,-0.1,0.3],[0,0,0],[0,0,0]];
var cc5d = CUBIC_HERMITE(S0)(cp5d);
var curvacoda5d = MAP(cc5d)(domain1);

var aletft = BEZIER(S1)([cc4d,cc4]);
var aletfsupt = MAP(aletft)(domain2);

var aletfb = BEZIER(S1)([cc5d,cc5]);
var aletfsupb = MAP(aletfb)(domain2);

var cp6d = [[0.6,-0.1,0.3],[0.6,-0.1,0.75],[0,0,0],[0,0,0]];
var cc6d = CUBIC_HERMITE(S0)(cp6d);
var curvacoda4d = MAP(cc6d)(domain1);

var cp6s = [[0.6,0.1,0.3],[0.6,0.1,0.75],[0,0,0],[0,0,0]];
var cc6s = CUBIC_HERMITE(S0)(cp6s);
var curvacoda4s = MAP(cc6s)(domain1);

var aletfv = BEZIER(S1)([cc6d,cc6s]);
var aletfsupv = MAP(aletfv)(domain2);

var stabVert2 = STRUCT([aletfsup,aletfsupdx,aletfsupb,aletfsupt,aletfsupv]);



/* Dati necessari alla definizione degli stabilizzatori orizzontali */
var contp1 = [[0.6,-0.1,0.35],[0.6,-0.8,0.35],[0,0,0],[0,0,0]];
var ccp1 = CUBIC_HERMITE(S0)(contp1);
var curveOb = MAP(ccp1)(domain1);

var contpO = [[0.6,-0.8,0.35],[0,-0.8,0.35],[-0.5,-0.8,0.35],[-0.5,-0.2,0.35],[0,-0.1,0.35],[0.6,-0.1,0.35]];
var knotsO = [0,0,0,1,2,3,4,4,4];
var cO = NUBS(S0)(2)(knotsO)(contpO);
var curveO = MAP(cO)(domain1);

var aletLat1 = BEZIER(S1)([ccp1,cO]);
var aletLat1sup = MAP(aletLat1)(domain2);

var contp2 = [[0.6,-0.1,0.3],[0.6,-0.8,0.3],[0,0,0],[0,0,0]];
var ccp2 = CUBIC_HERMITE(S0)(contp2);
var curveOb2 = MAP(ccp2)(domain1);

var contp3 = [[0.6,-0.8,0.3],[0,-0.8,0.3],[-0.5,-0.8,0.3],[-0.5,-0.2,0.3],[0,-0.1,0.3],[0.6,-0.1,0.3]];
var knots3 = [0,0,0,1,2,3,4,4,4];
var c3 = NUBS(S0)(2)(knots3)(contp3);
var curve3 = MAP(c3)(domain1);

var aletLat2 = BEZIER(S1)([ccp2,c3]);
var aletLat1inf = MAP(aletLat2)(domain2);

var bordoAL1 = BEZIER(S1)([cO,c3]);
var bordoAL1sur = MAP(bordoAL1)(domain2);

var bordoAL2 = BEZIER(S1)([ccp1,ccp2]);
var bordoAL2sur = MAP(bordoAL2)(domain2);

var aletLatDx = STRUCT([aletLat1sup,aletLat1inf,bordoAL1sur,bordoAL2sur]);

var aletLatSx = T([2])([0.65])(R([1,2])([PI])(aletLatDx));

var stabOriz = STRUCT([aletLatDx,aletLatSx]);

/* Unisco in un unico elemento gli stabilizzatori*/
var stabilizzatori = STRUCT([stabVert2,stabVert1,stabOriz]);

DRAW(stabilizzatori);