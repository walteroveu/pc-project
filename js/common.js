/*
* @Author: Administrator
* @Date:   2016-10-10 18:00:52
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-10 18:23:36
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
};



//右边快速导航栏
$(function(){
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




