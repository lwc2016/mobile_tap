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