$(document).ready(function(){
	//设置fullpage
	$('#main').fullpage({
		sectionsColor:['#c6f0fc','#4bbfc3','#7baabe','green'],
		navigation:true,
		navigationTooltips:['首页','个人信息','技能展示','工作经历'],
		
		//当前显示不是page1则隐藏导航栏
		afterLoad:function(auchorLink,index){
			if(index==1){
				$('.hd').fadeIn();
			}
			else{
				$('.hd').fadeOut()
			}
		}
	});
	
	
	
	//当鼠标移动到头像上添加模糊效果
	$('.pic').hover(function(){
		$(this).find('.mohu').stop().fadeIn();
	},function(){
		$(this).find('.mohu').stop().fadeOut();
	})

	//使介绍文字依次显示
	function jianjin(id){
		$(id).first().show('fast',function showMore(){
			$(this).next().show('fast',showMore)
		})
	}
	jianjin('.some-text h3')
	
//	//绘制圆形进度条
//	setTimeout(timer('html5',0,90,50),700);
//	
//	
//	/*
//	 * 执行定时任务
//	 * id：画布id
//	 * start：初始百分比
//	 * end：结束百分比
//	 * interval：时间间隔
//	 */
//	function timer(id,start,end,interval){
//	    window.setTimeout(function(){
//	        circle(id,start/100);
//	        start++;
//	        if(start<end+1){
//	            timer(id,start,end,interval);
//	        }
//	    },interval);
//	}
//	function circle(id,percent){
//	    var p=(percent*100).toFixed(0);
//	    var c=document.getElementById(id);
//	    var cxt=c.getContext("2d");
//	    //生成圆形（底圆）
//	    cxt.fillStyle="#D0D0D0";
//	    cxt.beginPath();
//	    cxt.moveTo(75, 75); 
//	    cxt.arc(75,75,70,0,Math.PI*2,false);
//	    cxt.closePath();
//	    cxt.fill();
//	    //生成扇形
//	    cxt.fillStyle="#0268BD";
//	    cxt.beginPath();
//	    cxt.moveTo(75, 75);
//	    if(percent==1){
//	        cxt.arc(75,75,70,0,Math.PI*2,false);
//	    }else if(percent==0){
//	        cxt.arc(75,75,70,0,0,true);
//	    }else{
//	        cxt.arc(75,75,70,Math.PI,Math.PI+Math.PI*2*percent,false);
//	    }
//	    cxt.closePath();
//	    cxt.fill();
//	    //生成圆形（上层园）
//	    cxt.fillStyle="#FFFFFF";
//	    cxt.beginPath();
//	    cxt.moveTo(75, 75); 
//	    cxt.arc(75,75,50,0,Math.PI*2,false);
//	    cxt.closePath();
//	    cxt.fill();
//	    //生成中间百分比文字
//	    cxt.font="20px arial";
//	    cxt.fillStyle="#000000";
//	    cxt.fillText(p+"%",55,75);
//	//  cxt.fillText("0%",160,75);
//	}		
})
