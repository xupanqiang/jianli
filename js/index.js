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
    	
    	
	    //公告部分 ---离线储存
	    //点击小差号，关闭弹出层
	    $('.closenotice').on('click',function(){
	        storeDisplay();  //存储信息，将存储属性设置为"1"
	        $('.upgradeNotice').hide();
	    });
	    //本地存储访客是否第一次访问
	    var strModel="value";
	    //公告调用
	    var storeDisplay=function(){
	    var modelDisplay=1;      //定义存储对象的属性值
	    //存储，IE6~IE7 cookie 其他浏览器HTML5本地存储
	    if(window.localStorage) {
	        localStorage.setItem(strModel,modelDisplay);  //进行本地存储
	        } else {
	        Cookie.write(strModel,modelDisplay);   //进行Cookie存储
	        }
	    };
	    //检测触发是否显示弹窗
	    var strStoreDate=window.localStorage ? localStorage.getItem(strModel) : Cookie.read(strModel);      //检测浏览器是否支持localStorage
	    if(strStoreDate != "1"){    //如果属性值不为1则显示弹框
	        $('.upgradeNotice').show();
	    } else {
	    	$('.upgradeNotice').hide();
	    }
    	
    	
    	
    	
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
        
        //首页出现
        $(".header").animate({opacity:"1"},1000,function(){
        	$(".loimg img").animate({opacity:"1"},1000,function(){
				$(".loimg h2").animate({opacity:"1"},1000,function(){
					$(".loimg p").addClass("sh");
				});
			});
		});
		
		
		
		//整屏幕滚动
		var runPage;
		runPage = new FullPage({
		    id: 'pageContain',
		    slideTime: 800,
		    effect: {
		        transform: {
		            translate: 'Y'
		        },
		        opacity: [0, 1]
		    },
		    mode: 'wheel, touch, nav:navBar',
		    easing: 'ease',
		    callback: function(index, thisPage){
		        if(index==0){
		           // alert("第一屏");
		        }
		        if(index==1){
		            // alert("第二屏");
		        }
		    }
		});
		
		
        
    }
    



});
