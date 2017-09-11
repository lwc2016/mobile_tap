描述：
在移动端自定义滑屏开发中，会阻止掉浏览器的默认事件:
element.addEventListener("touchstart", function(event){
	event.preventDefault();
});
但使用这用方法会阻止a标签链接跳转，使用touchEvent事件进行页面跳转，会导致一个问题：
屏幕滑动时稍微触碰到a标签，就会进行页面跳转。

使用：tap函数能阻止touch误触，滑屏误触。