var Gpio = require('onoff').Gpio,
  sleep = require('sleep'),
  photo = new Gpio(5, 'in', 'rising'),
  print = new Gpio(6, 'in', 'rising'),
  tweet = new Gpio(4, 'in', 'rising');

print.watch(function(err, value) {
  console.log('print');
  sleep.sleep(2);
  console.log(42);
});

tweet.watch(function(err, value) {
  console.log('tweet');
  sleep.sleep(2);
  console.log(42);
});

photo.watch(function(err, value) {
  console.log('photo');
  sleep.sleep(2);
  console.log(42);
});