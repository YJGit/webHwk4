var socket = io("https://wall.cgcgbcbc.com");
var _data,
	num = 0,
	_div,
	_divShow
	adminIn = false;
var news = [];
var timeId;
var delayTime = "0.2s"; //动画延迟时间
console.log(socket);

//动态添加div
function addElementDiv(obj, model, num){
	var parent = document.getElementById(obj);
	//添加 div
　　　　var div = document.createElement("div");

　　　　//设置 div 属性，如 id
	if(model === "common"){
		div.setAttribute("id", "message" + num);
	}
	else if(model === "admin"){
		//先找有没有，有则删除
		var divAdmin = document.getElementById("message" + 5);
		if(divAdmin != null){
			divAdmin.parentNode.removeChild(divAdmin);
		}
		div.setAttribute("id", "message" + 5);
	}
	
　　　　div.style.border = "1px solid #696";
	div.style.margin = "10px";
	div.style.padding = "30px 0 30px 0";
	div.style.textAlign = "center";
	div.style.width = "90%";
	div.style.height = "100px";
	if(model === "admin"){
		div.style.background = "#FF6633";
	}
	else{
		div.style.background = "#EEFF99";
	}
	div.style.borderRadius = "8px";
	div.style.webkitBorderRadius = "8px";
	div.style.mozBorderRadius = "8px";
	div.style.boxShadow = "#666 0px 0px 10px";
	div.style.webkitBoxShadow = "#666 0px 0px 10px";
	div.style.mozBoxShadow = "#666 0px 0px 10px";
	div.style.position = "absolute";
	div.style.left = "10px";

	if(model === "common"){
		//num 将要显示
		//新来的总在最下面，加入显示之前判断之前的消息，将其上移
		if(num === 0){
			var adminDiv = document.getElementById("message" + 5);
			//存在admin
			if(adminDiv != null){
				//admin在最下面
				if(adminDiv.style.top === "430px"){
					adminDiv.style.animation = "up1" + " " + delayTime;
					adminDiv.style.mozAnimation = "up1" + " " + delayTime;
					adminDiv.style.wegkitAnimation = "up1" + " " + delayTime;
					adminDiv.style.oAnimation = "up1" + " " + delayTime;

					adminDiv.style.top = "240px";
				}
				//admin在次下面
				else if(adminDiv.style.top === "240px"){
					adminDiv.style.animation = "up2" + " " + delayTime;
					adminDiv.style.mozAnimation = "up2" + " " + delayTime;
					adminDiv.style.wegkitAnimation = "up2" + " " + delayTime;
					adminDiv.style.oAnimation = "up2" + " " + delayTime;

					adminDiv.style.top = "50px";

					//在最下面的块
					var divUnder = document.getElementById("message" + 3);
					if(divUnder != null){
						divUnder.style.animation = "up1" + " " + delayTime;
						divUnder.style.mozAnimation = "up1" + " " + delayTime;
						divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
						divUnder.style.oAnimation = "up1" + " " + delayTime;

						divUnder.style.top = "240px";
					}
				}
				else{//在最上面
					if(adminIn){ //还不能删除
						var divUnder = document.getElementById("message" + 2);
						if(divUnder != null){
							divUnder.parentNode.removeChild(divUnder);
						}
						divUnder = document.getElementById("message" + 3);
						if(divUnder != null){
							divUnder.style.animation = "up1" + " " + delayTime;
							divUnder.style.mozAnimation = "up1" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
							divUnder.style.oAnimation = "up1" + " " + delayTime;

							divUnder.style.top = "240px";
						}
					}
					else{ //可以删除
						adminDiv.parentNode.removeChild(adminDiv);
						var divUnder = document.getElementById("message" + 2);
						if(divUnder != null){
							divUnder.style.animation = "up2" + " " + delayTime;
							divUnder.style.mozAnimation = "up2" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up2" + " " + delayTime;
							divUnder.style.oAnimation = "up2" + " " + delayTime;

							divUnder.style.top = "50px";
						}
						divUnder = document.getElementById("message" + 3);
						if(divUnder != null){
							divUnder.style.animation = "up1" + " " + delayTime;
							divUnder.style.mozAnimation = "up1" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
							divUnder.style.oAnimation = "up1" + " " + delayTime;

							divUnder.style.top = "240px";
						}
					}
				}
			}
			else{
				//最上面的div
				var upDiv = document.getElementById("message" + 1);
				if(upDiv != null){
					upDiv.parentNode.removeChild(upDiv);
				}
				//次上块
				upDiv = document.getElementById("message" + 2);
				if(upDiv != null){
					upDiv.style.animation = "up2" + " " + delayTime;
					upDiv.style.mozAnimation = "up2" + " " + delayTime;
					upDiv.style.wegkitAnimation = "up2" + " " + delayTime;
					upDiv.style.oAnimation = "up2" + " " + delayTime;

					upDiv.style.top = "50px";
				}

				//最下面
				upDiv = document.getElementById("message" + 3);
				if(upDiv != null){
					upDiv.style.animation = "up1" + " " + delayTime;
					upDiv.style.mozAnimation = "up1" + " " + delayTime;
					upDiv.style.wegkitAnimation = "up1" + " " + delayTime;
					upDiv.style.oAnimation = "up1" + " " + delayTime;

					upDiv.style.top = "240px";
				}
			}
		}
		else if(num === 1){
			var adminDiv = document.getElementById("message" + 5);
			//存在admin
			if(adminDiv != null){
				//admin在最下面
				if(adminDiv.style.top === "430px"){
					adminDiv.style.animation = "up1" + " " + delayTime;
					adminDiv.style.mozAnimation = "up1" + " " + delayTime;
					adminDiv.style.wegkitAnimation = "up1" + " " + delayTime;
					adminDiv.style.oAnimation = "up1" + " " + delayTime;

					adminDiv.style.top = "240px";
				}
				//admin在次下面
				else if(adminDiv.style.top === "240px"){
					adminDiv.style.animation = "up2" + " " + delayTime;
					adminDiv.style.mozAnimation = "up2" + " " + delayTime;
					adminDiv.style.wegkitAnimation = "up2" + " " + delayTime;
					adminDiv.style.oAnimation = "up2" + " " + delayTime;

					adminDiv.style.top = "50px";

					//在最下面的块
					var divUnder = document.getElementById("message" + 0);
					if(divUnder != null){
						divUnder.style.animation = "up1" + " " + delayTime;
						divUnder.style.mozAnimation = "up1" + " " + delayTime;
						divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
						divUnder.style.oAnimation = "up1" + " " + delayTime;

						divUnder.style.top = "240px";
					}
				}
				else{//在最上面
					if(adminIn){ //还不能删除
						var divUnder = document.getElementById("message" + 3);
						if(divUnder != null){
							divUnder.parentNode.removeChild(divUnder);
						}
						divUnder = document.getElementById("message" + 0);
						if(divUnder != null){
							divUnder.style.animation = "up1" + " " + delayTime;
							divUnder.style.mozAnimation = "up1" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
							divUnder.style.oAnimation = "up1" + " " + delayTime;

							divUnder.style.top = "240px";
						}
					}
					else{ //可以删除
						adminDiv.parentNode.removeChild(adminDiv);
						var divUnder = document.getElementById("message" + 3);
						if(divUnder != null){
							divUnder.style.animation = "up2" + " " + delayTime;
							divUnder.style.mozAnimation = "up2" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up2" + " " + delayTime;
							divUnder.style.oAnimation = "up2" + " " + delayTime;

							divUnder.style.top = "50px";
						}
						divUnder = document.getElementById("message" + 0);
						if(divUnder != null){
							divUnder.style.animation = "up1" + " " + delayTime;
							divUnder.style.mozAnimation = "up1" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
							divUnder.style.oAnimation = "up1" + " " + delayTime;

							divUnder.style.top = "240px";
						}
					}
				}
			}
			else{
				//最上面的div
				var upDiv = document.getElementById("message" + 2);
				if(upDiv != null){
					upDiv.parentNode.removeChild(upDiv);
				}
				//次上块
				upDiv = document.getElementById("message" + 3);
				if(upDiv != null){
					upDiv.style.animation = "up2" + " " + delayTime;
					upDiv.style.mozAnimation = "up2" + " " + delayTime;
					upDiv.style.wegkitAnimation = "up2" + " " + delayTime;
					upDiv.style.oAnimation = "up2" + " " + delayTime;

					upDiv.style.top = "50px";
				}

				//最下面
				upDiv = document.getElementById("message" + 0);
				if(upDiv != null){
					upDiv.style.animation = "up1" + " " + delayTime;
					upDiv.style.mozAnimation = "up1" + " " + delayTime;
					upDiv.style.wegkitAnimation = "up1" + " " + delayTime;
					upDiv.style.oAnimation = "up1" + " " + delayTime;

					upDiv.style.top = "240px";
				}
			}
		}
		else if(num === 2){
			var adminDiv = document.getElementById("message" + 5);
			//存在admin
			if(adminDiv != null){
				//admin在最下面
				if(adminDiv.style.top === "430px"){
					adminDiv.style.animation = "up1" + " " + delayTime;
					adminDiv.style.mozAnimation = "up1" + " " + delayTime;
					adminDiv.style.wegkitAnimation = "up1" + " " + delayTime;
					adminDiv.style.oAnimation = "up1" + " " + delayTime;

					adminDiv.style.top = "240px";
				}
				//admin在次下面
				else if(adminDiv.style.top === "240px"){
					adminDiv.style.animation = "up2" + " " + delayTime;
					adminDiv.style.mozAnimation = "up2" + " " + delayTime;
					adminDiv.style.wegkitAnimation = "up2" + " " + delayTime;
					adminDiv.style.oAnimation = "up2" + " " + delayTime;

					adminDiv.style.top = "50px";

					//在最下面的块
					var divUnder = document.getElementById("message" + 1);
					if(divUnder != null){
						divUnder.style.animation = "up1" + " " + delayTime;
						divUnder.style.mozAnimation = "up1" + " " + delayTime;
						divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
						divUnder.style.oAnimation = "up1" + " " + delayTime;

						divUnder.style.top = "240px";
					}
				}
				else{//在最上面
					if(adminIn){ //还不能删除
						var divUnder = document.getElementById("message" + 0);
						if(divUnder != null){
							divUnder.parentNode.removeChild(divUnder);
						}
						divUnder = document.getElementById("message" + 1);
						if(divUnder != null){
							divUnder.style.animation = "up1" + " " + delayTime;
							divUnder.style.mozAnimation = "up1" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
							divUnder.style.oAnimation = "up1" + " " + delayTime;

							divUnder.style.top = "240px";
						}
					}
					else{ //可以删除
						adminDiv.parentNode.removeChild(adminDiv);
						var divUnder = document.getElementById("message" + 0);
						if(divUnder != null){
							divUnder.style.animation = "up2" + " " + delayTime;
							divUnder.style.mozAnimation = "up2" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up2" + " " + delayTime;
							divUnder.style.oAnimation = "up2" + " " + delayTime;

							divUnder.style.top = "50px";
						}
						divUnder = document.getElementById("message" + 1);
						if(divUnder != null){
							divUnder.style.animation = "up1" + " " + delayTime;
							divUnder.style.mozAnimation = "up1" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
							divUnder.style.oAnimation = "up1" + " " + delayTime;

							divUnder.style.top = "240px";
						}
					}
				}
			}
			else{
				//最上面的div
				var upDiv = document.getElementById("message" + 3);
				if(upDiv != null){
					upDiv.parentNode.removeChild(upDiv);
				}
				//次上块
				upDiv = document.getElementById("message" + 0);
				if(upDiv != null){
					upDiv.style.animation = "up2" + " " + delayTime;
					upDiv.style.mozAnimation = "up2" + " " + delayTime;
					upDiv.style.wegkitAnimation = "up2" + " " + delayTime;
					upDiv.style.oAnimation = "up2" + " " + delayTime;

					upDiv.style.top = "50px";
				}

				//最下面
				upDiv = document.getElementById("message" + 1);
				if(upDiv != null){
					upDiv.style.animation = "up1" + " " + delayTime;
					upDiv.style.mozAnimation = "up1" + " " + delayTime;
					upDiv.style.wegkitAnimation = "up1" + " " + delayTime;
					upDiv.style.oAnimation = "up1" + " " + delayTime;

					upDiv.style.top = "240px";
				}
			}
		}
		else if(num === 3){
			var adminDiv = document.getElementById("message" + 5);
			//存在admin且未到时间
			if(adminDiv != null && adminIn){
				//admin在最下面
				if(adminDiv.style.top === "430px"){
					adminDiv.style.animation = "up1" + " " + delayTime;
					adminDiv.style.mozAnimation = "up1" + " " + delayTime;;
					adminDiv.style.wegkitAnimation = "up1" + " " + delayTime;
					adminDiv.style.oAnimation = "up1" + " " + delayTime;

					adminDiv.style.top = "240px";
				}
				//admin在次下面
				else if(adminDiv.style.top === "240px"){
					adminDiv.style.animation = "up2" + " " + delayTime;
					adminDiv.style.mozAnimation = "up2" + " " + delayTime;
					adminDiv.style.wegkitAnimation = "up2" + " " + delayTime;
					adminDiv.style.oAnimation = "up2" + " " + delayTime;

					adminDiv.style.top = "50px";

					//在最下面的块
					var divUnder = document.getElementById("message" + 2);
					if(divUnder != null){
						divUnder.style.animation = "up1" + " " + delayTime;
						divUnder.style.mozAnimation = "up1" + " " + delayTime;
						divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
						divUnder.style.oAnimation = "up1" + " " + delayTime;

						divUnder.style.top = "up1" + " " + delayTime;
					}
				}
				else{//在最上面
					if(adminIn){ //还不能删除
						var divUnder = document.getElementById("message" + 1);
						if(divUnder != null){
							divUnder.parentNode.removeChild(divUnder);
						}
						divUnder = document.getElementById("message" + 2);
						if(divUnder != null){
							divUnder.style.animation = "up1" + " " + delayTime;
							divUnder.style.mozAnimation = "up1" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
							divUnder.style.oAnimation = "up1" + " " + delayTime;

							divUnder.style.top = "240px";
						}
					}
					else{ //可以删除
						adminDiv.parentNode.removeChild(adminDiv);
						var divUnder = document.getElementById("message" + 1);
						if(divUnder != null){
							divUnder.style.animation = "up2" + " " + delayTime;
							divUnder.style.mozAnimation = "up2" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up2" + " " + delayTime;
							divUnder.style.oAnimation = "up2" + " " + delayTime;

							divUnder.style.top = "50px";
						}
						divUnder = document.getElementById("message" + 2);
						if(divUnder != null){
							divUnder.style.animation = "up1" + " " + delayTime;
							divUnder.style.mozAnimation = "up1" + " " + delayTime;
							divUnder.style.wegkitAnimation = "up1" + " " + delayTime;
							divUnder.style.oAnimation = "up1" + " " + delayTime;

							divUnder.style.top = "240px";
						}
					}
				}
			}
			else{
				//最上面的div
				var upDiv = document.getElementById("message" + 0);
				if(upDiv != null){
					upDiv.parentNode.removeChild(upDiv);
				}
				//次上块
				upDiv = document.getElementById("message" + 1);
				if(upDiv != null){
					upDiv.style.animation = "up2" + " " + delayTime;
					upDiv.style.mozAnimation = "up2" + " " + delayTime;
					upDiv.style.wegkitAnimation = "up2" + " " + delayTime;
					upDiv.style.oAnimation = "up2" + " " + delayTime;

					upDiv.style.top = "50px";
				}

				//最下面
				upDiv = document.getElementById("message" + 2);
				if(upDiv != null){
					upDiv.style.animation = "up1" + " " + delayTime;
					upDiv.style.mozAnimation = "up1" + " " + delayTime;
					upDiv.style.wegkitAnimation = "up1" + " " + delayTime;
					upDiv.style.oAnimation = "up1" + " " + delayTime;

					upDiv.style.top = "240px";
				}
			}
		}

		div.style.top = "430px";
		div.style.display = "none";
		_divShow = div;
		setTimeout(function(){
			_divShow.style.display = "block";
		}, 300);
		parent.appendChild(div);
	}
	else if(model === "admin"){
		//num将要显示的
		if(num === 0){
			//找最上面的div
			var upDiv = document.getElementById("message" + 1);
			if(upDiv != null){
				upDiv.parentNode.removeChild(upDiv);
				div.style.top = "50px";
			}

			else{
				upDiv = document.getElementById("message" + 2);
				if(upDiv != null){
					div.style.top = "50px";
				}
				else{
					upDiv = document.getElementById("message" + 3);
					if(upDiv != null){
						div.style.top = "240px";
					} 
					else{
						div.style.top = "430px";
					}
				}
			}
		}
		else if(num === 1){
			//找最上面的div
			var upDiv = document.getElementById("message" + 2);
			if(upDiv != null){
				upDiv.parentNode.removeChild(upDiv);
				div.style.top = "50px";
			}

			else{
				upDiv = document.getElementById("message" + 3);
				if(upDiv != null){
					div.style.top = "50px";
				}
				else{
					upDiv = document.getElementById("message" + 0);
					if(upDiv != null){
						div.style.top = "240px";
					} 
					else{
						div.style.top = "430px";
					}
				}
			}
		}
		else if(num === 2){
			//找最上面的div
			var upDiv = document.getElementById("message" + 3);
			if(upDiv != null){
				upDiv.parentNode.removeChild(upDiv);
				div.style.top = "50px";
			}

			else{
				upDiv = document.getElementById("message" + 0);
				if(upDiv != null){
					div.style.top = "50px";
				}
				else{
					upDiv = document.getElementById("message" + 1);
					if(upDiv != null){
						div.style.top = "240px";
					} 
					else{
						div.style.top = "430px";
					}
				}
			}
		}
		else if(num === 3){
			//找最上面的div
			var upDiv = document.getElementById("message" + 0);
			if(upDiv != null){
				upDiv.parentNode.removeChild(upDiv);
				div.style.top = "50px";
			}

			else{
				upDiv = document.getElementById("message" + 1);
				if(upDiv != null){
					div.style.top = "50px";
				}
				else{
					upDiv = document.getElementById("message" + 2);
					if(upDiv != null){
						div.style.top = "240px";
					} 
					else{
						div.style.top = "430px";
					}
				}
			}
		}
		parent.appendChild(div);
	}
　　}	

function addElementCon(obj, data, num){
	var parent = document.getElementById(obj);
	//添加 div
　　　　var divImg = document.createElement("div");
	var divCon = document.createElement("div");

	if(data.nickname === "admin"){
		//设置 div 属性，如 id
　　　  divImg.setAttribute("id", "img" + 5);
		divCon.setAttribute("id", "content" + 5);
	}
	else{
		//设置 div 属性，如 id
　　　  divImg.setAttribute("id", "img" + num);
		divCon.setAttribute("id", "content" + num);
	}

	divImg.style.float = "left";
	divImg.style.width = "20%";
	divImg.style.marginTop = "-20px";
	divImg.style.textAlign = "center";


	divCon.style.float = "left";
	divCon.style.width = "80%";
	divCon.style.textAlign = "left";
	divCon.style.fontSize = "54px";
	divCon.style.whiteSpace = "nowrap";
	divCon.style.paddingTop = "10px";

	parent.appendChild(divImg);
	parent.appendChild(divCon);

	//添加右边Img的文字及图片
	var pare;
	if(data.nickname === "admin"){
		pare = document.getElementById("img" + 5);
	}
	else{
		pare = document.getElementById("img" + num);
	}
	var divFnt = document.createElement("div");
	var img = document.createElement("img");

	if(data.nickname === "admin"){
		divFnt.setAttribute("id", "name" + 5);
		img.setAttribute("id", "img" + 5 + 5);
	}
	else{
		divFnt.setAttribute("id", "name" + num);
		img.setAttribute("id", "img" + num + num);
	}

	img.style.width = "100px";
	img.style.height = "100px";

	pare.appendChild(divFnt);
	pare.appendChild(img);

	//防止左边文字过长，添加marquee标签
	var par;
	if(data.nickname === "admin"){
		par = document.getElementById("content" + 5);
	}
	else{
		par = document.getElementById("content" + num);
	}
	var marq = document.createElement("marquee");

	marq.setAttribute("direction", "left");
	marq.setAttribute("behavior", "scroll");
	marq.setAttribute("scrollamount", "8px");
	marq.setAttribute("scrolldelay", "0");
	marq.setAttribute("loop", "-1");
	if(data.nickname === "admin"){
		marq.setAttribute("id", "conMq" + 5);
	}
	else{
		marq.setAttribute("id", "conMq" + num);
	}
	par.appendChild(marq);
}

//显示信息
function showMessage(data, model){
	if(num > 3){
		num = num % 4;
	}
	console.log(num);
	_data = data;
	if(model === "common"){
		addElementDiv("container", "common", num);  //创建message块
		addElementCon("message" + num, _data, num); //创建message中的图片区和内容区
		
		//显示信息
		var name = document.getElementById("name" + num);
		name.innerHTML = data.nickname;
		var img = document.getElementById("img" + num + num);
		img.setAttribute("src", "Image/load.jpg");
		img.setAttribute("src", data.headimgurl);
		var lenth = (document.body.clientWidth * 15 - (document.body.clientWidth * 15) % 1333) / 1333;
		if(_data.content.length > lenth){
			var content = document.getElementById("conMq" + num);
			content.innerHTML = data.content;
		}
		else{
			var content = document.getElementById("content" + num);
			content.innerHTML = data.content;
		}

		num++;
	}
	else if(model === "admin"){
		var adm = document.getElementById("message" + 5);
		if(adm != null){
			clearTimeout(timeId);
		}
		adminIn = true;
		//置顶10秒
		timeId = setTimeout(function(){
			adminIn = false;
		}, 10000);

		addElementDiv("container", "admin", num);
		addElementCon("message" + 5, _data, num);
		//显示内容
		var name = document.getElementById("name" + 5);
		name.innerHTML = data.nickname;
		var img = document.getElementById("img" + 5 + 5);
		img.setAttribute("src", "Image/admin.jpg");
		console.log("length: " + document.body.clientWidth);
		var lenth = (document.body.clientWidth * 15 - (document.body.clientWidth * 15) % 1333) / 1333;
		if(_data.content.length > lenth){
			var content = document.getElementById("conMq" + 5);
			content.innerHTML = data.content;
		}
		else{
			var content = document.getElementById("content" + 5);
			content.innerHTML = data.content;
			console.log(content);
		}
	}
}

//此函数调用显示函数进行显示
setInterval(function(){
	if(news.length !== 0){
		var data = news.shift();
		_data = data;
		if(_data.nickname === "admin"){
			showMessage(_data, "admin");
		}
		else{
			showMessage(_data, "common");
		}
	}
}, 500);

//普通用户
socket.on('new message', function(data){
	console.log(data);
	news.push(data);
});
//管理员
socket.on('admin', function(data){
	console.log(data);
	news.push(data);
});	


var xhr = createXHR();
xhr.onreadystatechange = function(event){
	if (xhr.readyState == 4){
		if ((xhr.status >= 200 && xhr.status < 300) || xhr.status
			== 304){
			console.log(xhr.responseText);
			var result = JSON.parse(xhr.responseText);
			console.log(result);
			//创建刷新时的历史消息
			for(var i = 0; i < result.length; i++){
				news.push(result[i]);
			}
		} 
	}
};
xhr.open("GET", "https://wall.cgcgbcbc.com/api/messages?num=3", true);
xhr.send(null);
	
function createXHR(){
	if(typeof XMLHttpRequest != "undefined"){
		return new XMLHttpRequest();
	}
	else{
		throw new Error("No XHR object available.");
	}
}