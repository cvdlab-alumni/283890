/* Exercise 2 */

/* Definizione dei domini */
var domain1 = INTERVALS(1)(40);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

/* Curva verticale posteriore della fusoliera lato destro*/
var controlpoints1 = [[0,-0.20,1],[0,-0.2,0.7],[0,0,-1],[0,0,-1]];
var c1 = CUBIC_HERMITE(S0)(controlpoints1);
var curve1 = MAP(c1)(domain1);

/* Curva superiore della fusoliera lato destro */
var controlpoints2 = [[0,-0.20,1],[5,-0.40,1],[1,-0.04,0],[1,-0.04,0]];
var c2 = CUBIC_HERMITE(S0)(controlpoints2);
var curve2 = MAP(c2)(domain1);

/* Curva inferiore della fusoliera lato destro */
var controlpoints3 = [[0,-0.20,0.7],[5,-0.40,0.2],[1,-0.04,-0.01],[1,-0.04,-0.08]];
var c3 = CUBIC_HERMITE(S0)(controlpoints3);
var curve3 = MAP(c3)(domain1);

/* Curva frontale della fusoliera lato destro */
var controlpoints4 = [[5,-0.40,1],[7,-0.52,0.7],[6.1,-0.48,0.1],[5,-0.40,0.2]];
var knots4 = [0,0,0,1,2,2,2];
var c4 = NUBS(S0)(2)(knots4)(controlpoints4);
var curve4 = MAP(c4)(domain1);

/* Lato destro della fusoliera */
var fascia1 = BEZIER(S1)([c1,c4]);
var latoDX = MAP(fascia1)(domain2); 

/* Capovolgendolo così si manifesta l'errore dell'immagine nera, adoto quindi un altro approccio
var latoSX= S([2])([-1])(latoDX); */

/* Curva verticale posteriore della fusoliera lato sinistro*/
var controlpoints1sx = [[0,0.20,1],[0,0.2,0.7],[0,0,-1],[0,0,-1]];
var c1sx = CUBIC_HERMITE(S0)(controlpoints1sx);
var curve1sx = MAP(c1sx)(domain1);

/* Curva superiore della fusoliera lato sinistro */
var controlpoints2sx = [[0,0.20,1],[5,0.40,1],[1,0.04,0],[1,0.04,0]];
var c2sx = CUBIC_HERMITE(S0)(controlpoints2sx);
var curve2sx = MAP(c2sx)(domain1);

/* Curva inferiore della fusoliera lato sinistro */
var controlpoints3sx = [[0,0.20,0.7],[5,0.40,0.2],[1,0.04,-0.01],[1,0.04,-0.08]];
var c3sx = CUBIC_HERMITE(S0)(controlpoints3sx);
var curve3sx = MAP(c3sx)(domain1);

/* Curva frontale della fusoliera lato sinistro */
var controlpoints4sx = [[5,0.40,1],[7,0.52,0.7],[6.1,0.48,0.1],[5,0.40,0.2]];
var knots4sx = [0,0,0,1,2,2,2];
var c4sx = NUBS(S0)(2)(knots4sx)(controlpoints4sx);
var curve4sx = MAP(c4sx)(domain1);

/* Lato sinistro della fusoliera */
var fascia2 = BEZIER(S1)([c1sx,c4sx]);
var latoSX = MAP(fascia2)(domain2); 

/* Superficie anteriore della fusoliera */
var punta = BEZIER(S1)([c4,c4sx]);
var surf = MAP(punta)(domain2);

/* Superficie posteriore della fusoliera */
var coda = BEZIER(S1)([c1,c1sx]);
var surfc = MAP(coda)(domain2);

/* Superficie inferiore della fusoliera */
var b = BEZIER(S1)([c3,c3sx]);
var surfb = MAP(b)(domain2);

/* Superficie superiore della fusoliera */
var t = BEZIER(S1)([c2,c2sx]);
var surft = MAP(t)(domain2);

/* Fusoliera */
var fusoliera = STRUCT([latoSX,latoDX,surft, surfb, surfc, surf]);

/* Curve per il disegno dell'elica */
var elica1points = [[0.05,0.1,0],[0.05,0.9,0],[0,1,0],[0,1,0]];
var elicac1 = (CUBIC_HERMITE(S0)(elica1points));
var elicacurve1 = MAP(elicac1)(domain1);

var elica2points = [[0.1,0.1,0],[0.05,0.9,0],[0,0.9,0],[0,0.9,0.9]];
var elicac2 = CUBIC_HERMITE(S0)(elica2points);
var elicacurve2 = MAP(elicac2)(domain1);

var e12dx = BEZIER(S1)([elicac1,elicac2]);
var elica1 = MAP(e12dx)(domain2);
var elica2 = R([1,2])([PI])(elica1);
var eliche = COLOR([0.54,0.35,0.17])(STRUCT([elica1,elica2]));

/* Curve per il disegno dell'anello che collega le due eliche */
var con1 = [[0,0,0.01],[0,-0.01,0.01],[0,-0.01,-0.01],[0,0.01,-0.01],[0,0.01,0.01],[0,0,0.01]];
var knots1 = [0,0,0,1,2,3,4,4,4];
var c1 = NUBS(S0)(2)(knots1)(con1);
var curve1 = MAP(c1)(domain1);

var con2 = [[0.1,0,0.01],[0.1,-0.01,0.01],[0.1,-0.01,-0.01],[0.1,0.01,-0.01],[0.1,0.01,0.01],[0.1,0,0.01]];
var knots2 = [0,0,0,1,2,3,4,4,4];
var c2 = NUBS(S0)(2)(knots2)(con2);
var curve2 = MAP(c2)(domain1);

var con3 = [[0,0,0.1],[0,-0.1,0.1],[0,-0.1,-0.1],[0,0.1,-0.1],[0,0.1,0.1],[0,0,0.1]];
var knots3 = [0,0,0,1,2,3,4,4,4];
var c3 = NUBS(S0)(2)(knots3)(con3);
var curve3 = MAP(c3)(domain1);

var con4 = [[0.1,0,0.1],[0.1,-0.1,0.1],[0.1,-0.1,-0.1],[0.1,0.1,-0.1],[0.1,0.1,0.1],[0.1,0,0.1]];
var knots4 = [0,0,0,1,2,3,4,4,4];
var c4 = NUBS(S0)(2)(knots4)(con4);
var curve4 = MAP(c4)(domain1);


var s12 = BEZIER(S1)([c1,c2]);
var surf1 = MAP(s12)(domain2);

var s34 = BEZIER(S1)([c3,c4]);
var surf2 = COLOR([0.54,0.35,0.17])(MAP(s34)(domain2));

var s13 = BEZIER(S1)([c1,c3]);
var surf3 = MAP(s13)(domain2);

var s24 = BEZIER(S1)([c2,c4]);
var surf4 = MAP(s24)(domain2);

/* Eliche ed anello */
var elicacompl = T([0,1,2])([6.53,0,0.9])(STRUCT([surf1,surf4,surf3,surf2,eliche]));


/* Disegno della parte frontale sporgente */

var controlpoints1 = [[0.69,-0.2,0.4],[0.69,0.2,0.4],[0,0,0.5],[0,0,-0.5]];
var c1 = CUBIC_HERMITE(S0)(controlpoints1);
var curve1 = MAP(c1)(domain1);


var controlpoints2 = [[0.69,-0.15,0.08],[0.69,0.15,0.08],[0,1,0],[0,1,0]];
var c2 = CUBIC_HERMITE(S0)(controlpoints2);
var curve2 = MAP(c2)(domain1);

/* Superficie frontale della parte sporgente */
var frontpart1 = BEZIER(S1)([c1,c2]);
var frontsurface1 = MAP(frontpart1)(domain2); 


var controlpoints3 = [[0.3,-0.2,0.4],[0.3,0.2,0.4],[0,0,0.5],[0,0,-0.5]];
var c3 = CUBIC_HERMITE(S0)(controlpoints3);
var curve3 = MAP(c3)(domain1);


var controlpoints4 = [[0.3,-0.15,0.2],[0.3,0.15,0.2],[0,1,0],[0,1,0]];
var c4 = CUBIC_HERMITE(S0)(controlpoints4);
var curve4 = MAP(c4)(domain1);

/* Superficie superiore della parte sporgente */
var supfront = BEZIER(S1)([c1,c3]);
var supfrontsur = MAP(supfront)(domain2); 


var controlpoints5 = [[0.69,-0.15,0.08],[0.69,-0.2,0.4],[0,0,0],[0,0,0]];
var c5 = CUBIC_HERMITE(S0)(controlpoints5);
var curve5 = MAP(c5)(domain1);

var controlpoints6 = [[0.3,-0.15,0.2],[0.3,-0.2,0.4],[0,0,0],[0,0,0]];
var c6 = CUBIC_HERMITE(S0)(controlpoints6);
var curve6 = MAP(c6)(domain1);

/* Superfice laterale destra della parte sporgente */
var lato1 = BEZIER(S1)([c5,c6]);
var lato1surf = MAP(lato1)(domain2); 

var controlpoints7 = [[0.69,0.15,0.08],[0.69,0.2,0.4],[0,0,0],[0,0,0]];
var c7 = CUBIC_HERMITE(S0)(controlpoints7);
var curve7 = MAP(c7)(domain1);

var controlpoints8 = [[0.3,0.15,0.2],[0.3,0.2,0.4],[0,0,0],[0,0,0]];
var c8 = CUBIC_HERMITE(S0)(controlpoints8);
var curve8 = MAP(c8)(domain1);

/* Superfice laterale sinistra della parte sporgente */
var lato2 = BEZIER(S1)([c7,c8]);
var lato2surf = MAP(lato2)(domain2); 

/* Necessario per chiudere i lati della parte frontale sporgente superiore interna */
var controlpoints9 = [[0.05,-0.15,0.3],[0.05,0.15,0.3],[0,0,0],[0,0,0]];
var c9 = CUBIC_HERMITE(S0)(controlpoints9);
var curve9 = MAP(c9)(domain1);

/* Necessario per chiudere i lati della parte frontale sporgente interna */
var controlpoints10 = [[0.05,-0.15,0.29],[0.05,-0.15,0.3],[0,0,0],[0,0,0]];
var c10 = CUBIC_HERMITE(S0)(controlpoints10);
var curve10 = MAP(c10)(domain1);

var controlpoints11 = [[0.05,0.15,0.29],[0.05,0.15,0.3],[0,0,0],[0,0,0]];
var c11 = CUBIC_HERMITE(S0)(controlpoints11);
var curve11 = MAP(c11)(domain1);

/* Superfici che compongono la porzione posteriore della parte sporgente */
var latosup = BEZIER(S1)([c3,c9]);
var latosupsur = MAP(latosup)(domain2);

var latosupdx = BEZIER(S1)([c6,c10]);
var latosupsurdx = MAP(latosupdx)(domain2);

var latosupsx = BEZIER(S1)([c8,c11]);
var latosupsursx = MAP(latosupsx)(domain2);

var latosupchiudi = BEZIER(S1)([c10,c11]);
var latosupsurclosure = MAP(latosupchiudi)(domain2);

/* Unisco le varie porzioni che compongono la parte sporgente */
var corno = STRUCT([lato2surf,lato1surf,supfrontsur, frontsurface1,
	latosupsur, latosupsurclosure,latosupsursx,latosupsurdx]);

/* Posizionamento della parte sporgente */
var cornosp = T([0,1,2])([5.9,0,0.54])(corno);

/* Includo la fusoliera, la parte sporgente e l'elica completa di anello in un unico oggetto */
var fusolieraCompleta = STRUCT([fusoliera,cornosp,elicacompl])
DRAW(fusolieraCompleta);



var rcp1 = [[1,0,0],[0,1,0],[0,2,0],[-2,0,0]];
var rc1 = CUBIC_HERMITE(S0)(rcp1);
var rcurve1 = MAP(rc1)(domain1);

var rcp2 = [[2,0,0],[0,2,0],[0,3,0],[-3,0,0]];
var rc2 = CUBIC_HERMITE(S0)(rcp2);
var rcurve2 = MAP(rc2)(domain1);


var s12b = BEZIER(S1)([c1,c2]);
var surface12b = MAP(s12b)(domain2); 

var s12h = CUBIC_HERMITE(S1)([c1,c2,[0,0,3],[0,0,-3]]); 
var surface12h = MAP(s12h)(domain2); 

var tube = STRUCT([surface12h, surface12b]);
DRAW(tube);

