var piblaster = require("pi-blaster.js");

// servo wiring colours: brown negative, red [ositive, orange signal
var hardware = {
	candy:{},
	servo:{
	// 0.2 is far left
	// 0.15 is center
	// 0.1 is far right
	  closedAngle: 0.184,
	  openAngle:  0.1,
	  open: function(){
	   console.log('open');	  
	   piblaster.setPwm(4, this.openAngle);
	  },
	  close: function(){
	   console.log("close");
	    piblaster.setPwm(4, this.closedAngle);
	  }
	}
};
console.info('start hardware');

hardware.candy.dispense = function(){
    console.log('dispense Candy');
    hardware.servo.open();
    setTimeout(function(){ 
      hardware.servo.close();
    }, 300);
};

hardware.candy.open = function(){
  console.log('open Candy wide');
  hardware.servo.openAngle -= 0.02;  
  hardware.servo.open();
  hardware.servo.openAngle += 0.02;  
};

hardware.candy.close = function(){
    console.log('close Candy');
    hardware.servo.close();
};


module.exports = hardware.candy;

