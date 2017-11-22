var RaspiCam = require("raspicam");
var datetime = new Date();
console.log(42);
var camera = new RaspiCam({ 
  mode: 'photo',
  output: './photo/' + datetime + '.jpg',
  encoding: 'jpg'
},
console.log(datetime));

camera.start( );