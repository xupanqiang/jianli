$(function(){
	
	//页面获取数据
	$.ajax({
		type: "GET",
		url: "ajax/index.json",
		dataType: "json",
		success: function(data){
			//个人简历数据
			//forEach方法中的function回调有三个参数：第一个参数是遍历的数组内容，第二个参数是对应的数组索引，第三个参数是数组本身[].forEach(function(value,index,array){}
			data.resume.forEach(function(item){
				$(".loimg").append("<p>"+item+"</p>");
			});
//			for(var i in data.resume){
//				$(".loimg").append("<p>"+data.resume[i]+"</p>");
//			}
			//专业技能数据
			$(".skill .main-he").append("<p class='servic-p' style='color:#fff;'>"+data.skill_info+"</p>");
			data.html.forEach(function(item){
				$(".hon1").append("<p>"+item+"</p>");
			});
			data.css.forEach(function(item){
				$(".hon2").append("<p>"+item+"</p>");
			});
			data.javascript.forEach(function(item){
				$(".hon3").append("<p>"+item+"</p>");
			});
			data.angularjs.forEach(function(item){
				$(".hon4").append("<p>"+item+"</p>");
			});
//			for(var i in data.html){
//				$(".hon1").append("<p>"+data.html[i]+"</p>");
//			}
//			for(var i in data.css){
//				$(".hon2").append("<p>"+data.css[i]+"</p>");
//			}
//			for(var i in data.javascript){
//				$(".hon3").append("<p>"+data.javascript[i]+"</p>");
//			}
//			for(var i in data.angularjs){
//				$(".hon4").append("<p>"+data.angularjs[i]+"</p>");
//			}
			//我的经历数据
			$(".experience .main-he").append("<p class='servic-p'>"+data.exp_info+"</p>");
			data.exp_list_left1.forEach(function(item){
				$(".sli1").append("<p>"+item+"</p>");
			});
			data.exp_list_left2.forEach(function(item){
				$(".sli2").append("<p>"+item+"</p>");
			});
//			for(var i in data.exp_list_left1){
//				$(".sli1").append("<p>"+data.exp_list_left1[i]+"</p>");
//			}
//			for(var i in data.exp_list_left2){
//				$(".sli2").append("<p>"+data.exp_list_left2[i]+"</p>");
//			}
		}
	});
	
	
	
	
	
	//获取浏览器宽度判断是否小于1024
    var _width = $(window).width();
    if (_width < 1024) {
        alert("暂时小于1024屏幕暂时没有实现");
    } else {
     	// 我的经历轮播
  		$(".num li").click(function() {
            var index = $(".num li").index(this);
            $(this).addClass("on").siblings().removeClass("on")
            showImg(index);
        });
        function showImg(index){
		    var adHeight = $(".slider li").height();
		    $(".slider").stop(true,false).animate({"margin-top" : -adHeight*index},500);//stop可选。规定是否停止被选元素的所有加入队列的动画。可选。规定是否允许完成当前的动画
		}
    }
});
