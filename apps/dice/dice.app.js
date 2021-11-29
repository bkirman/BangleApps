var Layout = require("Layout");
var last = 6;
require("Font8x12").add(Graphics);

function getD6(){
  return atob("GBiEAAAAAAAAAAAAAAAAAAAAAAACIiIgAAAAAAAAAAIiIiIiIAAAAAAAIiIiMzMiIiIAAAAyIiIi//8iIiIjAAMzMiIiIzIiIiMzMAIzMzIiIiIiIzMyQAIiIzMzIiIzMzJEQAIiIiIzMzMzJEREQAIiIiIiMzMkREREQAIiIiLzIzREREREQAIiIiP/IzREPyREQAIiIyL/IzRE/yREQAIiL/IiIzRE80REQAIiL/IiIzRERELzQAL/IzIiIzREREPzQAL/MiIiIzREREPyQAI/IiIiIzREREREQAIiIiIiIzREREREQAACIiIiIzRERERAAAAAAiIiIzREREAAAAAAAAIiIzREQAAAAAAAAAACIzRAAAAAAAAAAAAAAAAAAAAAAA==");
}

var layout = new Layout( {
  type:"v", c: [
    {type:"txt", font:"8x12:4", label:"Roll:", id:"label"},
    {type:"h",c:[
      {type:"btn", font:"8x12:2", label:"  d4 ", cb: l=>roll(4)},
      {type:"btn", font:"8x12:2", label:" d6  ", cb: l=>roll(6)},
    ]},
    {type:"h",c:[
      {type:"btn", font:"8x12:2", label:"  d8 ", cb: l=>roll(8)},
      {type:"btn", font:"8x12:2", label:" d10 ", cb: l=>roll(10)},
    ]},
    {type:"h",c:[
      {type:"btn", font:"8x12:2", label:" d12 ", cb: l=>roll(12)},
      {type:"btn", font:"8x12:2", label:" d20 ", cb: l=>roll(20)},
    ]}
  ]
});
function roll(x) {
  last = x;
  layout.label.label = "d"+x+": " +(1+Math.random()*x).toFixed(0);
  g.clear();
  layout.render();
  //g.drawImage(getD6(),10,10);
}
Bangle.on('gesture', function(xyz) {
  if(xyz.length > 36) { //How complex (i.e. shaky) the gesture was - reduce to increase sensitivity
    roll(last);
    Bangle.buzz();
  }
});
g.clear();
layout.render();
