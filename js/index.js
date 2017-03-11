$(function(){
	// $.ajax({
	// 	type: "GET",
	// 	url: "ajax/index.json",
	// 	dataType: "json",
	// 	success: function(data){
	// 		for(var i in data.about_info){
	// 			$("#about_info").append("<p>"+data.about_info[i]+"</p>");
	// 		}
	// 		$("#skill_info").append("<p>"+data.skill_info+"</p>");
	// 		$(".skill_int").append("<ul></ul>");
	// 	},
	// });
	//获取浏览器宽度判断是否小于1024
    var _width = $(window).width();
    if (_width < 1024) {
        alert("暂时小于1024屏幕暂时没有实现");
    } else {
     	// 我的经历
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
