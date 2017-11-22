function test() {
  this.child_process.exec(feh, 'photo/test.jpg');
  setTimeout(console.log(42), 3000);
}

test();