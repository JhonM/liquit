/* jshint node: true */

module.exports = function (environment) {
	var ENV = {
		modulePrefix: 'liquit',
		environment: environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		firebase: {
			apiKey: 'AIzaSyCvNWxn46zR80sA8SpTXjKzUqJNVl8S5PY',
			authDomain: 'liquit-database.firebaseapp.com',
			databaseURL: 'https://liquit-database.firebaseio.com',
			storageBucket: 'liquit-database.appspot.com',
		},
		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		},
		googleFonts: [
			'Open+Sans:300,400,700',
	 		'Gloria+Hallelujah:400'
		],

		// Set or update content security policies
		contentSecurityPolicy: {
			'font-src': "'self' fonts.gstatic.com",
			'style-src': "'self' fonts.googleapis.com"
		}

	};

	if (environment === 'development') {
		 // ENV.APP.LOG_RESOLVER = true;
		 // ENV.APP.LOG_ACTIVE_GENERATION = true;
		 // ENV.APP.LOG_TRANSITIONS = true;
		 // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		 // ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...

		ENV.firebase = 'https://liquit-database.firebaseio.com/';


		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {

	}



	return ENV;
};
