/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
exports.nav = function(req, res){
	var GitHubApi = require("github");
	var github = new GitHubApi({
	    // optional args
	    debug: true,
	    protocol: "https",
	    host: "api.github.com", // should be api.github.com for GitHub
	    //pathPrefix: "/api/v3", // for some GHEs; none for GitHub
	    headers: {
	        "user-agent": "GDAT" // GitHub is happy with a unique user agent
	    },
	   // Promise: require('bluebird'),
	    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
	    timeout: 5000
	});
	github.authenticate({
	    type: "oauth",
	    key: "ddbe09abf5e7ff890520",
	    secret: "4efaf61bf7af74a2558fa6776f11721f70d3ccb4"
	});

	github.search.users({
		q: "hirenvaghas"
	},app.get('nav',function(req, res, next) {
		
			res.json({user:""});
		}));
	github.repos.getForUser({
		user: "hirenvaghasiya"
	},function(err,pgres){
		
		for (var i = 0; i< pgres.length; i++)
			{
				console.log(JSON.stringify(pgres[i].name));
			}
		
		
	});
  res.render('nav', { title: 'Express' });
};