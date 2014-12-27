var candyMachine =  require("./hardware");
var app = require("./server");
app.candyMachine = candyMachine;

// Twitter stuff.
require("./configure")(app);
app.configure();

var startTwitterListener = function(){

var stream = app.T.stream('statuses/filter', { track: 'RaspberryPi' })

stream.on('tweet', function (tweet) {
	if(!tweet.retweeted_status){
	  console.log(tweet.user.name + ': ' + tweet.text);
	  console.log(' ');
	  if(app.candyMachine){
		  app.candyMachine.dispense();
		}
	} else{
	  console.warn('RT doesn\'t count '+ tweet.user.name);
	}
});

stream.on('limit', function (limitMessage) {
  	console.error('Dave, you\'re hitting the twitter limit.');
});

// on error try again.
stream.on('error', function(){
  setTimeout( startTwitterListener , 5000);
});

}

// first attempt:
setTimeout( startTwitterListener , 2000);

