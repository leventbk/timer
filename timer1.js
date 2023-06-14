const timer = function() {
  const parameter = process.argv.slice(2);
  let time = parameter.filter(number => {
    return number > 0;
  });
	time = time.map(number => number * 1000);

  //I've used this code snippet for using system sound for macOS
  setTimeout(() => {
    console.log('\n \n !!! Times up !!! \n \n'); 
    require("child_process").exec("afplay /System/Library/Sounds/Glass.aiff");
  }, time);

};
timer();