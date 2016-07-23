var search=$(".search");
search.click(function(){
	$(".mask").show();
	$(".bag-input").css("display","none");
	$("html,body").css("overflow","hidden");
	$(".bag-icon").addClass("active");
	$(".item,.search").each(function(){
		$(this).transition({scale:[0.5,0.5],opacity:0},function(){
			$(this).hide();
			if($(this).is(".search")){
				$(".searchbox").css("display","inline-block").transition({x:0});
				$(".middlesearch").focus();
			}
		});
	});
	
});
$(".bag-icon").click(function(){
		if($(this).is(".active")){
			// $(".bag-input").blur();
			$(".mask").hide();
			$("html,body").css("overflow","");
			$(".bag-icon").removeClass("active");
			$(".searchbox").css("display","none").transition({x:40})
			$(".item,.search").each(function(){
				$(this).css("display","inline-block")
				.transition({opacity:1,scale:[1,1]});
			});
				setTimeout(function(){
					$(".bag-input").css("display","")
				})
		}
		
	})

$(".smallmenu").click(function(){
	$(this).find("div").toggleClass("active");
	// $(this).find(".smallmenuxl").transition({opacity:1},"ease-in-out");
	$(this).find(".smallmenuxl").toggleClass("active");
	$(".bag").toggleClass("active")
})
$(".links-one").click(function(){
	$(this).find("span").toggleClass("active")
	$(this).find(".links-two").toggleClass("active")
})
		
// 轮播
$(function(){
	var imgs=$(".max-imglist>div");
	var len=imgs.length;
	var indexBtn=$(".btn");
	var now=0;
	var next=0;
	var time=3000;
	var rightBtn=$(".right");
	var leftBtn=$(".left");
	var flag=true;
	var lis=$(".btn li");
	imgs.css("left",'100%').eq(0).css("left",'0')
	var t=setInterval(moveR,time)
	rightBtn.click(function(){
		
			moveR();
		
		
	})
	leftBtn.click(function(){
		
			moveL();
		
		
	})
	function moveR(){
		if(!flag){return;}
		flag=false;
		next++;
		if(next==len){
			next=0;
		}
		imgs.eq(next).css("left",'100%');
		imgs.eq(now).animate({"left":'-100%'});
		imgs.eq(next).animate({"left":0},function(){
			flag=true
		});
		lis.eq(now).removeClass("hot");
		lis.eq(next).addClass("hot");
		now=next;
	}
	function moveL(){
		if(!flag){return;}
		flag=false;
		next--;
		if(next<0){
			next=len-1;
		}
		imgs.eq(next).css("left",'-100%');
		imgs.eq(now).animate({"left":'100%'});
		imgs.eq(next).animate({"left":0},function(){
			flag=true;
		});
		lis.eq(now).removeClass("hot");
		lis.eq(next).addClass("hot");
		now=next;
	}
	lis.click(function(){
        var i=$(this).index();
        if(i==next){return;}
        if(i>next){
        	imgs.eq(i).css("left","100%");
        	imgs.eq(next).animate({"left":"-100%"});
	        imgs.eq(i).animate({"left":"0"});
	    }
        if(i<next){
        	imgs.eq(i).css("left","-100%");
        	imgs.eq(next).animate({"left":"100%"});
	        imgs.eq(i).animate({"left":"0"});
        }
        lis.eq(next).removeClass("hot");
		lis.eq(i).addClass("hot");
	    next=now=i;
        
	})
	lis.hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(moveR,time)
	})
	
})

