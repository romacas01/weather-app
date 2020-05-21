const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=3559819a3b6c251864762b27dd6b2d23&query=51.507351,-0.127758'

request({ url: url, json: true}, (error,response) => {
	console.log("It is currently " + response.body.current.temperature + " degrees. It feels like " + response.body.current.feelslike);
})