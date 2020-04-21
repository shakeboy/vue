var div0 = document.getElementById("div0");
var date = document.getElementById("date");
div0.onclick = function() {
	alert("你点了我，说明你在想我！");
	div0.style.bgColor = "red";
	
}
//用定时器更新时间的变化
nowTime()
setInterval(nowTime,1000);
// 

function nowTime() {
	var now = new Date();
	var hour = now.getHours();//0~23.  //19
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var year = now.getFullYear();
	var month = now.getMonth();
	var day = now.getDate();
	var week = now.getDay();
	var weeks = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
	var temp = ''+(hour>12?hour-12:hour);
	if(hour===0){
		temp='12';
	}
	temp = temp + (minute<10?':0':":")+minute;
	temp = temp + (second<10?':0':":")+second;
	temp = temp +"        "+ (hour>12?"P.M.":"A.M.");
	temp = temp + "           "+year+'/'+(month+1)+'/'+day+"  "+weeks[week];
	date.innerHTML = temp;
}
