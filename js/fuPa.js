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
