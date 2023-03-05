var room = HBInit()

room.pluginSpec = {
  name: `hax/haxroomie-commands`,
  author: `hux`,
  version: `1.0.0`,
  dependencies: [],
  config: {
    webhookUrl: "",
    matchWebhookUrl: "",
    adminLoginPasswords: {},
  }
};

var adminLogin = room.getConfig().adminLoginPasswords;


var strongballClassic = `{"name":"Strongball Classic","width":420,"height":200,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75},"vertexes":[{"x":-370,"y":170,"cMask":["ball"]},{"x":-370,"y":64,"cMask":["ball"]},{"x":-370,"y":-64,"cMask":["ball"]},{"x":-370,"y":-170,"cMask":["ball"]},{"x":370,"y":170,"cMask":["ball"]},{"x":370,"y":64,"cMask":["ball"]},{"x":370,"y":-64,"cMask":["ball"]},{"x":370,"y":-170,"cMask":["ball"]},{"x":0,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":75,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-75,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-380,"y":-64,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":-44,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":44,"bCoef":0.1,"cMask":["ball"]},{"x":-380,"y":64,"bCoef":0.1,"cMask":["ball"]},{"x":380,"y":-64,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":-44,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":44,"bCoef":0.1,"cMask":["ball"]},{"x":380,"y":64,"bCoef":0.1,"cMask":["ball"]},{"x":-51,"y":244.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-65,"y":250.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-65,"y":258.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-54,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-54,"y":254.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-60,"y":256.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-45,"y":244.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-45,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-34,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-29,"y":246.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-27,"y":259.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-21,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-16,"y":258.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-17,"y":245.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-61,"y":173.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-72,"y":182.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-74,"y":192.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-62,"y":196.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-60,"y":187.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-67,"y":187.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-52,"y":173.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-52,"y":194.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-41,"y":193.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-35,"y":174.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-35,"y":184.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-31,"y":192.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-25,"y":192.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-22,"y":186.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-22,"y":174.75,"cMask":["ball"],"cGroup":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":20,"v1":21,"cMask":["ball"],"cGroup":["ball"]},{"v0":21,"v1":22,"cMask":["ball"],"cGroup":["ball"]},{"v0":22,"v1":23,"cMask":["ball"],"cGroup":["ball"]},{"v0":23,"v1":24,"cMask":["ball"],"cGroup":["ball"]},{"v0":24,"v1":24,"cMask":["ball"],"cGroup":["ball"]},{"v0":25,"v1":24,"cMask":["ball"],"cGroup":["ball"]},{"v0":26,"v1":27,"cMask":["ball"],"cGroup":["ball"]},{"v0":27,"v1":28,"cMask":["ball"],"cGroup":["ball"]},{"v0":29,"v1":30,"cMask":["ball"],"cGroup":["ball"]},{"v0":30,"v1":31,"cMask":["ball"],"cGroup":["ball"]},{"v0":31,"v1":32,"cMask":["ball"],"cGroup":["ball"]},{"v0":32,"v1":33,"cMask":["ball"],"cGroup":["ball"]},{"v0":34,"v1":35,"cMask":["ball"],"cGroup":["ball"]},{"v0":35,"v1":36,"cMask":["ball"],"cGroup":["ball"]},{"v0":36,"v1":37,"cMask":["ball"],"cGroup":["ball"]},{"v0":37,"v1":38,"cMask":["ball"],"cGroup":["ball"]},{"v0":38,"v1":39,"cMask":["ball"],"cGroup":["ball"]},{"v0":40,"v1":41,"cMask":["ball"],"cGroup":["ball"]},{"v0":41,"v1":42,"cMask":["ball"],"cGroup":["ball"]},{"v0":43,"v1":44,"cMask":["ball"],"cGroup":["ball"]},{"v0":44,"v1":45,"cMask":["ball"],"cGroup":["ball"]},{"v0":45,"v1":46,"cMask":["ball"],"cGroup":["ball"]},{"v0":46,"v1":47,"cMask":["ball"],"cGroup":["ball"]},{"v0":47,"v1":48,"cMask":["ball"],"cGroup":["ball"]}],"planes":[{"normal":[0,1],"dist":-170,"cMask":["ball"]},{"normal":[0,-1],"dist":-170,"cMask":["ball"]},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"goals":[{"p0":[-370,64],"p1":[-370,-64],"team":"red"},{"p0":[370,64],"p1":[370,-64],"team":"blue"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[-370,64],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-370,-64],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[370,64],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[370,-64],"radius":8,"invMass":0,"color":"CCCCFF"}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","spawnDistance":170}`
var strongballMedium = `{"name":"Strongball Medium","width":500,"height":250,"spawnDistance":250,"bg":{"type":"grass","width":450,"height":220,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-450,"y":220,"trait":"ballArea"},{"x":-450,"y":70,"trait":"ballArea"},{"x":-450,"y":-70,"trait":"ballArea"},{"x":-450,"y":-220,"trait":"ballArea"},{"x":450,"y":220,"trait":"ballArea"},{"x":450,"y":80,"trait":"ballArea"},{"x":450,"y":-80,"trait":"ballArea"},{"x":450,"y":-220,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-460,"y":-80,"trait":"goalNet"},{"x":-480,"y":-60,"trait":"goalNet","curve":0},{"x":-480,"y":60,"trait":"goalNet","curve":0},{"x":-460,"y":80,"trait":"goalNet"},{"x":460,"y":-80,"trait":"goalNet"},{"x":480,"y":-60,"trait":"goalNet"},{"x":480,"y":60,"trait":"goalNet"},{"x":460,"y":80,"trait":"goalNet"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","x":-450},{"v0":2,"v1":3,"trait":"ballArea","x":-450},{"v0":4,"v1":5,"trait":"ballArea","x":450},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet","curve":0},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet","x":480},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"}],"goals":[{"p0":[-450,-80],"p1":[-450,80],"team":"red"},{"p0":[450,80],"p1":[450,-80],"team":"blue"}],"discs":[{"pos":[-450,80],"trait":"goalPost","color":"FFCCCC"},{"pos":[-450,-80],"trait":"goalPost","color":"FFCCCC"},{"pos":[450,80],"trait":"goalPost","color":"CCCCFF"},{"pos":[450,-80],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-220,"trait":"ballArea"},{"normal":[0,-1],"dist":-220,"trait":"ballArea"},{"normal":[0,1],"dist":-250,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"ballPhysics":{"radius":9.2,"bCoef":1,"damping":0.991,"invMass":1,"color":"EDED09"},"playerPhysics":{"kickStrength":8.5,"invMass":1.0e+26,"bCoef":0}}`
var strongballBig = `{"name":"Strongball Big","width":600,"height":270,"bg":{"type":"grass","width":550,"height":240,"kickOffRadius":80},"vertexes":[{"x":-550,"y":240,"cMask":["ball"]},{"x":-550,"y":80,"cMask":["ball"]},{"x":-550,"y":-80,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"]},{"x":550,"y":240,"cMask":["ball"]},{"x":550,"y":80,"cMask":["ball"]},{"x":550,"y":-80,"cMask":["ball"]},{"x":550,"y":-240,"cMask":["ball"]},{"x":0,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-560,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-580,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":-580,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":-560,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":560,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":580,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":580,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":560,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":-48.6000022888,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-48.6000022888,"y":265.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-39.6000022888,"y":266.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-37.6000022888,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-25.6000022888,"y":251.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-16.6000022888,"y":266.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-9.60000228882,"y":250.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-2.60000228882,"y":269.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-5.60000228882,"y":258.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":29.3999977112,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":32.3999977112,"y":266.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":45.3999977112,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":52.3999977112,"y":256.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":58.3999977112,"y":245.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":52.3999977112,"y":267.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":11.3999977112,"y":249.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":20.3999977112,"y":264.800003052,"cMask":["ball"],"cGroup":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":20,"v1":21,"cMask":["ball"],"cGroup":["ball"]},{"v0":22,"v1":20,"cMask":["ball"],"cGroup":["ball"]},{"v0":23,"v1":22,"cMask":["ball"],"cGroup":["ball"]},{"v0":25,"v1":24,"curve":173.282467513,"curveF":0.058688772832140974,"cMask":["ball"],"cGroup":["ball"]},{"v0":24,"v1":25,"curve":145.839532856,"curveF":0.307262569834477,"cMask":["ball"],"cGroup":["ball"]},{"v0":26,"v1":27,"cMask":["ball"],"cGroup":["ball"]},{"v0":26,"v1":28,"curve":-158.287173304,"curveF":-0.19178082191668203,"cMask":["ball"],"cGroup":["ball"]},{"v0":28,"v1":27,"curve":-176.30477946800002,"curveF":-0.0322580645162235,"cMask":["ball"],"cGroup":["ball"]},{"v0":29,"v1":30,"cMask":["ball"],"cGroup":["ball"]},{"v0":29,"v1":30,"curve":178.585361263,"curveF":0.012345679011573159,"cMask":["ball"],"cGroup":["ball"]},{"v0":31,"v1":32,"cMask":["ball"],"cGroup":["ball"]},{"v0":32,"v1":33,"cMask":["ball"],"cGroup":["ball"]},{"v0":32,"v1":34,"cMask":["ball"],"cGroup":["ball"]},{"v0":36,"v1":35,"curve":173.282467513,"curveF":0.058688772832140974,"cMask":["ball"],"cGroup":["ball"]},{"v0":35,"v1":36,"curve":145.839532856,"curveF":0.307262569834477,"cMask":["ball"],"cGroup":["ball"]}],"planes":[{"normal":[0,1],"dist":-240,"cMask":["ball"]},{"normal":[0,-1],"dist":-240,"cMask":["ball"]},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-600,"bCoef":0.1},{"normal":[-1,0],"dist":-600,"bCoef":0.1}],"goals":[{"p0":[-550,80],"p1":[-550,-80],"team":"red"},{"p0":[550,80],"p1":[550,-80],"team":"blue"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[-550,80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-550,-80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[550,80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[550,-80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[-21.2857055664,259.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[15.7142944336,257.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[-66.2857055664,252.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[-71.2857055664,262.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[-60.2857055664,262.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","spawnDistance":350}`
var medium = `{"name":"Medium","width":500,"height":250,"bg":{"type":"grass","width":450,"height":220,"kickOffRadius":80},"vertexes":[{"x":-450,"y":220,"cMask":["ball"]},{"x":-450,"y":70,"cMask":["ball"]},{"x":-450,"y":-70,"cMask":["ball"]},{"x":-450,"y":-220,"cMask":["ball"]},{"x":450,"y":220,"cMask":["ball"]},{"x":450,"y":80,"cMask":["ball"]},{"x":450,"y":-80,"cMask":["ball"]},{"x":450,"y":-220,"cMask":["ball"]},{"x":0,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-460,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-480,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":-480,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":-460,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":460,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":480,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":480,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":460,"y":80,"bCoef":0.1,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]}],"planes":[{"normal":[0,1],"dist":-220,"cMask":["ball"]},{"normal":[0,-1],"dist":-220,"cMask":["ball"]},{"normal":[0,1],"dist":-250,"bCoef":0.1},{"normal":[0,-1],"dist":-250,"bCoef":0.1},{"normal":[1,0],"dist":-500,"bCoef":0.1},{"normal":[-1,0],"dist":-500,"bCoef":0.1}],"goals":[{"p0":[-450,80],"p1":[-450,-80],"team":"red"},{"p0":[450,80],"p1":[450,-80],"team":"blue"}],"discs":[{"cGroup":["ball","kick","score"]},{"pos":[-450,80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-450,-80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[450,80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[450,-80],"radius":8,"invMass":0,"color":"CCCCFF"}],"playerPhysics":{},"ballPhysics":"disc0","spawnDistance":250}`

var rambo2 = `{"name":"2 MAN STRONG RAMBO","width":250,"height":250,"bg":{"type":"grass","width":250,"height":250},"vertexes":[{"x":-173,"y":100,"cMask":["ball"]},{"x":-173,"y":75,"cMask":["ball"]},{"x":-173,"y":-75,"cMask":["ball"]},{"x":-173,"y":-100,"cMask":["ball"]},{"x":-173,"y":-100,"cMask":["ball"]},{"x":-152,"y":-113,"cMask":["ball"]},{"x":-22,"y":-187,"cMask":["ball"]},{"x":0,"y":-200,"cMask":["ball"]},{"x":0,"y":-200,"cMask":["ball"]},{"x":22,"y":-187,"cMask":["ball"]},{"x":152,"y":-112,"cMask":["ball"]},{"x":173,"y":-100,"cMask":["ball"]},{"x":173,"y":-100,"cMask":["ball"]},{"x":173,"y":-75,"cMask":["ball"]},{"x":173,"y":75,"cMask":["ball"]},{"x":173,"y":100,"cMask":["ball"]},{"x":173,"y":100,"cMask":["ball"]},{"x":152,"y":113,"cMask":["ball"]},{"x":22,"y":187,"cMask":["ball"]},{"x":0,"y":200,"cMask":["ball"]},{"x":0,"y":200,"cMask":["ball"]},{"x":-22,"y":187,"cMask":["ball"]},{"x":-152,"y":112,"cMask":["ball"]},{"x":-173,"y":100,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":11,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":13,"cMask":["ball"],"color":"FFFFFF"},{"v0":14,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":19,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":23,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"cMask":[],"color":"992200"},{"v0":13,"v1":14,"cMask":[],"color":"2299"},{"v0":1,"v1":2,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]}],"planes":[],"goals":[{"p0":[-173,75],"p1":[-173,-75],"team":"red"},{"p0":[173,-75],"p1":[173,75],"team":"red"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[-173,75],"radius":8,"invMass":0},{"pos":[-173,-75],"radius":8,"invMass":0},{"pos":[173,-75],"radius":8,"invMass":0},{"pos":[173,75],"radius":8,"invMass":0}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":7.5},"ballPhysics":"disc0","spawnDistance":170}`
var rambo3 = `{"name":"3 MAN STRONG RAMBO","width":300,"height":300,"bg":{"type":"grass","width":300,"height":300},"vertexes":[{"x":168,"y":141,"cMask":["ball"]},{"x":168,"y":141,"cMask":["ball"]},{"x":38,"y":216,"cMask":["ball"]},{"x":38,"y":216,"cMask":["ball"]},{"x":38,"y":216,"cMask":["ball"]},{"x":38,"y":216,"cMask":["ball"]},{"x":-110,"y":190,"cMask":["ball"]},{"x":-110,"y":190,"cMask":["ball"]},{"x":-110,"y":190,"cMask":["ball"]},{"x":-110,"y":190,"cMask":["ball"]},{"x":-206,"y":75,"cMask":["ball"]},{"x":-206,"y":75,"cMask":["ball"]},{"x":-206,"y":75,"cMask":["ball"]},{"x":-206,"y":75,"cMask":["ball"]},{"x":-206,"y":-75,"cMask":["ball"]},{"x":-206,"y":-75,"cMask":["ball"]},{"x":-206,"y":-75,"cMask":["ball"]},{"x":-206,"y":-75,"cMask":["ball"]},{"x":-110,"y":-190,"cMask":["ball"]},{"x":-110,"y":-190,"cMask":["ball"]},{"x":-110,"y":-190,"cMask":["ball"]},{"x":-110,"y":-190,"cMask":["ball"]},{"x":38,"y":-216,"cMask":["ball"]},{"x":38,"y":-216,"cMask":["ball"]},{"x":38,"y":-216,"cMask":["ball"]},{"x":38,"y":-216,"cMask":["ball"]},{"x":168,"y":-141,"cMask":["ball"]},{"x":168,"y":-141,"cMask":["ball"]},{"x":168,"y":-141,"cMask":["ball"]},{"x":168,"y":-141,"cMask":["ball"]},{"x":219,"y":0,"cMask":["ball"]},{"x":219,"y":0,"cMask":["ball"]},{"x":219,"y":0,"cMask":["ball"]},{"x":219,"y":0,"cMask":["ball"]},{"x":168,"y":141,"cMask":["ball"]},{"x":168,"y":141,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":11,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":13,"cMask":["ball"],"color":"FFFFFF"},{"v0":14,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":19,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":23,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":31,"cMask":["ball"],"color":"FFFFFF"},{"v0":32,"v1":35,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"cMask":[],"color":"FF0000"},{"v0":13,"v1":14,"cMask":[],"color":"FFFF00"},{"v0":25,"v1":26,"cMask":[],"color":"FF"},{"v0":1,"v1":2,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":25,"v1":26,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]}],"planes":[],"goals":[{"p0":[168,141],"p1":[38,216],"team":"red"},{"p0":[-206,75],"p1":[-206,-75],"team":"red"},{"p0":[38,-216],"p1":[168,-141],"team":"red"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[168,141],"radius":8,"invMass":0},{"pos":[38,216],"radius":8,"invMass":0},{"pos":[-206,75],"radius":8,"invMass":0},{"pos":[-206,-75],"radius":8,"invMass":0},{"pos":[38,-216],"radius":8,"invMass":0},{"pos":[168,-141],"radius":8,"invMass":0}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","redSpawnPoints":[[-200,0],[100,170],[100,-170]],"blueSpawnPoints":[[100,-170],[100,170],[-200,0]]}`
var rambo4 = `{"name":"4 MAN STRONG RAMBO","width":300,"height":300,"bg":{"type":"grass","width":300,"height":300},"vertexes":[{"x":217,"y":90,"cMask":["ball"]},{"x":207,"y":101,"cMask":["ball"]},{"x":101,"y":207,"cMask":["ball"]},{"x":90,"y":217,"cMask":["ball"]},{"x":90,"y":217,"cMask":["ball"]},{"x":75,"y":217,"cMask":["ball"]},{"x":-75,"y":217,"cMask":["ball"]},{"x":-90,"y":217,"cMask":["ball"]},{"x":-90,"y":217,"cMask":["ball"]},{"x":-101,"y":207,"cMask":["ball"]},{"x":-207,"y":101,"cMask":["ball"]},{"x":-217,"y":90,"cMask":["ball"]},{"x":-217,"y":90,"cMask":["ball"]},{"x":-217,"y":75,"cMask":["ball"]},{"x":-217,"y":-75,"cMask":["ball"]},{"x":-217,"y":-90,"cMask":["ball"]},{"x":-217,"y":-90,"cMask":["ball"]},{"x":-207,"y":-101,"cMask":["ball"]},{"x":-101,"y":-207,"cMask":["ball"]},{"x":-90,"y":-217,"cMask":["ball"]},{"x":-90,"y":-217,"cMask":["ball"]},{"x":-75,"y":-217,"cMask":["ball"]},{"x":75,"y":-217,"cMask":["ball"]},{"x":90,"y":-217,"cMask":["ball"]},{"x":90,"y":-217,"cMask":["ball"]},{"x":101,"y":-207,"cMask":["ball"]},{"x":207,"y":-101,"cMask":["ball"]},{"x":217,"y":-90,"cMask":["ball"]},{"x":217,"y":-90,"cMask":["ball"]},{"x":217,"y":-75,"cMask":["ball"]},{"x":217,"y":75,"cMask":["ball"]},{"x":217,"y":90,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"cMask":["ball"],"color":"FFFFFF"},{"v0":10,"v1":11,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"cMask":["ball"],"color":"FFFFFF"},{"v0":18,"v1":19,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":23,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":31,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"cMask":[],"color":"FF0000"},{"v0":9,"v1":10,"cMask":[],"color":"FFFF00"},{"v0":17,"v1":18,"cMask":[],"color":"FF00"},{"v0":25,"v1":26,"cMask":[],"color":"FF"},{"v0":1,"v1":2,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":25,"v1":26,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]}],"planes":[],"goals":[{"p0":[207,101],"p1":[101,207],"team":"red"},{"p0":[-101,207],"p1":[-207,101],"team":"red"},{"p0":[-207,-101],"p1":[-101,-207],"team":"red"},{"p0":[101,-207],"p1":[207,-101],"team":"red"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[207,101],"radius":8,"invMass":0},{"pos":[101,207],"radius":8,"invMass":0},{"pos":[-101,207],"radius":8,"invMass":0},{"pos":[-207,101],"radius":8,"invMass":0},{"pos":[-207,-101],"radius":8,"invMass":0},{"pos":[-101,-207],"radius":8,"invMass":0},{"pos":[101,-207],"radius":8,"invMass":0},{"pos":[207,-101],"radius":8,"invMass":0}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","redSpawnPoints":[[-150,-150],[-150,150],[150,150],[150,-150]],"blueSpawnPoints":[[150,-150],[150,150],[-150,150],[-150,-150]]}`
var rambo5 = `{"name":"5 MAN STRONG RAMBO","width":360,"height":360,"bg":{"type":"grass","width":360,"height":360},"vertexes":[{"x":291,"y":0,"cMask":["ball"]},{"x":287,"y":14,"cMask":["ball"]},{"x":240,"y":157,"cMask":["ball"]},{"x":236,"y":171,"cMask":["ball"]},{"x":236,"y":171,"cMask":["ball"]},{"x":223,"y":180,"cMask":["ball"]},{"x":102,"y":268,"cMask":["ball"]},{"x":90,"y":277,"cMask":["ball"]},{"x":90,"y":277,"cMask":["ball"]},{"x":75,"y":277,"cMask":["ball"]},{"x":-75,"y":277,"cMask":["ball"]},{"x":-90,"y":277,"cMask":["ball"]},{"x":-90,"y":277,"cMask":["ball"]},{"x":-102,"y":268,"cMask":["ball"]},{"x":-223,"y":180,"cMask":["ball"]},{"x":-236,"y":171,"cMask":["ball"]},{"x":-236,"y":171,"cMask":["ball"]},{"x":-240,"y":157,"cMask":["ball"]},{"x":-287,"y":14,"cMask":["ball"]},{"x":-291,"y":0,"cMask":["ball"]},{"x":-291,"y":0,"cMask":["ball"]},{"x":-287,"y":-14,"cMask":["ball"]},{"x":-240,"y":-157,"cMask":["ball"]},{"x":-236,"y":-171,"cMask":["ball"]},{"x":-236,"y":-171,"cMask":["ball"]},{"x":-223,"y":-180,"cMask":["ball"]},{"x":-102,"y":-268,"cMask":["ball"]},{"x":-90,"y":-277,"cMask":["ball"]},{"x":-90,"y":-277,"cMask":["ball"]},{"x":-75,"y":-277,"cMask":["ball"]},{"x":75,"y":-277,"cMask":["ball"]},{"x":90,"y":-277,"cMask":["ball"]},{"x":90,"y":-277,"cMask":["ball"]},{"x":102,"y":-268,"cMask":["ball"]},{"x":223,"y":-180,"cMask":["ball"]},{"x":236,"y":-171,"cMask":["ball"]},{"x":236,"y":-171,"cMask":["ball"]},{"x":240,"y":-157,"cMask":["ball"]},{"x":287,"y":-14,"cMask":["ball"]},{"x":291,"y":0,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"cMask":["ball"],"color":"FFFFFF"},{"v0":10,"v1":11,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"cMask":["ball"],"color":"FFFFFF"},{"v0":18,"v1":19,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":23,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":31,"cMask":["ball"],"color":"FFFFFF"},{"v0":32,"v1":33,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":35,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":39,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"cMask":[],"color":"FF0000"},{"v0":9,"v1":10,"cMask":[],"color":"FFFF00"},{"v0":17,"v1":18,"cMask":[],"color":"FF00"},{"v0":25,"v1":26,"cMask":[],"color":"FF"},{"v0":33,"v1":34,"cMask":[],"color":"FF00FF"},{"v0":1,"v1":2,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":25,"v1":26,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":33,"v1":34,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]}],"planes":[],"goals":[{"p0":[287,14],"p1":[240,157],"team":"red"},{"p0":[75,277],"p1":[-75,277],"team":"red"},{"p0":[-240,157],"p1":[-287,14],"team":"red"},{"p0":[-223,-180],"p1":[-102,-268],"team":"red"},{"p0":[102,-268],"p1":[223,-180],"team":"red"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[287,14],"radius":8,"invMass":0},{"pos":[240,157],"radius":8,"invMass":0},{"pos":[75,277],"radius":8,"invMass":0},{"pos":[-75,277],"radius":8,"invMass":0},{"pos":[-240,157],"radius":8,"invMass":0},{"pos":[-287,14],"radius":8,"invMass":0},{"pos":[-223,-180],"radius":8,"invMass":0},{"pos":[-102,-268],"radius":8,"invMass":0},{"pos":[102,-268],"radius":8,"invMass":0},{"pos":[223,-180],"radius":8,"invMass":0}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","redSpawnPoints":[[-255,75],[-155,-215],[0,265],[155,-215],[255,75]],"blueSpawnPoints":[[255,75],[155,-215],[0,265],[-155,-215],[-255,75]]}`
var rambo6 = `{"name":"6 MAN STRONG RAMBO","width":420,"height":420,"bg":{"type":"grass","width":420,"height":420},"vertexes":[{"x":336,"y":90,"cMask":["ball"]},{"x":328,"y":103,"cMask":["ball"]},{"x":253,"y":233,"cMask":["ball"]},{"x":246,"y":246,"cMask":["ball"]},{"x":246,"y":246,"cMask":["ball"]},{"x":233,"y":253,"cMask":["ball"]},{"x":103,"y":328,"cMask":["ball"]},{"x":90,"y":336,"cMask":["ball"]},{"x":90,"y":336,"cMask":["ball"]},{"x":75,"y":336,"cMask":["ball"]},{"x":-75,"y":336,"cMask":["ball"]},{"x":-90,"y":336,"cMask":["ball"]},{"x":-90,"y":336,"cMask":["ball"]},{"x":-103,"y":328,"cMask":["ball"]},{"x":-233,"y":253,"cMask":["ball"]},{"x":-246,"y":246,"cMask":["ball"]},{"x":-246,"y":246,"cMask":["ball"]},{"x":-253,"y":233,"cMask":["ball"]},{"x":-328,"y":103,"cMask":["ball"]},{"x":-336,"y":90,"cMask":["ball"]},{"x":-336,"y":90,"cMask":["ball"]},{"x":-336,"y":75,"cMask":["ball"]},{"x":-336,"y":-75,"cMask":["ball"]},{"x":-336,"y":-90,"cMask":["ball"]},{"x":-336,"y":-90,"cMask":["ball"]},{"x":-328,"y":-103,"cMask":["ball"]},{"x":-253,"y":-233,"cMask":["ball"]},{"x":-246,"y":-246,"cMask":["ball"]},{"x":-246,"y":-246,"cMask":["ball"]},{"x":-233,"y":-253,"cMask":["ball"]},{"x":-103,"y":-328,"cMask":["ball"]},{"x":-90,"y":-336,"cMask":["ball"]},{"x":-90,"y":-336,"cMask":["ball"]},{"x":-75,"y":-336,"cMask":["ball"]},{"x":75,"y":-336,"cMask":["ball"]},{"x":90,"y":-336,"cMask":["ball"]},{"x":90,"y":-336,"cMask":["ball"]},{"x":103,"y":-328,"cMask":["ball"]},{"x":233,"y":-253,"cMask":["ball"]},{"x":246,"y":-246,"cMask":["ball"]},{"x":246,"y":-246,"cMask":["ball"]},{"x":253,"y":-233,"cMask":["ball"]},{"x":328,"y":-103,"cMask":["ball"]},{"x":336,"y":-90,"cMask":["ball"]},{"x":336,"y":-90,"cMask":["ball"]},{"x":336,"y":-75,"cMask":["ball"]},{"x":336,"y":75,"cMask":["ball"]},{"x":336,"y":90,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"cMask":["ball"],"color":"FFFFFF"},{"v0":10,"v1":11,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"cMask":["ball"],"color":"FFFFFF"},{"v0":18,"v1":19,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":23,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":31,"cMask":["ball"],"color":"FFFFFF"},{"v0":32,"v1":33,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":35,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":39,"cMask":["ball"],"color":"FFFFFF"},{"v0":40,"v1":41,"cMask":["ball"],"color":"FFFFFF"},{"v0":42,"v1":43,"cMask":["ball"],"color":"FFFFFF"},{"v0":44,"v1":47,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"cMask":[],"color":"FF0000"},{"v0":9,"v1":10,"cMask":[],"color":"FF7700"},{"v0":17,"v1":18,"cMask":[],"color":"FFFF00"},{"v0":25,"v1":26,"cMask":[],"color":"FF00"},{"v0":33,"v1":34,"cMask":[],"color":"FF"},{"v0":41,"v1":42,"cMask":[],"color":"FF00FF"},{"v0":1,"v1":2,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":25,"v1":26,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":33,"v1":34,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":41,"v1":42,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]}],"planes":[],"goals":[{"p0":[328,103],"p1":[253,233],"team":"red"},{"p0":[75,336],"p1":[-75,336],"team":"red"},{"p0":[-253,233],"p1":[-328,103],"team":"red"},{"p0":[-328,-103],"p1":[-253,-233],"team":"red"},{"p0":[-75,-336],"p1":[75,-336],"team":"red"},{"p0":[253,-233],"p1":[328,-103],"team":"red"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[328,103],"radius":8,"invMass":0},{"pos":[253,233],"radius":8,"invMass":0},{"pos":[75,336],"radius":8,"invMass":0},{"pos":[-75,336],"radius":8,"invMass":0},{"pos":[-253,233],"radius":8,"invMass":0},{"pos":[-328,103],"radius":8,"invMass":0},{"pos":[-328,-103],"radius":8,"invMass":0},{"pos":[-253,-233],"radius":8,"invMass":0},{"pos":[-75,-336],"radius":8,"invMass":0},{"pos":[75,-336],"radius":8,"invMass":0},{"pos":[253,-233],"radius":8,"invMass":0},{"pos":[328,-103],"radius":8,"invMass":0}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","redSpawnPoints":[[-280,160],[-280,-160],[0,325],[0,-325],[280,-160],[280,160]],"blueSpawnPoints":[[280,160],[280,-160],[0,-325],[0,325],[-280,-160],[-280,160]]}`
var rambo7 = `{"name":"7 MAN STRONG RAMBO","width":470,"height":470,"bg":{"type":"grass","width":470,"height":470},"vertexes":[{"x":404,"y":0,"cMask":["ball"]},{"x":401,"y":15,"cMask":["ball"]},{"x":368,"y":161,"cMask":["ball"]},{"x":364,"y":175,"cMask":["ball"]},{"x":364,"y":175,"cMask":["ball"]},{"x":355,"y":187,"cMask":["ball"]},{"x":262,"y":304,"cMask":["ball"]},{"x":252,"y":316,"cMask":["ball"]},{"x":252,"y":316,"cMask":["ball"]},{"x":239,"y":323,"cMask":["ball"]},{"x":104,"y":388,"cMask":["ball"]},{"x":90,"y":394,"cMask":["ball"]},{"x":90,"y":394,"cMask":["ball"]},{"x":75,"y":394,"cMask":["ball"]},{"x":-75,"y":394,"cMask":["ball"]},{"x":-90,"y":394,"cMask":["ball"]},{"x":-90,"y":394,"cMask":["ball"]},{"x":-104,"y":388,"cMask":["ball"]},{"x":-239,"y":323,"cMask":["ball"]},{"x":-252,"y":316,"cMask":["ball"]},{"x":-252,"y":316,"cMask":["ball"]},{"x":-262,"y":304,"cMask":["ball"]},{"x":-355,"y":187,"cMask":["ball"]},{"x":-364,"y":175,"cMask":["ball"]},{"x":-364,"y":175,"cMask":["ball"]},{"x":-368,"y":161,"cMask":["ball"]},{"x":-401,"y":15,"cMask":["ball"]},{"x":-404,"y":0,"cMask":["ball"]},{"x":-404,"y":0,"cMask":["ball"]},{"x":-401,"y":-15,"cMask":["ball"]},{"x":-368,"y":-161,"cMask":["ball"]},{"x":-364,"y":-175,"cMask":["ball"]},{"x":-364,"y":-175,"cMask":["ball"]},{"x":-355,"y":-187,"cMask":["ball"]},{"x":-262,"y":-304,"cMask":["ball"]},{"x":-252,"y":-316,"cMask":["ball"]},{"x":-252,"y":-316,"cMask":["ball"]},{"x":-239,"y":-323,"cMask":["ball"]},{"x":-104,"y":-388,"cMask":["ball"]},{"x":-90,"y":-394,"cMask":["ball"]},{"x":-90,"y":-394,"cMask":["ball"]},{"x":-75,"y":-394,"cMask":["ball"]},{"x":75,"y":-394,"cMask":["ball"]},{"x":90,"y":-394,"cMask":["ball"]},{"x":90,"y":-394,"cMask":["ball"]},{"x":104,"y":-388,"cMask":["ball"]},{"x":239,"y":-323,"cMask":["ball"]},{"x":252,"y":-316,"cMask":["ball"]},{"x":252,"y":-316,"cMask":["ball"]},{"x":262,"y":-304,"cMask":["ball"]},{"x":355,"y":-187,"cMask":["ball"]},{"x":364,"y":-175,"cMask":["ball"]},{"x":364,"y":-175,"cMask":["ball"]},{"x":368,"y":-161,"cMask":["ball"]},{"x":401,"y":-15,"cMask":["ball"]},{"x":404,"y":0,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"cMask":["ball"],"color":"FFFFFF"},{"v0":10,"v1":11,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"cMask":["ball"],"color":"FFFFFF"},{"v0":18,"v1":19,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":23,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":31,"cMask":["ball"],"color":"FFFFFF"},{"v0":32,"v1":33,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":35,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":39,"cMask":["ball"],"color":"FFFFFF"},{"v0":40,"v1":41,"cMask":["ball"],"color":"FFFFFF"},{"v0":42,"v1":43,"cMask":["ball"],"color":"FFFFFF"},{"v0":44,"v1":47,"cMask":["ball"],"color":"FFFFFF"},{"v0":48,"v1":49,"cMask":["ball"],"color":"FFFFFF"},{"v0":50,"v1":51,"cMask":["ball"],"color":"FFFFFF"},{"v0":52,"v1":55,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"cMask":[],"color":"FF0000"},{"v0":9,"v1":10,"cMask":[],"color":"FF7700"},{"v0":17,"v1":18,"cMask":[],"color":"FFFF00"},{"v0":25,"v1":26,"cMask":[],"color":"FF00"},{"v0":33,"v1":34,"cMask":[],"color":"FFFF"},{"v0":41,"v1":42,"cMask":[],"color":"FF"},{"v0":49,"v1":50,"cMask":[],"color":"FF00FF"},{"v0":1,"v1":2,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":25,"v1":26,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":33,"v1":34,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":41,"v1":42,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":49,"v1":50,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]}],"planes":[],"goals":[{"p0":[401,15],"p1":[368,161],"team":"red"},{"p0":[239,323],"p1":[104,388],"team":"red"},{"p0":[-104,388],"p1":[-239,323],"team":"red"},{"p0":[-368,161],"p1":[-401,15],"team":"red"},{"p0":[-355,-187],"p1":[-262,-304],"team":"red"},{"p0":[-75,-394],"p1":[75,-394],"team":"red"},{"p0":[262,-304],"p1":[355,-187],"team":"red"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[401,15],"radius":8,"invMass":0},{"pos":[368,161],"radius":8,"invMass":0},{"pos":[239,323],"radius":8,"invMass":0},{"pos":[104,388],"radius":8,"invMass":0},{"pos":[-104,388],"radius":8,"invMass":0},{"pos":[-239,323],"radius":8,"invMass":0},{"pos":[-368,161],"radius":8,"invMass":0},{"pos":[-401,15],"radius":8,"invMass":0},{"pos":[-355,-187],"radius":8,"invMass":0},{"pos":[-262,-304],"radius":8,"invMass":0},{"pos":[-75,-394],"radius":8,"invMass":0},{"pos":[75,-394],"radius":8,"invMass":0},{"pos":[262,-304],"radius":8,"invMass":0},{"pos":[355,-187],"radius":8,"invMass":0}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","redSpawnPoints":[[-375,85],[-300,-240],[-170,345],[0,-385],[170,345],[300,-240],[375,85]],"blueSpawnPoints":[[375,85],[300,-240],[170,345],[0,-385],[-170,345],[-300,-240],[-375,85]]}`
var rambo8 = `{"name":"8 MAN STRONG RAMBO","width":500,"height":500,"bg":{"type":"grass","width":500,"height":500},"vertexes":[{"x":452,"y":90,"cMask":["ball"]},{"x":447,"y":104,"cMask":["ball"]},{"x":389,"y":242,"cMask":["ball"]},{"x":384,"y":256,"cMask":["ball"]},{"x":384,"y":256,"cMask":["ball"]},{"x":373,"y":267,"cMask":["ball"]},{"x":267,"y":373,"cMask":["ball"]},{"x":256,"y":384,"cMask":["ball"]},{"x":256,"y":384,"cMask":["ball"]},{"x":242,"y":389,"cMask":["ball"]},{"x":104,"y":447,"cMask":["ball"]},{"x":90,"y":452,"cMask":["ball"]},{"x":90,"y":452,"cMask":["ball"]},{"x":75,"y":452,"cMask":["ball"]},{"x":-75,"y":452,"cMask":["ball"]},{"x":-90,"y":452,"cMask":["ball"]},{"x":-90,"y":452,"cMask":["ball"]},{"x":-104,"y":447,"cMask":["ball"]},{"x":-242,"y":389,"cMask":["ball"]},{"x":-256,"y":384,"cMask":["ball"]},{"x":-256,"y":384,"cMask":["ball"]},{"x":-267,"y":373,"cMask":["ball"]},{"x":-373,"y":267,"cMask":["ball"]},{"x":-384,"y":256,"cMask":["ball"]},{"x":-384,"y":256,"cMask":["ball"]},{"x":-389,"y":242,"cMask":["ball"]},{"x":-447,"y":104,"cMask":["ball"]},{"x":-452,"y":90,"cMask":["ball"]},{"x":-452,"y":90,"cMask":["ball"]},{"x":-452,"y":75,"cMask":["ball"]},{"x":-452,"y":-75,"cMask":["ball"]},{"x":-452,"y":-90,"cMask":["ball"]},{"x":-452,"y":-90,"cMask":["ball"]},{"x":-447,"y":-104,"cMask":["ball"]},{"x":-389,"y":-242,"cMask":["ball"]},{"x":-384,"y":-256,"cMask":["ball"]},{"x":-384,"y":-256,"cMask":["ball"]},{"x":-373,"y":-267,"cMask":["ball"]},{"x":-267,"y":-373,"cMask":["ball"]},{"x":-256,"y":-384,"cMask":["ball"]},{"x":-256,"y":-384,"cMask":["ball"]},{"x":-242,"y":-389,"cMask":["ball"]},{"x":-104,"y":-447,"cMask":["ball"]},{"x":-90,"y":-452,"cMask":["ball"]},{"x":-90,"y":-452,"cMask":["ball"]},{"x":-75,"y":-452,"cMask":["ball"]},{"x":75,"y":-452,"cMask":["ball"]},{"x":90,"y":-452,"cMask":["ball"]},{"x":90,"y":-452,"cMask":["ball"]},{"x":104,"y":-447,"cMask":["ball"]},{"x":242,"y":-389,"cMask":["ball"]},{"x":256,"y":-384,"cMask":["ball"]},{"x":256,"y":-384,"cMask":["ball"]},{"x":267,"y":-373,"cMask":["ball"]},{"x":373,"y":-267,"cMask":["ball"]},{"x":384,"y":-256,"cMask":["ball"]},{"x":384,"y":-256,"cMask":["ball"]},{"x":389,"y":-242,"cMask":["ball"]},{"x":447,"y":-104,"cMask":["ball"]},{"x":452,"y":-90,"cMask":["ball"]},{"x":452,"y":-90,"cMask":["ball"]},{"x":452,"y":-75,"cMask":["ball"]},{"x":452,"y":75,"cMask":["ball"]},{"x":452,"y":90,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"cMask":["ball"],"color":"FFFFFF"},{"v0":10,"v1":11,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"cMask":["ball"],"color":"FFFFFF"},{"v0":18,"v1":19,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":23,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":31,"cMask":["ball"],"color":"FFFFFF"},{"v0":32,"v1":33,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":35,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":39,"cMask":["ball"],"color":"FFFFFF"},{"v0":40,"v1":41,"cMask":["ball"],"color":"FFFFFF"},{"v0":42,"v1":43,"cMask":["ball"],"color":"FFFFFF"},{"v0":44,"v1":47,"cMask":["ball"],"color":"FFFFFF"},{"v0":48,"v1":49,"cMask":["ball"],"color":"FFFFFF"},{"v0":50,"v1":51,"cMask":["ball"],"color":"FFFFFF"},{"v0":52,"v1":55,"cMask":["ball"],"color":"FFFFFF"},{"v0":56,"v1":57,"cMask":["ball"],"color":"FFFFFF"},{"v0":58,"v1":59,"cMask":["ball"],"color":"FFFFFF"},{"v0":60,"v1":63,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"cMask":[],"color":"FF0000"},{"v0":9,"v1":10,"cMask":[],"color":"FF6600"},{"v0":17,"v1":18,"cMask":[],"color":"FFFF00"},{"v0":25,"v1":26,"cMask":[],"color":"FF00"},{"v0":33,"v1":34,"cMask":[],"color":"FFFF"},{"v0":41,"v1":42,"cMask":[],"color":"FF"},{"v0":49,"v1":50,"cMask":[],"color":"7700DD"},{"v0":57,"v1":58,"cMask":[],"color":"FF00FF"},{"v0":1,"v1":2,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":25,"v1":26,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":33,"v1":34,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":41,"v1":42,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":49,"v1":50,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":57,"v1":58,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]}],"planes":[],"goals":[{"p0":[447,104],"p1":[389,242],"team":"red"},{"p0":[242,389],"p1":[104,447],"team":"red"},{"p0":[-104,447],"p1":[-242,389],"team":"red"},{"p0":[-389,242],"p1":[-447,104],"team":"red"},{"p0":[-447,-104],"p1":[-389,-242],"team":"red"},{"p0":[-242,-389],"p1":[-104,-447],"team":"red"},{"p0":[104,-447],"p1":[242,-389],"team":"red"},{"p0":[389,-242],"p1":[447,-104],"team":"red"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[447,104],"radius":8,"invMass":0},{"pos":[389,242],"radius":8,"invMass":0},{"pos":[242,389],"radius":8,"invMass":0},{"pos":[104,447],"radius":8,"invMass":0},{"pos":[-104,447],"radius":8,"invMass":0},{"pos":[-242,389],"radius":8,"invMass":0},{"pos":[-389,242],"radius":8,"invMass":0},{"pos":[-447,104],"radius":8,"invMass":0},{"pos":[-447,-104],"radius":8,"invMass":0},{"pos":[-389,-242],"radius":8,"invMass":0},{"pos":[-242,-389],"radius":8,"invMass":0},{"pos":[-104,-447],"radius":8,"invMass":0},{"pos":[104,-447],"radius":8,"invMass":0},{"pos":[242,-389],"radius":8,"invMass":0},{"pos":[389,-242],"radius":8,"invMass":0},{"pos":[447,-104],"radius":8,"invMass":0}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","redSpawnPoints":[[-410,170],[-410,-170],[-170,410],[-170,-410],[170,410],[170,-410],[410,-170],[410,170]],"blueSpawnPoints":[[410,170],[410,-170],[170,-410],[170,410],[-170,-410],[-170,410],[-410,-170],[-410,170]]}`
var rambo9 = `{"name" : "9 MAN STRONG RAMBO", "width" : 600, "height" : 600, "bg" : { "type" : "grass", "width" : 600, "height" : 600 }, "vertexes" : [{ "x" : 510, "y" : 90, "cMask" : ["ball" ] }, { "x" : 505, "y" : 104, "cMask" : ["ball" ] }, /* 2 */ { "x" : 454, "y" : 245, "cMask" : ["ball" ] }, /* 3 */ { "x" : 449, "y" : 259, "cMask" : ["ball" ] }, /* 4 */ { "x" : 449, "y" : 259, "cMask" : ["ball" ] }, /* 5 */ { "x" : 439, "y" : 271, "cMask" : ["ball" ] }, /* 6 */ { "x" : 343, "y" : 386, "cMask" : ["ball" ] }, /* 7 */ { "x" : 333, "y" : 397, "cMask" : ["ball" ] }, /* 8 */ { "x" : 333, "y" : 397, "cMask" : ["ball" ] }, /* 9 */ { "x" : 320, "y" : 405, "cMask" : ["ball" ] }, /* 10 */ { "x" : 190, "y" : 480, "cMask" : ["ball" ] }, /* 11 */ { "x" : 177, "y" : 487, "cMask" : ["ball" ] }, /* 12 */ { "x" : 177, "y" : 487, "cMask" : ["ball" ] }, /* 13 */ { "x" : 162, "y" : 490, "cMask" : ["ball" ] }, /* 14 */ { "x" : 15, "y" : 516, "cMask" : ["ball" ] }, /* 15 */ { "x" : 0, "y" : 518, "cMask" : ["ball" ] }, /* 16 */ { "x" : 0, "y" : 518, "cMask" : ["ball" ] }, /* 17 */ { "x" : -15, "y" : 516, "cMask" : ["ball" ] }, /* 18 */ { "x" : -162, "y" : 490, "cMask" : ["ball" ] }, /* 19 */ { "x" : -177, "y" : 487, "cMask" : ["ball" ] }, /* 20 */ { "x" : -177, "y" : 487, "cMask" : ["ball" ] }, /* 21 */ { "x" : -190, "y" : 480, "cMask" : ["ball" ] }, /* 22 */ { "x" : -320, "y" : 405, "cMask" : ["ball" ] }, /* 23 */ { "x" : -333, "y" : 397, "cMask" : ["ball" ] }, /* 24 */ { "x" : -333, "y" : 397, "cMask" : ["ball" ] }, /* 25 */ { "x" : -343, "y" : 386, "cMask" : ["ball" ] }, /* 26 */ { "x" : -439, "y" : 271, "cMask" : ["ball" ] }, /* 27 */ { "x" : -449, "y" : 259, "cMask" : ["ball" ] }, /* 28 */ { "x" : -449, "y" : 259, "cMask" : ["ball" ] }, /* 29 */ { "x" : -454, "y" : 245, "cMask" : ["ball" ] }, /* 30 */ { "x" : -505, "y" : 104, "cMask" : ["ball" ] }, /* 31 */ { "x" : -510, "y" : 90, "cMask" : ["ball" ] }, /* 32 */ { "x" : -510, "y" : 90, "cMask" : ["ball" ] }, /* 33 */ { "x" : -510, "y" : 75, "cMask" : ["ball" ] }, /* 34 */ { "x" : -510, "y" : -75, "cMask" : ["ball" ] }, /* 35 */ { "x" : -510, "y" : -90, "cMask" : ["ball" ] }, /* 36 */ { "x" : -510, "y" : -90, "cMask" : ["ball" ] }, /* 37 */ { "x" : -505, "y" : -104, "cMask" : ["ball" ] }, /* 38 */ { "x" : -454, "y" : -245, "cMask" : ["ball" ] }, /* 39 */ { "x" : -449, "y" : -259, "cMask" : ["ball" ] }, /* 40 */ { "x" : -449, "y" : -259, "cMask" : ["ball" ] }, /* 41 */ { "x" : -439, "y" : -271, "cMask" : ["ball" ] }, /* 42 */ { "x" : -343, "y" : -386, "cMask" : ["ball" ] }, /* 43 */ { "x" : -333, "y" : -397, "cMask" : ["ball" ] }, /* 44 */ { "x" : -333, "y" : -397, "cMask" : ["ball" ] }, /* 45 */ { "x" : -320, "y" : -405, "cMask" : ["ball" ] }, /* 46 */ { "x" : -190, "y" : -480, "cMask" : ["ball" ] }, /* 47 */ { "x" : -177, "y" : -487, "cMask" : ["ball" ] }, /* 48 */ { "x" : -177, "y" : -487, "cMask" : ["ball" ] }, /* 49 */ { "x" : -162, "y" : -490, "cMask" : ["ball" ] }, /* 50 */ { "x" : -15, "y" : -516, "cMask" : ["ball" ] }, /* 51 */ { "x" : 0, "y" : -518, "cMask" : ["ball" ] }, /* 52 */ { "x" : 0, "y" : -518, "cMask" : ["ball" ] }, /* 53 */ { "x" : 15, "y" : -516, "cMask" : ["ball" ] }, /* 54 */ { "x" : 162, "y" : -490, "cMask" : ["ball" ] }, /* 55 */ { "x" : 177, "y" : -487, "cMask" : ["ball" ] }, /* 56 */ { "x" : 177, "y" : -487, "cMask" : ["ball" ] }, /* 57 */ { "x" : 190, "y" : -480, "cMask" : ["ball" ] }, /* 58 */ { "x" : 320, "y" : -405, "cMask" : ["ball" ] }, /* 59 */ { "x" : 333, "y" : -397, "cMask" : ["ball" ] }, /* 60 */ { "x" : 333, "y" : -397, "cMask" : ["ball" ] }, /* 61 */ { "x" : 343, "y" : -386, "cMask" : ["ball" ] }, /* 62 */ { "x" : 439, "y" : -271, "cMask" : ["ball" ] }, /* 63 */ { "x" : 449, "y" : -259, "cMask" : ["ball" ] }, /* 64 */ { "x" : 449, "y" : -259, "cMask" : ["ball" ] }, /* 65 */ { "x" : 454, "y" : -245, "cMask" : ["ball" ] }, /* 66 */ { "x" : 505, "y" : -104, "cMask" : ["ball" ] }, /* 67 */ { "x" : 510, "y" : -90, "cMask" : ["ball" ] }, /* 68 */ { "x" : 510, "y" : -90, "cMask" : ["ball" ] }, /* 69 */ { "x" : 510, "y" : -75, "cMask" : ["ball" ] }, /* 70 */ { "x" : 510, "y" : 75, "cMask" : ["ball" ] }, /* 71 */ { "x" : 510, "y" : 90, "cMask" : ["ball" ] } ], "segments" : [ { "v0" : 0, "v1" : 3, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 4, "v1" : 5, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 6, "v1" : 7, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 8, "v1" : 11, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 12, "v1" : 13, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 14, "v1" : 15, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 16, "v1" : 19, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 20, "v1" : 21, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 22, "v1" : 23, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 24, "v1" : 27, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 28, "v1" : 29, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 30, "v1" : 31, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 32, "v1" : 35, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 36, "v1" : 37, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 38, "v1" : 39, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 40, "v1" : 43, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 44, "v1" : 45, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 46, "v1" : 47, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 48, "v1" : 51, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 52, "v1" : 53, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 54, "v1" : 55, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 56, "v1" : 59, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 60, "v1" : 61, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 62, "v1" : 63, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 64, "v1" : 67, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 68, "v1" : 69, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 70, "v1" : 71, "cMask" : ["ball" ], "color" : "FFFFFF" }, { "v0" : 5, "v1" : 6, "cMask" : [ ], "color" : "FF0000" }, { "v0" : 13, "v1" : 14, "cMask" : [ ], "color" : "FF7700" }, { "v0" : 21, "v1" : 22, "cMask" : [ ], "color" : "FFFF00" }, { "v0" : 29, "v1" : 30, "cMask" : [ ], "color" : "55FF55" }, { "v0" : 37, "v1" : 38, "cMask" : [ ], "color" : "DD00" }, { "v0" : 45, "v1" : 46, "cMask" : [ ], "color" : "FFFF" }, { "v0" : 53, "v1" : 54, "cMask" : [ ], "color" : "6666FF" }, { "v0" : 61, "v1" : 62, "cMask" : [ ], "color" : "DD" }, { "v0" : 69, "v1" : 70, "cMask" : [ ], "color" : "FF00FF" }, { "v0" : 5, "v1" : 6, "bCoef" : 0.1, "curve" : 178, "curveF" : 0.017455064928217672, "cMask" : ["ball" ] }, { "v0" : 13, "v1" : 14, "bCoef" : 0.1, "curve" : 178, "curveF" : 0.017455064928217672, "cMask" : ["ball" ] }, { "v0" : 21, "v1" : 22, "bCoef" : 0.1, "curve" : 178, "curveF" : 0.017455064928217672, "cMask" : ["ball" ] }, { "v0" : 29, "v1" : 30, "bCoef" : 0.1, "curve" : 178, "curveF" : 0.017455064928217672, "cMask" : ["ball" ] }, { "v0" : 37, "v1" : 38, "bCoef" : 0.1, "curve" : 178, "curveF" : 0.017455064928217672, "cMask" : ["ball" ] },{ "v0" : 45, "v1" : 46, "bCoef" : 0.1, "curve" : 178, "curveF" : 0.017455064928217672, "cMask" : ["ball" ] }, { "v0" : 53, "v1" : 54, "bCoef" : 0.1, "curve" : 178, "curveF" : 0.017455064928217672, "cMask" : ["ball" ] }, { "v0" : 61, "v1" : 62, "bCoef" : 0.1, "curve" : 178, "curveF" : 0.017455064928217672, "cMask" : ["ball" ] },{ "v0" : 69, "v1" : 70, "bCoef" : 0.1, "curve" : 178, "curveF" : 0.017455064928217672, "cMask" : ["ball" ] }], "planes" : [], "goals" : [{ "p0" : [439,271 ], "p1" : [343,386 ], "team" : "red" }, { "p0" : [162,490 ], "p1" : [15,516 ], "team" : "red" }, { "p0" : [-190,480 ], "p1" : [-320,405 ], "team" : "red" }, { "p0" : [-454,245 ], "p1" : [-505,104 ], "team" : "red" }, { "p0" : [-505,-104 ], "p1" : [-454,-245 ], "team" : "red" }, { "p0" : [-320,-405 ], "p1" : [-190,-480 ], "team" : "red" }, { "p0" : [15,-516 ], "p1" : [162,-490 ], "team" : "red" }, { "p0" : [343,-386 ], "p1" : [439,-271 ], "team" : "red" }, { "p0" : [510,-75 ], "p1" : [510,75 ], "team" : "red" } ], "discs" : [ { "radius" : 9.2, "bCoef" : 1, "damping" : 0.991, "color" : "EDED09", "cGroup" : ["ball","kick","score" ] }, { "pos" : [439,271 ], "radius" : 8, "invMass" : 0 }, { "pos" : [343,386 ], "radius" : 8, "invMass" : 0 }, { "pos" : [162,490 ], "radius" : 8, "invMass" : 0 }, { "pos" : [15,516 ], "radius" : 8, "invMass" : 0 }, { "pos" : [-190,480 ], "radius" : 8, "invMass" : 0 }, { "pos" : [-320,405 ], "radius" : 8, "invMass" : 0 }, { "pos" : [-454,245 ], "radius" : 8, "invMass" : 0 }, { "pos" : [-505,104 ], "radius" : 8, "invMass" : 0 }, { "pos" : [-505,-104 ], "radius" : 8, "invMass" : 0 }, { "pos" : [-454,-245 ], "radius" : 8, "invMass" : 0 }, { "pos" : [-320,-405 ], "radius" : 8, "invMass" : 0 }, { "pos" : [-190,-480 ], "radius" : 8, "invMass" : 0 }, { "pos" : [15,-516 ], "radius" : 8, "invMass" : 0 }, { "pos" : [162,-490 ], "radius" : 8, "invMass" : 0 },{ "pos" : [343,-386 ], "radius" : 8, "invMass" : 0 }, { "pos" : [439,-271 ], "radius" : 8, "invMass" : 0 }, { "pos" : [510,-75 ], "radius" : 8, "invMass" : 0 }, { "pos" : [510,75 ], "radius" : 8, "invMass" : 0 } ], "playerPhysics" : { "bCoef" : 0, "invMass" : 1e+26, "kickStrength" : 8.5 }, "ballPhysics" : "disc0", "redSpawnPoints" : [ [ -470, 170 ], [ -470, -170 ], [ -245, 435 ], [ -245, -435 ], [ 86, 490 ], [ 86, -490 ], [ 380, 325 ], [ 380, -325 ], [ 500, 0 ] ], "blueSpawnPoints" : [ [ 500, 0 ], [ 380, -325 ], [ 380, 325 ], [ 86, -490 ], [ 86, 490 ], [ -245, -435 ], [ -245, 435 ],[ -470, -170],[ -470, 170]],"traits" : {}}`
var rambo10 = `{"name":"10 MAN STRONG RAMBO","width":650,"height":650,"bg":{"type":"grass","width":650,"height":650},"vertexes":[{"x":568,"y":90,"cMask":["ball"]},{"x":564,"y":104,"cMask":["ball"]},{"x":517,"y":247,"cMask":["ball"]},{"x":513,"y":261,"cMask":["ball"]},{"x":513,"y":261,"cMask":["ball"]},{"x":504,"y":273,"cMask":["ball"]},{"x":416,"y":395,"cMask":["ball"]},{"x":407,"y":407,"cMask":["ball"]},{"x":407,"y":407,"cMask":["ball"]},{"x":395,"y":416,"cMask":["ball"]},{"x":273,"y":504,"cMask":["ball"]},{"x":261,"y":513,"cMask":["ball"]},{"x":261,"y":513,"cMask":["ball"]},{"x":247,"y":517,"cMask":["ball"]},{"x":104,"y":564,"cMask":["ball"]},{"x":90,"y":568,"cMask":["ball"]},{"x":90,"y":568,"cMask":["ball"]},{"x":75,"y":568,"cMask":["ball"]},{"x":-75,"y":568,"cMask":["ball"]},{"x":-90,"y":568,"cMask":["ball"]},{"x":-90,"y":568,"cMask":["ball"]},{"x":-104,"y":564,"cMask":["ball"]},{"x":-247,"y":517,"cMask":["ball"]},{"x":-261,"y":513,"cMask":["ball"]},{"x":-261,"y":513,"cMask":["ball"]},{"x":-273,"y":504,"cMask":["ball"]},{"x":-395,"y":416,"cMask":["ball"]},{"x":-407,"y":407,"cMask":["ball"]},{"x":-407,"y":407,"cMask":["ball"]},{"x":-416,"y":395,"cMask":["ball"]},{"x":-504,"y":273,"cMask":["ball"]},{"x":-513,"y":261,"cMask":["ball"]},{"x":-513,"y":261,"cMask":["ball"]},{"x":-517,"y":247,"cMask":["ball"]},{"x":-564,"y":104,"cMask":["ball"]},{"x":-568,"y":90,"cMask":["ball"]},{"x":-568,"y":90,"cMask":["ball"]},{"x":-568,"y":75,"cMask":["ball"]},{"x":-568,"y":-75,"cMask":["ball"]},{"x":-568,"y":-90,"cMask":["ball"]},{"x":-568,"y":-90,"cMask":["ball"]},{"x":-564,"y":-104,"cMask":["ball"]},{"x":-517,"y":-247,"cMask":["ball"]},{"x":-513,"y":-261,"cMask":["ball"]},{"x":-513,"y":-261,"cMask":["ball"]},{"x":-504,"y":-273,"cMask":["ball"]},{"x":-416,"y":-395,"cMask":["ball"]},{"x":-407,"y":-407,"cMask":["ball"]},{"x":-407,"y":-407,"cMask":["ball"]},{"x":-395,"y":-416,"cMask":["ball"]},{"x":-273,"y":-504,"cMask":["ball"]},{"x":-261,"y":-513,"cMask":["ball"]},{"x":-261,"y":-513,"cMask":["ball"]},{"x":-247,"y":-517,"cMask":["ball"]},{"x":-104,"y":-564,"cMask":["ball"]},{"x":-90,"y":-568,"cMask":["ball"]},{"x":-90,"y":-568,"cMask":["ball"]},{"x":-75,"y":-568,"cMask":["ball"]},{"x":75,"y":-568,"cMask":["ball"]},{"x":90,"y":-568,"cMask":["ball"]},{"x":90,"y":-568,"cMask":["ball"]},{"x":104,"y":-564,"cMask":["ball"]},{"x":247,"y":-517,"cMask":["ball"]},{"x":261,"y":-513,"cMask":["ball"]},{"x":261,"y":-513,"cMask":["ball"]},{"x":273,"y":-504,"cMask":["ball"]},{"x":395,"y":-416,"cMask":["ball"]},{"x":407,"y":-407,"cMask":["ball"]},{"x":407,"y":-407,"cMask":["ball"]},{"x":416,"y":-395,"cMask":["ball"]},{"x":504,"y":-273,"cMask":["ball"]},{"x":513,"y":-261,"cMask":["ball"]},{"x":513,"y":-261,"cMask":["ball"]},{"x":517,"y":-247,"cMask":["ball"]},{"x":564,"y":-104,"cMask":["ball"]},{"x":568,"y":-90,"cMask":["ball"]},{"x":568,"y":-90,"cMask":["ball"]},{"x":568,"y":-75,"cMask":["ball"]},{"x":568,"y":75,"cMask":["ball"]},{"x":568,"y":90,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":7,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"cMask":["ball"],"color":"FFFFFF"},{"v0":10,"v1":11,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"cMask":["ball"],"color":"FFFFFF"},{"v0":18,"v1":19,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":23,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":31,"cMask":["ball"],"color":"FFFFFF"},{"v0":32,"v1":33,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":35,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":39,"cMask":["ball"],"color":"FFFFFF"},{"v0":40,"v1":41,"cMask":["ball"],"color":"FFFFFF"},{"v0":42,"v1":43,"cMask":["ball"],"color":"FFFFFF"},{"v0":44,"v1":47,"cMask":["ball"],"color":"FFFFFF"},{"v0":48,"v1":49,"cMask":["ball"],"color":"FFFFFF"},{"v0":50,"v1":51,"cMask":["ball"],"color":"FFFFFF"},{"v0":52,"v1":55,"cMask":["ball"],"color":"FFFFFF"},{"v0":56,"v1":57,"cMask":["ball"],"color":"FFFFFF"},{"v0":58,"v1":59,"cMask":["ball"],"color":"FFFFFF"},{"v0":60,"v1":63,"cMask":["ball"],"color":"FFFFFF"},{"v0":64,"v1":65,"cMask":["ball"],"color":"FFFFFF"},{"v0":66,"v1":67,"cMask":["ball"],"color":"FFFFFF"},{"v0":68,"v1":71,"cMask":["ball"],"color":"FFFFFF"},{"v0":72,"v1":73,"cMask":["ball"],"color":"FFFFFF"},{"v0":74,"v1":75,"cMask":["ball"],"color":"FFFFFF"},{"v0":76,"v1":79,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"cMask":[],"color":"FF3333"},{"v0":9,"v1":10,"cMask":[],"color":"FF6600"},{"v0":17,"v1":18,"cMask":[],"color":"FFFF00"},{"v0":25,"v1":26,"cMask":[],"color":"33FF33"},{"v0":33,"v1":34,"cMask":[],"color":"DD00"},{"v0":41,"v1":42,"cMask":[],"color":"DD"},{"v0":49,"v1":50,"cMask":[],"color":"3333FF"},{"v0":57,"v1":58,"cMask":[],"color":"FF33FF"},{"v0":65,"v1":66,"cMask":[],"color":"DD00DD"},{"v0":73,"v1":74,"cMask":[],"color":"DD0000"},{"v0":1,"v1":2,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":25,"v1":26,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":33,"v1":34,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":41,"v1":42,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":49,"v1":50,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":57,"v1":58,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":65,"v1":66,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]},{"v0":73,"v1":74,"bCoef":0.1,"curve":178,"curveF":0.017455064928217672,"cMask":["ball"]}],"planes":[],"goals":[{"p0":[564,104],"p1":[517,247],"team":"red"},{"p0":[395,416],"p1":[273,504],"team":"red"},{"p0":[75,568],"p1":[-75,568],"team":"red"},{"p0":[-273,504],"p1":[-395,416],"team":"red"},{"p0":[-517,247],"p1":[-564,104],"team":"red"},{"p0":[-564,-104],"p1":[-517,-247],"team":"red"},{"p0":[-395,-416],"p1":[-273,-504],"team":"red"},{"p0":[-75,-568],"p1":[75,-568],"team":"red"},{"p0":[273,-504],"p1":[395,-416],"team":"red"},{"p0":[517,-247],"p1":[564,-104],"team":"red"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[564,104],"radius":8,"invMass":0},{"pos":[517,247],"radius":8,"invMass":0},{"pos":[395,416],"radius":8,"invMass":0},{"pos":[273,504],"radius":8,"invMass":0},{"pos":[75,568],"radius":8,"invMass":0},{"pos":[-75,568],"radius":8,"invMass":0},{"pos":[-273,504],"radius":8,"invMass":0},{"pos":[-395,416],"radius":8,"invMass":0},{"pos":[-517,247],"radius":8,"invMass":0},{"pos":[-564,104],"radius":8,"invMass":0},{"pos":[-564,-104],"radius":8,"invMass":0},{"pos":[-517,-247],"radius":8,"invMass":0},{"pos":[-395,-416],"radius":8,"invMass":0},{"pos":[-273,-504],"radius":8,"invMass":0},{"pos":[-75,-568],"radius":8,"invMass":0},{"pos":[75,-568],"radius":8,"invMass":0},{"pos":[273,-504],"radius":8,"invMass":0},{"pos":[395,-416],"radius":8,"invMass":0},{"pos":[517,-247],"radius":8,"invMass":0},{"pos":[564,-104],"radius":8,"invMass":0}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","redSpawnPoints":[[-535,175],[-535,-175],[-335,455],[-335,-455],[0,565],[0,-565],[335,455],[335,-455],[535,-175],[535,175]],"blueSpawnPoints":[[535,175],[535,-175],[335,-455],[335,455],[0,-565],[0,565],[-335,-455],[-335,455],[-535,-175],[-535,175]]}`


room.setTeamsLock(true);

var afkPlayers = [];
var mutedPlayers = [];
var lastPlayersTouched = [];
var paused = false;
var usefulAuths = ["5e0a9QTUP7f3iNCwcONEmiOCgRoarLNJZFAHDJvMssU"]
var allPlayerAuths = {}
var adminLogin = {}

var redColor = 0xc33720;
var blueColor = 0x6864ec;
var greenColor = 0x33bb25;
var yellowColor = 0xFFD300;
var color = 0x1e81b0;
var whiteColor = 0xFFFFFF;

// If there are no admins left in the room give admin to one of the remaining players.
// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
//   Get all players
  var players = room.getPlayerList();
  var admins = [];
  if ( players.length === 1 ) return; // No players left, do nothing.
  for (var i = 0; i < players.length; i++){
    if (players[i].admin){
        admins.push(players[i]);
    }
  }
  if (admins.length >= 2) return; //someone has admin besides the host.
  for (var i = 0; i < admins.length; i++){
    var index = players.indexOf(admins[i]);
    players.splice(index, 1);
  }
  room.setPlayerAdmin(players[0].id, true);
}

function pingPlayer(name){
    return "@"+name.replace(/ /g, "_");
}

function moveAllToSpectators(team_id){
    var players = room.getPlayerList();
    for (var i = 0; i < players.length; i++){
        if (players[i].team === team_id){
            room.setPlayerTeam(players[i].id, 0);
        }
    }
}

function movePlayer(player, params, team){
    if (params.length === 0){
        room.setPlayerTeam(player.id, team);
    }

    else{
        var target = params[0];
        var players = room.getPlayerList();
        for (var i = 0; i < players.length; i++){
            if (pingPlayer(players[i].name) === target){
                room.setPlayerTeam(players[i].id, team)
                return;
            }
        }
    }
}

function banKick(player, params, ban, message){
    if (params.length === 0){
        room.sendChat("(DM) Specify a person that should be "+message+"!", player.id);
        return;
    }

    var players = room.getPlayerList();
    for (var i = 0; i < players.length; i++){
        if (pingPlayer(players[i].name) === params[0]){
            room.kickPlayer(players[i].id, player.name+" "+message+" you!", ban)
        }
    }
}

function updateList(player){
    console.log(lastPlayersTouched.length);
    if (lastPlayersTouched.length === 0 || lastPlayersTouched[lastPlayersTouched.length-1].id != player.id){
        lastPlayersTouched.push(player);
    }

    if (lastPlayersTouched.length > 2){
        for (var i = 0; i < lastPlayersTouched.length-2; i++){
            lastPlayersTouched.shift()
        }
    }
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function playerTouch(){
    var players = room.getPlayerList();
    for (var i = 0; i < players.length; i++){
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, room.getBallPosition());
            if (distanceToBall < 25.01) {
                updateList(players[i])
            }
        }
    }
}

function sendAnnouncementToDiscord(params, webhook=room.getConfig().webhookUrl) {
    var request = new XMLHttpRequest();

    request.open("POST", webhook);
    request.setRequestHeader('Content-type', "application/json");
    request.send(JSON.stringify(params));
}

room.onAdminChange = function(byPlayer){
    var players = room.getPlayerList();
    var admins = players.find((player) => player.admin)
    if (admins.length === 0){
        room.setPlayerAdmin(changedPlayer.id, true)
        room.sendChat(pingPlayer(changedPlayer.name)+" you can't remove your admin when you're the only admin in the room!")
    }
}

room.onGamePause = function(byPlayer){
    paused = true;
}

room.onGameUnpause = function(byPlayer){
    paused = false;
}

room.onPlayerJoin = function(player) {
    room.sendChat("Welcome "+pingPlayer(player.name)+" to the HSN room! To see a list of commands, type '.help'.");
    updateAdmins();
    allPlayerAuths[player.id] = player.auth;
}

room.onPlayerLeave = function(player) {
    updateAdmins();
    delete allPlayerAuths[player.id]
}


room.onPlayerTeamChange = function(player, byPlayer){
    if (afkPlayers.includes(player.id) && player.team != 0){
        room.sendChat(pingPlayer(byPlayer.name)+" sorry, but "+pingPlayer(player.name)+" is afk!")
        room.setPlayerTeam(player.id, 0);
    }
}

room.onPlayerBallKick = function(player){
    updateList(player)
}

room.onTeamGoal = function(team){
    last = lastPlayersTouched.length-1
    var scoredTeam = (team === 1) ? 'red' : 'blue';

    if (lastPlayersTouched[last].team != team){
        string = "Own Goal scored by "+pingPlayer(lastPlayersTouched[last].name)+" for "+scoredTeam+"."
    }
    else {
        string = "Goal scored by "+pingPlayer(lastPlayersTouched[last].name)+" for "+scoredTeam+"."
        if (lastPlayersTouched.length >= 2 && lastPlayersTouched[last-1].team === team) {
            string = "Goal scored by "+pingPlayer(lastPlayersTouched[last].name)+" ("+lastPlayersTouched[last-1].name+") for "+scoredTeam+"."}
        }

    var minutes = Math.floor(room.getScores().time/60)
    var seconds = Number(room.getScores().time % 60).toFixed(0);
    if (seconds.toString().length === 1){
        seconds = "0"+seconds
    }

    string = "["+minutes+":"+seconds+"] "+string
    room.sendChat(string)
    lastPlayersTouched = [];
}

room.onGameStop = function(byPlayer){
    lastPlayersTouched = [];
}

room.onPlayerChat = function (player, message) {
    if (mutedPlayers.includes(player.id)) return false;
    var split_message = message.split(" ");
    var command = split_message[0].substring(1).toLowerCase();
    var params = split_message.slice(1)

    if (split_message[0] === "t"){
        var message = params.join(" ")
        colors_dict = {0: 0xFFFFFF, 1: 0xe86c54, 2: 0x588ce4}

        var players = room.getPlayerList();
        var arrayLength = players.length;
        for (var i = 0; i < arrayLength; i++){
            var potentialTeammate = players[i];
            if (potentialTeammate.team === player.team){
                room.sendAnnouncement("[Team Chat] "+player.name+": "+message, potentialTeammate.id, colors_dict[player.team])
            }
        }
        return false;
    }
    // team chat no?

    if (!([".", "!"].includes(split_message[0].charAt(0)))) return;

    if (["afk"].includes(command)){
        if (afkPlayers.includes(player.id)){
            var index = afkPlayers.indexOf(player.id);
            afkPlayers.splice(index, 1)
            room.sendChat(pingPlayer(player.name)+" is no longer afk!")
        }
        else {
            afkPlayers.push(player.id)
            room.sendChat(pingPlayer(player.name)+" is now afk!")
            room.setPlayerTeam(player.id, 0);
        }
    }

    else if (["bb"].includes(command)){
        room.kickPlayer(player.id, "GGs!", false)
    }

    else if (["login"].includes(command)){
        if (adminLogin[params[0]]){
            room.setPlayerAdmin(player.id, true)
            room.sendChat(adminLogin[params[0]]+" has logged in!")
        }
        return false
    }

    else if (["setcode"].includes(command)){
        if (usefulAuths.includes(allPlayerAuths[player.id])){
            adminLogin[params[0]] = params[1]
            room.sendChat("(DM) Set code!", player.id)
        }
        return false;
    }

    else if (["rcode"].includes(command)){
        if (usefulAuths.includes(allPlayerAuths[player.id])){
            delete adminLogin[params[0]]
            room.sendChat("(DM) Removed code!", player.id)
        }
        return false;
    }

    else if (["help"].includes(command)){
        command_desc =
        {
            "afk": "Makes you AFK, meaning you cannot join red or blue team. To un-afk, type .afk again.",
            "bb": "Kicks you from the game.",
            "red": "Moves all players on the red team to spectator.",
            "r": "Moves you (or another player to the red team). EG: '.r', '.r @Nfab'.",
            "b": "Moves you (or another blue to the red team). EG: '.b', '.b @Nfab'.",
            "blue": "Moves all players on the blue team to spectator.",
            "swap": "Stops the game, moves all the red team players to the blue team and the blue team players to the red team, then restarts the game.",
            "re": "Stops and restarts the game. Also called 'rr'.",
            "start": "Starts the game.",
            "stop": "Stops the game. Also called 'end' and 'e.'",
            "pause": "Pauses/unpauses the game. Also called 'p'.",
            "clear": "Clears bans.",
            "time": "Sets the time limit. EG: '.time 5'",
            "score": "Sets the score limit. EG: '.score 0 '",
            "mute": "Prevents a player from typing. EG: '.mute @Nfab'",
            "kick": "Kicks a player from the room. EG: '.kick @Nfab'",
            "ban": "Bans a player from the room. EG: '.ban @Nfab'",
            "admin": "Makes a player admin or removes their admin. EG: '.admin @Nfab'",
            "map": "Stops the game, sets the map, and restarts the game. Also called 'm'. To see the maps you can load, type '.help maps'. EG: '.m b'.",
            "maps": "c for classic, m for medium, b, for big, sc for strongball classic, sm for strongball medium, sb for strongball big. For rambo maps, type r and then the number of people. EG: '.m b' or `.m r5`"
        }
        if (command_desc[params[0]]){
            room.sendAnnouncement("(DM) "+ command_desc[params[0]], player.id, color)
        }
        else {
            room.sendAnnouncement("(DM) .afk | .bb* | .red* | .blue* | .r* | .b* | .s* | .swap* | .re* | .start* | .stop* | .pause* | .clear* | .time* | .score* | .map*",
            player.id, color)
            room.sendAnnouncement("(DM) Don't know what a command does? Type '.help command', eg: '.help time'. * means it is admin-only. When typing '.help command', don't include the *. To team chat, type 't <message>'.",
            player.id, color)

        }
    }

    if (player.admin)
    {
        if (["red"].includes(command)){
            moveAllToSpectators(1);
        }

        else if (["blue"].includes(command)){
            moveAllToSpectators(2);
        }

        else if (["r"].includes(command)){
            movePlayer(player, params, 1);
        }

        else if (["b"].includes(command)){
            movePlayer(player, params, 2);
        }

        else if (["s"].includes(command)){
            movePlayer(player, params, 0);
        }

        else if (["swap"].includes(command)){
            room.stopGame();
            var players = room.getPlayerList();
            for (i = 0; i < players.length; i++){
                var player = players[i];
                if (player.id === 1) {room.setPlayerTeam(player.id, 2)}
                else if (player.id === 2) {room.setPlayerTeam(player.id, 1)}
            }
            room.startGame();
        }

        else if (["re", "rr"].includes(command)){
            room.stopGame();
            room.startGame();
        }

        else if (["stop", "end", "e"].includes(command)){
            room.stopGame();
        }

        else if (["start"].includes(command)){
            room.startGame();
        }

        else if (["pause", "p"].includes(command)){
            room.pauseGame(!paused);
        }

        else if (["clear", "clearbans"].includes(command)){
            room.clearBans();
            room.sendChat("(DM) All bans have been cleared!", player.id)
        }

        else if (["time"].includes(command)){
            room.stopGame();
            var time = parseInt(params[0]);
            if (Number.isInteger(time)){
                room.setTimeLimit(time);
            }
        }

        else if (["score"].includes(command)){
            room.stopGame();
            var score = parseInt(params[0]);
            if (Number.isInteger(score)){
                room.setScoreLimit(score);
            }
        }

        else if (["mute"].includes(command)){
            if (params.length === 0){
                room.sendChat("(DM) Specify a person to mute!", player.id)
                return;
            }
            var players = room.getPlayerList();
            for (var i = 0; i < players.length; i++){
                if (pingPlayer(players[i].name) === params[0]){
                    if (!players[i].admin){
                        if (mutedPlayers.includes(players[i].id)){
                            var index = afkPlayers.indexOf(players[i].id);
                            mutedPlayers.splice(index, 1)
                            room.sendChat(pingPlayer(players[i].name)+" is now unmuted!")
                        }
                        else {
                            mutedPlayers.push(players[i].id)
                            room.sendChat(pingPlayer(players[i].name)+" is now muted!")
                        }
                    }

                    else room.sendChat(pingPlayer(player.name)+", you can't mute an admin!")
                }
            }
        }

        else if (["ban"].includes(command)){
            banKick(player, params, true, "banned")
        }

        else if (["kick"].includes(command)){
            banKick(player, params, false, "kicked")
        }

        else if (["admin"].includes(command)){
            if (params.length === 0){
                room.sendChat("(DM) Specify a person to make an admin!", player.id);
                return;
            }
            var players = room.getPlayerList();
            for (var i = 0; i < players.length; i++){
                if (pingPlayer(players[i].name) === params[0]){
                    room.setPlayerAdmin(players[i].id, !players[i].admin);
                }
            }

        }

        else if (["map", "m"].includes(command)){
            mapNames = {"c": "Classic", "m": medium, "b": "Big", "sc": strongballClassic, "s": strongballClassic,
                        "sm": strongballMedium, "sb": strongballBig, "r2": rambo2, "r3": rambo3, "r4": rambo4,
                        "r5": rambo5, "r6": rambo6, "r7": rambo7, "r8": rambo8, "r9": rambo9, "r10": rambo10}

            if (params.length === 0 || mapNames[params[0].toLowerCase()] === undefined){
                 room.sendChat("(DM) That's not a map you can load! Type '.help maps' to see.", player.id)
                 return;
            }

            map = mapNames[params[0].toLowerCase()]
            room.stopGame();

            if (map.includes("{")) room.setCustomStadium(map);
            else room.setDefaultStadium(map);

            room.startGame();
            if (params[0] == "r"){
                room.pauseGame(true)
                room.pauseGame(false)
            }
        }
        return false
    }
}


room.onGameTick = function(){
    playerTouch();
}
