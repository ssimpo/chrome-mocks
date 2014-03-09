"use strict";

var chrome = {};

chrome.runtime = {
	sendMessage: function(){
	},
	onMessage: {
		addListener: function(callback){
			chromeMock.onMessage.push(callback);
		}
	}
}

var chromeMock = {
	onMessage: [],
	onMessageEvent: function(data) {
		chromeMock.onMessage.forEach(function(callback){
			callback(data);
		});
	}
}

