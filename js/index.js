/*
* @Author: Administrator
* @Date:   2016-09-29 19:46:13
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-08 22:05:27
*/

//'use strict';
$(function(){
	/*top*/
	var top = {
		init: function(){
			this.kdMenu = $('.kd-menu');
			this.myKd = this.kdMenu.find('.my-kd')
			this.bgKd = this.kdMenu.find('.bg-kd');
			this.hoverDown = this.kdMenu.find('.hoverdown');
			
			this.menuCart = $('.menu-cart');
			this.myCart = this.menuCart.find('.my-cart');
			this.bgKdc = this.menuCart.find('.bg-kdc');
			//console.log(this.bgKdc)
			this.shopCart = this.menuCart.find('.shop-cart')

			this.menuPhone = $('.menu-phone');
			this.myPhone = this.menuPhone.find('.my-phone');

			this.menuColl = $('.menu-coll');
			this.collIt =  this.menuColl.find('.coll-it');
			this.bgKds = this.menuColl.find('.bg-kds');
			this.shopColl = this.menuColl.find('.shop-coll');

			this.menuList = $('.menu-list');
			this.Item = this.menuList.find('.item');
			this.navHover = this.menuList.find('.navHover');




			this.hoverOver();//顶部菜单栏划过

			this.navhover();//导航栏划过
		},
		hoverOver: function(){
			//鼠标滑过小图标旋转 二级菜单出现 li边框出现
			var that = this;
			this.kdMenu.hover(function() {
				that.bgKd.removeClass('dropdown-pic1');
				that.bgKd.addClass('dropdown-pic');
				that.hoverDown.show();
				that.myKd.css({
					'border-color':'#ccc',
					'border-bottom-color':'#fff'
				});
			
			}, function() {
				that.bgKd.removeClass('dropdown-pic');
				that.bgKd.addClass('dropdown-pic1');
				that.hoverDown.hide();
				that.myKd.css({
					'border-color':'',
					'border-bottom-color':''
				});
			

			});

			this.menuCart.hover(function() {
				that.bgKdc.removeClass('dropdown-pic1');
				that.bgKdc.addClass('dropdown-pic');
				that.shopCart.show();
				that.myCart.css({
					'border-color':'#ccc',
					'border-bottom-color':'#fff'
				});
			
			}, function() {
				that.bgKdc.removeClass('dropdown-pic');
				that.bgKdc.addClass('dropdown-pic1');
				that.shopCart.hide();
				that.myCart.css({
					'border-color':'',
					'border-bottom-color':''
				});
			

			});

			this.menuColl.hover(function() {
				that.bgKds.removeClass('dropdown-pic1');
				that.bgKds.addClass('dropdown-pic');
				that.shopColl.show();
				that.collIt.css({
					'border-color':'#ccc',
					'border-bottom-color':'#fff'
				});
			
			}, function() {
				that.bgKds.removeClass('dropdown-pic');
				that.bgKds.addClass('dropdown-pic1');
				that.shopColl.hide();
				that.collIt.css({
					'border-color':'',
					'border-bottom-color':''
				});
			

			});
			this.menuPhone.hover(function() {
				that.myPhone.show();
			
			}, function() {
				that.myPhone.hide();	

			});

		},

		//导航栏划过下面小条跟随
		navhover: function(){
			var that = this;
			var x = 0;
			var width = 0;
			this.Item.hover(function(){
			 x = this.offsetLeft;
			 widthX = that.Item.width();
				that.navHover.stop(true).animate({
					opacity:1,
					width:widthX,
					left:(16+x)	
				},200);
			},function(){
				that.navHover.stop(true).animate({
					opacity:0,
					left:0
				
				},200);
			});
		},


	};
	top.init();

	/*main*/
	var main = {
		init: function(){
			this.navMod = $('.nav-mod');
			this.modRight = this.navMod.find('.mod-rigth');
			//console.log(this.modRight);

			this.modHover();
		},
		modHover: function(){
			var that = this;
			
			this.navMod.hover(function(){
			
				$(this).addClass('cur').siblings().removeClass('cur');
				that.modRight.eq( $(this).index()-1 ).css({

					display:'block',
				});
			},function(){
				$(this).removeClass('cur');
				that.modRight.eq( $(this).index()-1 ).css({

					display:'none',
				});
				
			});
		},


	
	};
	main.init();

	//轮播图
	var banner = {
		init: function(){
			this.imgBox = $('.img-box');
			this.imgs = this.imgBox.find('img');
			this.circle = $('.circle');
			this.circleItem = this.circle.find('.circle-item');
			//console.log(this.circleItem)
			this.leftArrow = $('.left-arrow');
			this.rightArrow = $('.right-arrow');

			this.now = 0;
			this.next = 0;
			this.timer = null;

			this.autoPlay();
			//console.log(this.next);
			this.stopAuto();
			this.circleClick();
			this.nextClick();
		},

		autoPlay: function(){
			var that = this;
			this.timer = setInterval(function(){
				that.next++;
				//console.log(that.next)
				that.next %= that.imgs.length;
				that.switchImg();
			},2000)
		},
		switchImg: function(){
			var that = this;
			this.imgs.eq(this.now).stop(true).fadeOut(500);
			this.imgs.eq(this.next).stop(true).fadeIn(500);
			this.now = this.next;

			that.circleItem.eq(that.next).addClass('active').siblings().removeClass('active');

		},

		//鼠标滑过停止
		stopAuto: function(){
			var that = this;
			$('.banner-wrapper').hover(function(){
				clearInterval(that.timer),
				that.leftArrow.stop(true).fadeIn(300);
				that.leftArrow.stop(true).animate({
					display:'block',
					marginLeft:'-440px',
					opacity:0.8
				
				},300);

				
				that.rightArrow.stop(true).fadeIn(300);
				that.rightArrow.stop(true).animate({
					display:'block',
					marginLeft:'40px',
					opacity:0.8
				},300);

			},function(){
				that.autoPlay();
				that.leftArrow.css({
					marginLeft:"-400px",
					opacity:0,
				})
				that.rightArrow.css({
					marginLeft:0,
					opacity:0,
				})
			});
		},

		circleClick: function(){
			var that = this;
			this.circleItem.click(function(){
				that.imgs.eq(that.now).stop(true).fadeOut(500);
				that.imgs.eq( $(this).index() ).stop(true).fadeIn(500);
				

				that.circleItem.eq( $(this).index() ).addClass('active').siblings().removeClass('active');

				that.now = $(this).index();
				that.next = $(this).index();

			});
		},
		nextClick: function(){
			var that = this;
			this.rightArrow.click(function(){
				console.log("按钮可以点击")
				that.next++;
				that.next %= that.imgs.length;
				that.switchImg();
			});
			this.leftArrow.click(function(){
				that.next--;
				if(that.next<0){
					that.next=3;
				}
				that.switchImg();
			});
		},

	};
	banner.init();

	//滚动固定楼层条
	var scrollFix = {
		init: function(){
			this.floorTab = $('.floor-tab');
			//this.fixDiv = $('#fixDiv');
			this.F1 = this.floorTab.find('.tofloor1');
			this.F2 = this.floorTab.find('.tofloor2');
			this.F3 = this.floorTab.find('.tofloor3');
			this.F4 = this.floorTab.find('.tofloor4');
			this.F5 = this.floorTab.find('.tofloor5');

			this.scrollFixed();
			this.scrollToFloor();
			this.clickToFloor();
		},

		scrollFixed: function(){
			var that = this;
			$(window).scroll(function(){
				var top = $(document).scrollTop();
				if(top >= 1588){
					that.floorTab.addClass('floor-bd');
				}if(top < 1588){
					that.floorTab.removeClass('floor-bd');
				}
			});
		},

		//滚动楼层变换
		scrollToFloor: function(){
			var that = this;
			$(window).scroll(function(){
				var topY = $(document).scrollTop();
				if(topY >= 2840){
					that.F2.addClass('current').siblings().removeClass('current');
				}else{
					that.F1.addClass('current');
					that.F2.removeClass('current');
				};
				if(topY > 4090){
					that.F3.addClass('current').siblings().removeClass('current');
				};
				if(topY > 5350){
					that.F4.addClass('current').siblings().removeClass('current');
				};
				if(topY > 6210){
					that.F5.addClass('current').siblings().removeClass('current');
				};
				if(topY > 7120){
					that.floorTab.removeClass('floor-bd');
				};
			});
		},

		//点击到固定楼层
		clickToFloor: function(){
			this.F1.click(function(){
				$('body').stop(true).animate({
					scrollTop:1588,
				});
			});
			this.F2.click(function(){
				$('body').stop(true).animate({
					scrollTop:2840,
				});
			});
			this.F3.click(function(){
				$('body').stop(true).animate({
					scrollTop:4095,
				});
			});
			this.F4.click(function(){
				$('body').stop(true).animate({
					scrollTop:5360,
				});
			});
			this.F5.click(function(){
				$('body').stop(true).animate({
					scrollTop:6220,
				});
			});
		},
	};
	scrollFix.init();

	//右边快速导航栏
	var fastNav = {
		init: function(){

			this.weChat = $('.weChat');
			this.code = this.weChat.next('.code-2d');
			this.iconFont = $('.iconfont');
			this.fastTop = $('.fast-top');
			this.backTop = this.iconFont.find('.backTop');

			this.codeweChat();
			this.clickbackTop();
			this.backTopNone();
		},

		codeweChat: function(){
			var that = this;
			this.weChat.hover(function(){
				that.code.css({
					display:'block',
				});
			},function(){
				that.code.css({
					display:'none',
				});
			});
		},
		clickbackTop: function(){
			var that = this;
			this.iconFont.hover(function(){
				that.backTop.css({
					display:'block',
				});
			},function(){
				that.backTop.css({
					display:'none',
				});
			});

			this.iconFont.click(function(){
				$('body').stop(true).animate({
					scrollTop:0
				});
			});

			},

			backTopNone: function(){
				var that = this;
				$(window).scroll(function(){
					var top = $(document).scrollTop();
					if(top > 100){
						that.fastTop.stop(true).fadeIn();
					}else{
						that.fastTop.stop(true).fadeOut();
					}
				});
			},
	};
	fastNav.init();

});


// 百度接口 输入框
$(function(){
	
		var searchBox = $('.search-box');
		var keyWords = searchBox.find('#keywords');
		
		keyWords.on('input propertychange',function(){
			getData( keyWords.val() );
			$('.search-result').css({
				display:'block',
			});
			if(keyWords.val() == ''){
				$('.search-result').css({
					display:'none',
				});
			}
		});

		function getData(keyword){
			$.ajax({
				url: 'http://suggestion.baidu.com/su',
				type: 'GET',
				data: {
					wd:keyword,
					cb:'doData'
				},
				dataType:'jsonp',

				success: function(result){
					//console.log(result);
				}

			});
		};
		

});

function doData(result){
	//console.log(result);
	var content = '';
	for(var key in result.s){
		content += '<li>'+ result.s[key] +'</li>'
	}
	$('.search-result').html(content); 
}


//登录-注册的页面
$(function(){
	var logIntoRegPage = {
		init: function(){
			this.logIn = $('.kd-Userlogin');//登录
			this.userReg = this.logIn.next('.kd-Userreg');//注册
			this.userReg =  $('.kd-Userreg');
			this.cover = $('.cover');
			this.loginBox = $('.login-box');
			this.closeBtn = this.loginBox.find('.close-btn');
			this.toRegister = $('.toregister');
			this.loginForm = $('#login_form');
			this.regForm = $('#reg_form');
			this.autoLogin = $('.autologin');



			this.clickLogin();
			this.clickReg();
			this.clickClose();
			this.clickChange();
			this.clickRemmber(); 
		},

		clickLogin: function(){
			var that = this;
			this.logIn.click(function(){
				that.cover.css({
					display:'block',
				});
				that.loginBox.stop(true).animate({
					marginRight:900,
				},600);
				that.loginForm.css({
					display:'block',
				});
				that.regForm.css({
					display:'none',
				});
			});
		},

		clickReg: function(){
			var that = this;

			this.userReg.click(function(){
				that.cover.css({
					display:'block',
				});
				that.loginBox.stop(true).animate({
					marginRight:900,
				},600);
				that.loginForm.css({
					display:'none',
				});
				that.regForm.css({
					display:'block',
				});
			});
		},

		clickClose: function(){
			var that = this;
			this.closeBtn.click(function(){
				
				that.loginBox.stop(true).animate({
					marginRight:0,
				},400,function(){
					that.cover.css({
						display:'none',
					});

				});
				
			});
		},

		//点击登录注册切换
		clickChange: function(){
			var that = this;
			var flag = false;
			this.toRegister.click(function(){
				
				if(!flag){
					//console.log(111)
					that.loginForm.css({
						display:'none',
					});
					that.regForm.css({
						display:'block',
					});
					flag = true;
				}
				else{
					//console.log(222)
					that.regForm.css({
						display:'none',
					});
					that.loginForm.css({
						display:'block',
					});
					flag = false;
				}
				
			});
		},
		clickRemmber: function(){
			var that = this;
			var flag = true; 
			this.autoLogin.click(function(){
				if(flag){
					$(this).removeClass('doauto');
					flag = false;
				}else{
					$(this).addClass('doauto');
					flag = true;
				}
				
			});
		},
	};
	logIntoRegPage.init();

})







