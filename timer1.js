
const parameter = process.argv.slice(2);
let time = parameter.filter(number => {
  return number > 0;
});

const timer = function() {
  //const argv = process.argv.slice(2)
  time = time * 1000; //milisecond to second
	
  //I've used this code snippet for using system sound for macOS
  setTimeout(() => {
    console.log('\n \n !!! Times up !!! \n \n'); process.stdout.write(require("child_process").exec("afplay /System/Library/Sounds/Glass.aiff"));
  }, time);

};
timer();