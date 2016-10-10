/*
* @Author: Administrator
* @Date:   2016-09-29 19:46:13
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-10 18:23:35
*/

//'use strict';

	/*main*/

$(function(){	
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
});




//
//
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
			this.tologIn = $('.tologin');
			this.loginForm = $('#login_form');
			this.regForm = $('#reg_form');


			this.clickLogin();
			this.clickReg();
			this.clickClose();
			this.clickChange();
			 
		},
		//点击登录页面出现
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

		//点击注册页面出现
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

		//关闭按钮点击
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

/////////////////点击登录注册切换//////////////
		clickChange: function(){
			var that = this;
			
			this.toRegister.click(function(){//登录跳转到注册
				that.loginForm.css({
					display:'none',
				});
				that.regForm.css({
					display:'block',
				});
			});		
			this.tologIn.click(function(){//注册跳转到登录
				that.regForm.css({
					display:'none',
				});
				that.loginForm.css({
					display:'block',
				});
			});							
		},
	
	};
	logIntoRegPage.init();



/////////////////登录注册判断///////////////////////////////////////////////////////
	var loginJudge = {
		init: function(){
			this.userName = $('input[name = "username"]');//用户名
			this.password = $('input[name = "pwd"]');//登录密码框

			this.userReg = $('input[name = "userReg"]');//注册名
			this.pwd = $('input[name = "password"]');//注册密码框
			
			//console.log(this.pwd)
			
			this.tips1 = $('.tips1');
			this.tips2 =$('.tips2');

			this.tips3 = $('.tips3');
			this.tips4 =$('.tips4');

			this.submitBtn = $('.submit-btn');//登录按钮
			this.submitReg = $('.submit-reg');//注册按钮

			this.autoLogin = $('.autologin');//自动登录

			this.flag = false;//定义全局变量用于判断用户名和密码格式否正确 全都正确的话点击完成注册
			this.a = false;
			this.b = false;

			this.focus();
			this.blur();
			this.loginFocus();
			this.psdBlur();
			this.clickRemmber();//点击记住密码


			this.clickReg();//点击注册
			this.clickLogin();//点击登录

			this.judgeRem();//判断是否记住用户名和密码 下次登录直接出现


		},

		//输入框获取焦点
		focus: function(){
			var that = this;
			this.userReg.focus(function(){
				$(this).css({
					boxShadow: '0 0 3px #e44715'
				});
			});
			this.pwd.focus(function(){
				$(this).css({
					boxShadow: '0 0 3px #e44715'
				});
			});

		},

		//输入框失去焦点 判断输入内容
		blur: function(){
			var that = this;
			
			//var c = false;

			//email正则
			var eMailreg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

			this.userReg.blur(function(){

				var eMailstr = that.userReg.val();
				
				$(this).css({
					boxShadow: 'none',
				});
				//判断用户名输入内容
				if( eMailreg.test(eMailstr) ){
					that.tips3.html('有效的邮箱');
					that.a=true;

				}else{
					that.tips3.html('邮箱格式有误,请重新输入');
				}

				//判断是否存在该用户
				that.checkData( eMailstr );


			});

			//密码框失去焦点
			this.pwd.blur(function(){
				var pwdStr = that.pwd.val();
				//密码正则
				var pwdReg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/;
				$(this).css({
					boxShadow: 'none',
				});

				//判断密码输入内容
				if( pwdReg.test(pwdStr) ){
					that.tips4.html('密码有效');
					 that.b=true;
				}else{
					that.tips4.html('密码长度介于6-20位之间');
				}
			});
		
			
		},



		//检查用户名
		checkData: function(eMail){
			//console.log(eMail)
				var that = this;
				$.getJSON('js/data.json', function(result){
					//console.log(result)
				if(result[eMail]){
					that.tips3.html('该用户已经存在,请重新输入');
				}
				
			});
		},

		clickReg: function(){
			var that = this;		
			 this.submitReg.click(function(){
			 	//console.log(that.a)
			 	if( that.a==true && that.b==true ){
				
					that.flag = true;
				}

			 	//console.log(that.flag)
			 	if(that.flag == true ){
			 		alert('注册成功');
			 	}
			 })
		},
		
/////////////////////////////////////登录判断//////////////////////////////////////////
		
		//登录输入框获取焦点
		loginFocus: function(){

			this.userName.focus(function(){
				$(this).css({
					boxShadow: '0 0 3px #e44715'
				});
			});
			this.password.focus(function(){
				$(this).css({
					boxShadow: '0 0 3px #e44715'
				});
			});

		},


		//用户名和密码框失去焦点 判断输入内容
		psdBlur: function(){
			var that = this;
			//用户名框失去焦点
			this.userName.blur(function(){
				$(this).css({
					boxShadow: 'none',
				});
			});

			//密码框失去焦点
			this.password.blur(function(){
				
				$(this).css({
					boxShadow: 'none',
				});
			});
		},

		//登录检查用户名
		checkUname: function(eMail){
			var that = this;
			$.getJSON('js/data.json', function(result){
					
				if(result[eMail]){
					//console.log(result[eMail])
					that.tips1.html('邮箱/用户名正确');
				}else{
					that.tips1.html('邮箱/用户名不存在');
				}
		
			});
		},

		//登录检查密码
		checkPwd: function(pwd){
			var that = this;
			var eMail = that.userName.val();
			$.getJSON('js/data.json', function(result){
				
				if(result[eMail] == pwd){
					that.tips2.html('密码正确');
				}else{
					that.tips2.html('密码不正确');
				}
		
			});
		},

		
		//点击登录
		clickLogin: function(){
			var that = this;

			this.submitBtn.click(function(){
				var eMailstr = that.userName.val();

				var pwdStr = that.password.val();
				that.checkUname( eMailstr );//检查用户名
				that.checkPwd( pwdStr );//检查密码
				
				if( that.autoLogin.hasClass('doauto') ){
					//console.log(that.autoLogin)
				
					$.cookie('username',that.userName.val(),{ expires:30, path:'/'} );
					$.cookie('password',that.password.val(),{ expires:30,path:'/'} );
					
				}

			});
		},
		//点击是否记住密码 
		clickRemmber: function(){
			var that = this;
			var flag = true; 
			this.autoLogin.click(function(){
				if(flag){
					$(this).removeClass('doauto');
					flag = false;
					//不记住密码 就移除cookie
					$.cookie('username',that.userName.val(),{ expires:-1, path:'/'} );
					$.cookie('password',that.password.val(),{ expires:-1,path:'/'} );
				}else{
					$(this).addClass('doauto');
					flag = true;
				}
					
			});
		},

		judgeRem: function(){
			var that = this;
			if( that.autoLogin.hasClass('doauto') ){
				that.userName.val( $.cookie('username') );
				//console.log($.cookie('username'));
				that.password.val( $.cookie('password') );
				//console.log( $.cookie('password') );
			}
		},


	};
	loginJudge.init();


});







