/*
* @Author: Administrator
* @Date:   2016-10-10 19:38:09
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-10 22:49:45
*/

//'use strict';

$(function(){
	fangdajing = {
		init: function(){
			this.zoomPad = $('.zoomPad');//大盒子
			this.showPic = this.zoomPad.find('.showPic');//显示的图片
			this.zoomPup = this.zoomPad.find('.zoomPup');//滤镜
			//this.zoomWindow = this.zoomPad.find('.zoomWindow');
			this.zoomWrapperImage = this.zoomPad.find('.zoomWrapperImage');//大图片

			this.offsetX = this.zoomPad.offset().left;//图片盒子距离浏览器左边距离
			this.offsetY = this.zoomPad.offset().top;//图片盒子距离浏览器上面距离(固定值)
			//console.log(this.offsetY)
			var X = 0;//定义变量滤镜位置
			var Y = 0;

			this.mouseenter();
			//this.mousemove();

		},

		mouseenter: function(){//鼠标移入
			var that = this;
			this.zoomPad.hover(function() {
				that.showPic.hide();
				that.zoomWrapperImage.show();

			}, function() {
				that.showPic.show();
				that.zoomWrapperImage.hide();
			});
		},
	};
	fangdajing.init();
});


























