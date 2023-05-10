
const parameter = process.argv.slice(2);
let time = parameter.filter(number => { return number > 0})

const timer = function () {
	//const argv = process.argv.slice(2)
	time = time * 1000; 
	

	setTimeout(() => { console.log('\n \n !!! Times up !!! \n \n'); process.stdout.write(require("child_process").exec("afplay /System/Library/Sounds/Glass.aiff"))}, time);


}
timer()