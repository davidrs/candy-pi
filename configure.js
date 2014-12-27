var Twit = require('twit');

module.exports = function (app) {

	app.configure = function(){
		app.config = {
			API_BASE_URL: 'http://localhost:3000/'
		};
		app.T = new Twit({
		    consumer_key:         'XXXXXXXXXXXXX',
		  	consumer_secret:      'XXXXXXXXXXXXX',
			 	access_token:         'XXXXXXXXXXXXX',
			 	access_token_secret:  'XXXXXXXXXXXXX'
		});
	};	
};
