const express = require("express");
const path = require("path");
const app = express();


// 设置静态文件路径
app.use(express.static(path.join(__dirname, "public")));

// 捕获404错误
app.use(function(req, res, next){
	let err = new Error("Error: 404, this source is not found");
	err.status = 404;
	next(err);
});

// 捕获500错误
app.use(function(err, req, res ,next){
	res.status(err.status || 500).send(err.message);
	next();
});

app.listen(3000, function(){
	console.log("Server is starting at port: 3000");
});