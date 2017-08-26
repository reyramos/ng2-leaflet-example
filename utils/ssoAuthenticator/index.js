const request = require('request');
const defaults = require('./defaults.json');
const _ = require('lodash');

function SSOConnection(opts){
	var _defaults_ = defaults;
	var opts = opts || {};
	
	this.options =  _.merge(_defaults_, opts);
	
	
	
	if(! this.options.profile.credentials || ! this.options.profile.credentials.username || ! this.options.profile.credentials.password)
		throw "No Profile Provided";
}

SSOConnection.prototype.connect = connect;

/* 
 * Public Methods
 * ------------------------------------------------------------------------- 
*/
function connect(callback){
	var that = this;	
	
	setInterval(function () {
		doCallback();
	}, parseInt( this.options.refreshInterval) );
	
	doCallback();
	
	function doCallback(){
		request.post(that.options.authenticationUrl, {
			strictSSL : false,
			form : {
				USER : getUsername(that.options.profile),
				PASSWORD : getPassword(that.options.profile),
				TARGET: that.options.target,
		        OK: that.options.ok
			}
		})
		.on('response', function (response) {
			var ssoCookies = response.headers['set-cookie'];		
			callback(ssoCookies);
		}); 
	}
}

/* 
 * Private Methods
 * ------------------------------------------------------------------------- 
*/
function getUsername(profile){
	return profile.credentials.username;
}

function getPassword(profile){
	return profile.credentials.password;
}

module.exports = SSOConnection;