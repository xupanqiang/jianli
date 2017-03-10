// $(function() {
//     //导航
//     $(".deep-h-nav li").ready(function() {
//         var index = 0;
//         var adHeight = $(".deep-main").height();
//         $(".deep-h-nav li").click(function() {
//             index = $(".deep-h-nav li").index(this);
//             $("body,html").stop(true, false).animate({ scrollTop: adHeight * index }, 500); //stop可选。规定是否停止被选元素的所有加入队列的动画。可选。规定是否允许完成当前的动画。
//         });
//         $(window).scroll(function() {
//             var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
//                 len = $(".deep-h-nav li").length;
//             for (i = 0; i < len; i++) {
//                 if (top >= (adHeight * i)-200) {
//                     $(".deep-h-nav li").removeClass("current").eq(i).addClass("current");
//                 }
//                 if(top>=(adHeight-200)){
//                     $(".deep-header").addClass("ba-hadeer");
//                 } else {
//                     $(".deep-header").removeClass("ba-hadeer");
//                 }
//                 if(top>=(adHeight*2)&&top<(adHeight*3)){
//                     $(".about-cen").addClass("about-c01");
//                     $(".about-cl").addClass("about-c02");
//                     $(".about-ln").addClass("about-c02");
//                     $(".about-zz").addClass("about-c03");
//                     $(".about-fx").addClass("about-c03");
//                 } else{
//                     $(".about-cen").removeClass("about-c01");
//                     $(".about-cl").removeClass("about-c02");
//                     $(".about-ln").removeClass("about-c02");
//                     $(".about-zz").removeClass("about-c03");
//                     $(".about-fx").removeClass("about-c03");
//                 }
//             }
//         });
// 		//点击滚动到第二屏
//         $(".main-xia img").click(function(){
//             $("body,html").stop(true, false).animate({ scrollTop: adHeight }, 500);
//         })
//     });
//     //回到顶部
//     $(".gototop").click(function() {
//         $("body,html").stop(true, false).animate({ scrollTop: 0 }, 1000);
//     });
// })
