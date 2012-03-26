var domain1 = DOMAIN([[1.5,5.5]])([4]);

var domain2 = DOMAIN([[1.5,5.5],[1,3]])([4,2]);

var domain3 = DOMAIN([[1.5,5.5],[1,3],[1,4]])([4,2,3]);

DRAW(domain1); COLOR([0,0,1])(domain1);
DRAW(domain2); COLOR([0,1,1])(domain2);
DRAW(domain3); COLOR([1,0,1])(domain3);


var drawCircle = function (r,n) {
	var circ = DOMAIN([[0,2*PI]])([n]);
	var mapping = function(p) {
		var u = p[0];
		return [r*SIN(u),r*COS(u)];
	}
	var mapped = MAP(mapping)(circ);
	DRAW(mapped);
}


var drawCilinder = function (r,h,n,m,color) {
	var piano = DOMAIN([[0,2*PI],[0,h]])([n,m]);
	var mapping = function(p) {
		var u = p[0];
		var v = p[1];
		return [r*SIN(u),r*COS(u),v];
	}
	var mapped = MAP(mapping)(piano);
	COLOR(color)(mapped);
	DRAW(mapped);
}


var drawSphere = function (r,n,color) {
	var domain = DOMAIN([[0,PI],[0,2*PI]])([n,2*n]);
	var mapping = function(p) {
		var u = p[0];
		var v = p[1];
		return [r*COS(u-(PI/2))*COS(v),r*COS(u-(PI/2))*SIN(v),r*SIN(u-(PI/2))];
	}
	var mapped = MAP(mapping)(domain);
	COLOR(color)(mapped);
	DRAW(mapped);
}
