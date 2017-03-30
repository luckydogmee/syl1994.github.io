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
	
	//当点击博客和随笔的时候阻止默认事件并弹出待开发弹出框
	$('.blog,.suibi').click(function(e){
		$('.alert').removeClass('hide');
		/*$(document).click(function(){
			if(!$('.alert').hasClass('hide')){
				$('.alert').addClass('hide');
			}
		})*/
		//阻止事件冒泡，这个很重要
		e.stopPropagation();
	})
	$('.alert .btn').click(function(){
		$('.alert').addClass('hide');
	})
	
	//导航栏效果
	 $(window).scroll(function(){
        var bannerHeight = $('.banner').height()||$(window).height();
        var top = $(window).scrollTop();
        var width = $('.banner').width();
        if(top>bannerHeight){
            $('.head').css({'position':'fixed','top':0,'background':'rgba(0,0,0,0.5)'})
        }else if(top<bannerHeight&&width<960&&width>850){
            $('.head').css({'position':'absolute','top':'4rem','background':'rgba(0,0,0,0)'})
        }else if(top<bannerHeight&&width<850&&width>768){
            $('.head').css({'position':'absolute','top':'3rem','background':'rgba(0,0,0,0)'})
        }else if(top<bannerHeight&&width<768){
            $('.head').css({'position':'absolute','top':'2rem','background':'rgba(0,0,0,0)'})
        }else{
            $('.head').css({'position':'absolute','top':'5rem','background':'rgba(0,0,0,0)'})
        }
    })
    
    $('.menu-icon').click(function(){
        if($(this).parent().hasClass('on')){
            
            var i=$('.menu li').length;
            function listhide(){
                i--;
                if(i>=0){
                    setTimeout(function(){
                        $('.menu li').eq(i).stop().fadeOut('fast');
                        listhide();
                    },100)
                }
            }
            listhide();
            $('#h1').rotate({
                angle: 45,
                animateTo: 0,
                easing: $.easing.easeInOutExpo
            })
            $('#h2').rotate({
                angle: -45,
                animateTo: 0,
                easing: $.easing.easeInOutExpo
            })
//					$('#h1').css({'transform':'rotate(0deg)'})
//					$('#h3').css({'transform':'rotate(0deg)'})
            setTimeout(function(){
                $('#h1').animate({'marginTop':0});
                $('#h2').animate({'marginTop':0})
            },400)
            $('#h3').fadeIn();
            setTimeout(function(){
                $('.menu-icon').parent().removeClass('on');
            },500)
        }else{
            $(this).parent().addClass('on');
            var i=-1;
            function list(){
                if(i<$('.menu li').length){
                    setTimeout(function(){
                        $('.menu li').eq(i).stop().fadeIn('fast');
                        list();
                    },100)
                }
                i++;
            }
            list();
            $('#h3').fadeOut();
            $('#h1').css('margin-top','0.4rem').rotate({
                angle: 0,
                animateTo: 45,
                easing: $.easing.easeInOutExpo
            })
            $('#h2').rotate({
                angle: 0,
                animateTo: -45,
                easing: $.easing.easeInOutExpo
            })
            $('#h2').css('margin-top','-0.8rem')
//					$('#h1').css({'transform':'rotate(45deg)','margin-left':'1rem','margin-top':'0.4rem'})
//					$('#h3').css({'transform':'rotate(-45deg)','margin-left':'1rem','margin-top':'0.8rem'})
        }
    })
	$('nav a').hover(function(){
        var width = $(this).parent().width();
        var height = $(this).height();
        $(this).find('.line-top').css({'width':width,'right':width});
        $(this).find('.line-bottom').css({'width':width,'right':'-'+width});
        $(this).find('.line-left').css({'height':height,'top':height});
        $(this).find('.line-right').css({'height':height,'top':'-'+height});
        
        $(this).find('.line-top').show().stop(true,true).animate({'right':0},300);
        $(this).find('.line-bottom').show().stop(true,true).animate({'right':0},300);
        $(this).find('.line-left').show().stop(true,true).animate({'top':0},300);
        $(this).find('.line-right').show().stop(true,true).animate({'top':0},300);
    },function(){
        var width = $(this).parent().width();
        var height = $(this).height();
        $('.line-top').stop(true,true).animate({'right':'-'+width},200);
        $('.line-bottom').stop(true,true).animate({'right':width},200);
        $('.line-left').stop(true,true).animate({'top':'-'+height},200);
        $('.line-right').stop(true,true).animate({'top':height},200);
    })
		
	
	
	
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
})
