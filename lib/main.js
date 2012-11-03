// INCREMENT
  $(function(){
    $('input[type=range]').spinner({decimals:1});
    $(".ui-spinner button").attr("tabindex", "-1");
  });

// KEYPRESS
$("body").keypress(function(event) {
  if ( event.which == 13 ) {
     jsfxgui.play();
   }
});

// JSFX
jsfxgui.createSampleGenerators("sample-generators");
jsfxgui.createConfigurationPanel("config-panel");
jsfxgui.initLogging("log");
jsfxgui.initLibrary("library");
jsfxgui.initField("libload");
jsfxgui.onplay = onplay;

(function(){ // Import GET Vars
  document.$_GET = [];
  var urlHalves = String(document.location).split('?');
  if(urlHalves[1]){
     var urlVars = urlHalves[1].split('&');
     for(var i=0; i<=(urlVars.length); i++){
        if(urlVars[i]){
           var urlVarPair = urlVars[i].split('=');
           var gname  = window.decodeURI(urlVarPair[0]);
           var gvalue = window.decodeURI(urlVarPair[1]);
           document.$_GET[gname] = gvalue;  
        }
     }
  }
})();

var link = document.getElementById("link");
var field  = document.getElementById("libload");

function onplay(){
  this.paramsToField();
  $("body").keypress(function(event) {
    if ( event.which == 112 ) {
       wave.pause();
     }
  });

  link.href = "http://egonelbre.com/js/jsfx/index.html?load=" + window.encodeURI(field.value);
}

var onchange = document.getElementById("playonchange");
jsfxgui.onvaluemodified = play;
function play(){
  if( onchange.checked )
    jsfxgui.play();
}

var val = document.$_GET['load'];
if(val !== undefined){
  document.getElementById('libload').value = val;
  jsfxgui.paramsFromField();
}
