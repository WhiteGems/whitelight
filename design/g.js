// 对象
var wl=new (function(){
	var wlHeader=$("#wl-header"),
		wlTab=$("#wl-tab");
	this.initheader=function(){
		wlHeader.height($(window).height());
	}
	this.affixtab=function(){
		if(window.scrollY<$(window).height())wlTab.removeClass("affix").addClass("afabs");else wlTab.addClass("affix").removeClass("afabs");
	}
	this.goto=function(elm){
		var to=$(elm).position().top;
		window.scrollY_wl=window.scrollY;
		$(window).animate({scrollY_wl:to},{
			step:function(now,fx){
				window.scrollTo(0,now);
			}
		});
	}
})()



// init
$(function(){
	// 初始化头版到一个屏幕大小
	wl.initheader();
	$(window).resize(wl.initheader);
	$(window).scroll(wl.affixtab)
	$("#wl-enter").click(function(){wl.goto(".wl-show")});
});


