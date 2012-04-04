var basement1 = SIMPLEX_GRID([[1],[2],[1]]);
var basement2 = SIMPLEX_GRID([[39],[1],[1]]);
var basement3 = SIMPLEX_GRID([[-1,20],[-1,9],[0.75]]);
var basement4 = SIMPLEX_GRID([[-21,15],[-1,3],[1]]);
var basement5 = SIMPLEX_GRID([[-21,26],[-4,12],[1]]);
var basement6 = SIMPLEX_GRID([[-47,4],[-4,1],[1]]);
var basement7 = SIMPLEX_GRID([[-51,1],[-4,2],[1]]);
var basement8 = SIMPLEX_GRID([[-47,4],[-5,11],[0.75]]);
var basement9 = SIMPLEX_GRID([[-1,20],[-10,6],[1]]);
var basement10 = SIMPLEX_GRID([[-1,38],[-16,1],[1]]);
var basement11 = SIMPLEX_GRID([[-1,8],[-17,5],[1]]);


var rialzoBigPool = SIMPLEX_GRID([[-1,0.25],[-1,9],[-0.75,0.25]]);
var rialzoSmallPool1 = SIMPLEX_GRID([[-47,4],[-5,0.25],[-0.75,0.25]]);
var rialzoSmallPool2 = SIMPLEX_GRID([[-50.75,0.25],[-5,11],[-0.75,0.25]]);
var rialzoSmallPool3 = SIMPLEX_GRID([[-47,3.75],[-15.75,0.25],[-0.75,0.25]]);
var rialzoSmallPool = STRUCT([rialzoSmallPool1,rialzoSmallPool2,rialzoSmallPool3]);


var step0 = SIMPLEX_GRID([[3],[3],[0]]);
var step1 = SIMPLEX_GRID([[2.625],[3],[0.125]]);
var step2 = SIMPLEX_GRID([[2.25],[3],[0.25]]);
var step3 = SIMPLEX_GRID([[1.875],[3],[0.375]]);
var step4 = SIMPLEX_GRID([[1.5],[3],[0.5]]);
var step5 = SIMPLEX_GRID([[1.125],[3],[0.625]]);
var step6 = SIMPLEX_GRID([[0.75],[3],[0.75]]);
var step7 = SIMPLEX_GRID([[0.375],[3],[0.875]]);
var stairs = T([0,1])([36,1])(STRUCT([step0,step1,step2,step3,step4,step5,step6,step7]));


var bigPool = COLOR([0.53,0.81,0.98])(SIMPLEX_GRID([[-1.25,19.75],[-1,9],[-0.75,0.25]]));
var smallPool = COLOR([0.53,0.81,0.98])(SIMPLEX_GRID([[-47,3.75],[-5.25,10.5],[-0.75,0.25]]));


var basement = COLOR([0.99,0.96,0.9])(STRUCT([basement1,basement2,basement3,basement4,basement5,basement6,basement7,
	basement8,basement9,basement10,basement11,rialzoBigPool,rialzoSmallPool,stairs]));


var borderWall1 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-1,7],[-0.75,0.25],[-1,3]]));
var borderWall2 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-1,0.25],[-1,9],[-1,3]]));
var borderWall3 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-1,0.25],[-10,12],[-1,3]]));
var borderWall4 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-1.25,7.75],[-21.75,0.25],[-1,3]]));
var borderWall5 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-8.75,0.25],[-17,4.75],[-1,3]]));
var borderWall6 = COLOR([0.44,0.44,0.44])(SIMPLEX_GRID([[-37.75,13.25],[-15.75,0.25],[-1,3]]));
var borderWall7 = COLOR([0.44,0.44,0.44])(SIMPLEX_GRID([[-50.75,0.25],[-5,10.75],[-1,3]]));
var borderWall8 = COLOR([0.44,0.44,0.44])(SIMPLEX_GRID([[-41.25,9.5],[-5,0.25],[-1,3]]));
var borderWalls = STRUCT([borderWall1,borderWall2,borderWall3,borderWall4,borderWall5,borderWall6,borderWall7,borderWall8]);


var wall1 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-6.25,20.5],[-15,0.25],[-1,3]]))
var wall2 = COLOR([0.23,0.23,0.23])(SIMPLEX_GRID([[-25,9],[-7.25,0.25],[-1,3]]));
var wall3 = COLOR([0.93,0.47,0.26])(SIMPLEX_GRID([[-37.25,5.25],[-11.5,0.25],[-1,3]]));
var wall4 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-5,0.75,-0.7,2.3],[-20.5,0.25],[-1,3]]));
var door4 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-5,-0.75,0.7],[-20.5,0.25],[-1,-2,1]]));
var wall5 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-6.88,0.25],[-20.75,-0.70,0.3],[-1,3]]));
var door5 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-6.88,0.25],[-20.75,0.70],[-1,-2,1]]));
var wall6 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-4.75,0.25],[-17.1,1.2,-0.7,2.85],[-1,3]]));
var door6 = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-4.75,0.25],[-17.1,-1.2,0.7],[-1,-2,1]]));

var walls = STRUCT([wall1,wall2,wall3,wall4,wall5,wall6,door4,door5,door6]);

var glassGrid1 = COLOR([0.2,0.2,0.2])(SIMPLEX_GRID([[0.1],[0.1,-2.8,0.1],[-1,3]]));
var glassGrid2 = COLOR([0.2,0.2,0.2])(SIMPLEX_GRID([[0.1],[-0.1,2.8],[-1,0.1,-2.8,0.1]]));
var glassPanel = COLOR([0.6,0.96,1])(SIMPLEX_GRID([[0.1],[-0.1,2.8],[-1,-0.1,2.8]]));
var glassFrame1 = STRUCT([glassGrid1,glassGrid2,glassPanel]);
var glassFrame2 = T([1])([3])(glassFrame1);
var glassWall1 = T([0,1])([31,7.5])(STRUCT([glassFrame1,glassFrame2]));
var glassWall2 = T([0])([1])(glassWall1);

var mediumGlassGrid1 = COLOR([0.2,0.2,0.2])(SIMPLEX_GRID([[0.1,-1.675,0.1],[0.1],[-1,3]]));
var mediumGlassGrid2 = COLOR([0.2,0.2,0.2])(SIMPLEX_GRID([[-0.1,1.675],[0.1],[-1,0.1,-2.8,0.1]]));
var mediumGlassPanel = COLOR([0.75,0.94,1])(SIMPLEX_GRID([[-0.1,1.675],[0.1],[-1,-0.1,2.8]]));
var mediumGlassFrame1 = STRUCT([mediumGlassGrid1,mediumGlassGrid2,mediumGlassPanel]);
var mediumGlassFrame2 = T([0])([1.875])(mediumGlassFrame1); 
var mediumGlassFrame3 = T([0])([1.875])(mediumGlassFrame2);
var mediumGlassFrame4 = T([0])([1.875])(mediumGlassFrame3);
var mediumGlassWall = T([0,1])([1.25,17])(STRUCT([mediumGlassFrame1,mediumGlassFrame2,mediumGlassFrame3,mediumGlassFrame4]));


var smallGlassGrid1 = COLOR([0.2,0.2,0.2])(SIMPLEX_GRID([[0.1,-0.8,0.1],[0.1],[-1,3]]));
var smallGlassGrid2 = COLOR([0.2,0.2,0.2])(SIMPLEX_GRID([[-0.1,0.8],[0.1],[-1,0.1,-2.8,0.1]]));
var smallGlassPanel = COLOR([0.75,0.94,1])(SIMPLEX_GRID([[-0.1,0.8],[0.1],[-1,-0.1,2.8]]));
var smallGlassFrame1 = STRUCT([smallGlassGrid1,smallGlassGrid2,smallGlassPanel]);
var smallGlassFrame2 = T([0])([1])(smallGlassFrame1);
var smallGlassFrame3 = T([0])([2])(STRUCT([smallGlassFrame1,smallGlassFrame2]));
var smallGlassFrame4 = T([0])([4])(STRUCT([smallGlassFrame1,smallGlassFrame2,smallGlassFrame3]));
var smallGlassFrame5 = T([0])([8])(STRUCT([smallGlassFrame1,smallGlassFrame2]));
var smallGlassWall = T([0,1])([30,13.5])(STRUCT([smallGlassFrame1,smallGlassFrame2,smallGlassFrame3,
	smallGlassFrame4,smallGlassFrame5]));


var smallestGlassGrid1 = COLOR([0.2,0.2,0.2])(SIMPLEX_GRID([[0.1],[0.1,-0.8,0.1],[-1,3]]));
var smallestGlassGrid2 = COLOR([0.2,0.2,0.2])(SIMPLEX_GRID([[0.1],[-0.1,0.8],[-1,0.1,-2.8,0.1]]));
var smallestGlassPanel = COLOR([0.75,0.94,1])(SIMPLEX_GRID([[0.1],[-0.1,0.8],[-1,-0.1,2.8]]));
var smallestGlassFrame1 = STRUCT([smallestGlassGrid1,smallestGlassGrid2,smallestGlassPanel]);
var smallestGlassFrame2 = T([1])([1])(smallestGlassFrame1);
var smallestGlassFrame3 = T([1])([2])(STRUCT([smallestGlassFrame1,smallestGlassFrame2]));
var smallestGlassFrame4 = T([1])([2])(smallestGlassFrame1);
var smallestGlassFrame5 = (STRUCT([smallestGlassFrame1,smallestGlassFrame2,smallestGlassFrame4])); 
var smallestGlassFrame6 = T([1])([3])(STRUCT([smallestGlassFrame1,smallestGlassFrame2,smallestGlassFrame3]));

var smallestGlassWall = T([0,1])([44.7,7])(STRUCT([smallestGlassFrame5,smallestGlassFrame6]));

var glassWalls = STRUCT([glassWall1,glassWall2,mediumGlassWall,smallGlassWall,smallestGlassWall]);


var pillars = COLOR([0.74,0.74,0.74])(SIMPLEX_GRID([[-25.9,0.2,-6.05,0.2,-6.3,0.2,-6.05,0.2],
	[-6.9,0.2,-6.8,0.2],[-1,3]]));


var benchesLegs = SIMPLEX_GRID([[-6.75,0.1,-2,0.1,0.1,-2,0.1,0.1,-2,0.1,0.1,-2,0.1,0.1,-2,0.1,0.1,-2,0.1,0.1,-2,0.1],
	[-14,0.75],[-1,0.4]]);
var benchesSeats = SIMPLEX_GRID([[-6.75,2.2,2.2,2.2,2.2,2.2,2.2,2.2],
	[-14,0.75],[-1.4,0.1]]);
var benches = COLOR([0.99,0.96,0.9])(STRUCT([benchesLegs,benchesSeats]));

var pedestal = COLOR([0.99,0.96,0.9])(SIMPLEX_GRID([[-48,1],[-14.5,1],[-1,0.6]]));

var bigRoof1 = COLOR([0.98,0.98,0.98])(SIMPLEX_GRID([[-24,23],[-4,13],[-1,-3,0.2]]));
var bigRoof2 = COLOR([0.23,0.23,0.23])(SIMPLEX_GRID([[-24,23],[-4,13],[-1,-3.2,0.1]]));
var smallRoof1 = COLOR([0.98,0.98,0.98])(SIMPLEX_GRID([[10],[-13,10],[-1,-3,0.2]]));
var smallRoof2 = COLOR([0.23,0.23,0.23])(SIMPLEX_GRID([[10],[-13,10],[-1,-3.2,0.1]]));
var roofs = STRUCT([bigRoof1,bigRoof2,smallRoof1,smallRoof2]);

var building = STRUCT([basement, borderWalls, walls, glassWalls, pedestal, pillars, benches, roofs, bigPool, smallPool]);



var grid1 = SIMPLEX_GRID([[0.5],[-0.15, 0.04, -0.8, 0.04], [2]]);
var grid2 = SIMPLEX_GRID([[-0.03, 0.42],[-0.15, -0.04, 0.8, -0.04], [0.04, -0.45, 0.04, -0.45, 0.04, -0.45, 0.04]]);
var grid3 = SIMPLEX_GRID([[0.5],[-0.15, -0.04, 0.8, -0.04], [-1.96, 0.04,]]);
var backPanel = SIMPLEX_GRID([[0.03],[-0.15, -0.04, 0.8, -0.04], [2]]);
var woodenParts = COLOR([1,0.87,0.68])(STRUCT([grid1,grid2,grid3,backPanel]));
var rightPanel = SIMPLEX_GRID([[-0.45,0.05],[-0.15, -0.04, 0.395], [1]]);
var leftPanel = SIMPLEX_GRID([[-0.45,0.05],[-0.59, 0.395, -0.15], [1]]);
var panels = COLOR([0.55,0.93,0.93])(STRUCT([rightPanel,leftPanel]));
var handles = COLOR([0.48,0.48,0.48])(SIMPLEX_GRID([[-0.5,0.01],[-0.06,-0.45,0.05,-0.05,0.05],[-0.95,0.02]]));
var libreria = T([0,1,2])([32.25,10,1])(STRUCT([woodenParts,panels,handles]));

DRAW(building);
DRAW(libreria);
