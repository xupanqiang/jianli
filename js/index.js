$(function(){
	
	//页面获取数据
	$.ajax({
		type: "GET",
		url: "ajax/index.json",
		dataType: "json",
		success: function(data){
			//个人简历数据
			data.resume.forEach(function(item){
				$(".loimg").append("<p>"+item+"</p>");
			});
			//专业技能数据
			$(".skill .main-he").append("<p class='servic-p' style='color:#fff;'>"+data.skill_info+"</p>");
			for(var p in data.skill_list){
				$(".serv li:eq("+p+") a").append("<h3 class='servic-h3'>" + data.skill_list[p].tiele + "</h3>");
				for(var i in data.skill_list[p].content){
					$(".serv li:eq("+p+") .hon").append("<p>"+ data.skill_list[p].content[i] +"</p>");
				}
			}
			//我的经历数据
			$(".experience .main-he").append("<p class='servic-p'>"+data.exp_info+"</p>");
			for(var p in data.exp_list){
				$(".slider").append("<li><h2>" + data.exp_list[p].tiele + "</h2></li>");
				for(var i in data.exp_list[p].content){
					$(".slider li:eq("+p+")").append("<p>"+ data.exp_list[p].content[i] +"</p>");
				}
			}
			//我的作品
			$(".demo .main-he").append("");
			for(var p in data.demo_list){
				$(".exper ul").append("<li><a href="+ data.demo_list[p].href +" target='_blank'><img src="+ data.demo_list[p].img +" class='exp'><span class='intro'></span><div class='had-link'><p class='int-had'>"+ data.demo_list[p].had +"</p><p class='int-link'><img src="+ data.demo_list[p].lImg +" alt='轻蚁传播'></p></div></a></li>");
			if($(window).width()<768){
			 	$(".exper>ul>li:lt(4)").css("display","none");
			}
			}
		}
	});
	
	
	//公告部分 ---离线储存
    //点击小差号，关闭弹出层
    $('.closebtn').on('click touchstart',function(){
        storeDisplay();  //存储信息，将存储属性设置为"1"
        $('.noticemask').hide();
        pin();
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
        $('.noticemask').show();
    } else {
    	$('.noticemask').hide();
    	pin();
    }
	
	//底部点击查号关闭弹出右侧栏
	$('.closenotice').on('click',function(){
        $('.upgradeNotice').slideUp("slow");
        $('.side').show();
    });
    $('.gototop').on('click',function(){
        $('.upgradeNotice').slideDown("slow");
        $('.side').hide();
    });
	
	//首页出现动画
	function pin(){
		$(".header").animate({opacity:"1"},1000,function(){
	    	$(".loimg img").animate({opacity:"1"},1000,function(){
				$(".loimg h2").animate({opacity:"1"},1000,function(){
					$(".loimg p").addClass("sh");
				});
			});
		});
	};
	

	
	//整屏幕滚动
    $('#pageContain').fullpage({
		scrollingSpeed: 500,
		css3: false,
		resize: true,
		anchors: ["page1","page2","page3","page4"],
		verticalCentered: false,
		afterRender: function(){},
		afterLoad: function(anchorLink,index){
			if(index==1){
				$(".navBar li").eq(0).addClass("current").siblings().removeClass("current");
			}
			if(index==2){
				$(".navBar li").eq(1).addClass("current").siblings().removeClass("current");
			}
			if(index==3){
				$(".navBar li").eq(2).addClass("current").siblings().removeClass("current");
			}
			if(index==4){
				$(".navBar li").eq(3).addClass("current").siblings().removeClass("current");
			}
		},
		onLeave:function(index , nextIndex, direction){
			if(index==2||index==3||index==4||index==5||index==6){
				$(".title_en").remove();	
			}
		}
	});
	
	//我的作品更多
	$('.servic-p i').on('click',function(){
        $('.bounced').show();
    });
    $(".md-close").on('click',function(){
        $(".bounced").hide();
    });
	
	
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
        
	//获取浏览器宽度判断是否小于1024
    var _width = $(window).width();
    if (_width < 768) {
    	//头部导航
        $(".nav").on('click',function(){
        	$(".nav ul").slideToggle()
        })
        
    } else {


    }
    



});
