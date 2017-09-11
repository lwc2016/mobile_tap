(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(window){
	/*
	   tap 需要传递两个参数，第一个是需要点击的元素，第二个是点击后需要执行的回掉函数
	*/
	window.tap = function(element, callback){
		/*
			点击时记录手指坐标，
			手指抬起时记录手指坐标，
			判断两次手指坐标之间的差值小于设定的值时，我们认定它点击了
		*/
		var startPoint = {};
		element.addEventListener("touchstart", function(event){
			startPoint = {
				x: event.changedTouches[0].pageX,
				y: event.changedTouches[0].pageY
			};
		});
		element.addEventListener("touchend", function(end){
			var nowPoint = {
				x: event.changedTouches[0].pageX,
				y: event.changedTouches[0].pageY
			};
			console.log(startPoint, nowPoint);

			if(Math.abs(nowPoint.x - startPoint.x) < 5 && Math.abs(nowPoint.y - startPoint.y) < 5 ){
				console.log("good");
				callback && callback.call(element, event);
			};
		});
	};

	if(typeof module !== "undefined" && module.exports){
		module.exports = tap;
	}else{
		window.tap = tap;
	};
})(window);
},{}],2:[function(require,module,exports){
(function() {
	var tap = require("./tap.js");
    var ul = document.querySelector("#ul");
    ul.addEventListener("touchstart", function(event) {
        event.preventDefault();
    });
    var a = document.querySelectorAll("#ul li a");
    for (var i = 0; i < a.length; i++) {
        tap(a[i], function(){
        	window.location.href = "https://www.sina.com.cn/";
        });
    };
})();
},{"./tap.js":1}]},{},[2]);
