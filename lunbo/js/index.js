/*
* @Author: Administrator
* @Date:   2016-09-21 10:03:32
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-22 11:50:06
*/

//'use strict';

//stop(true)
//hide
//show
//hover
$(function(){
	$('.accordion ul li').hover(function(){
		$(this).find('.intro').hide();
		$(this).stop(true).animate({
			width:400
		}).siblings().stop(true).animate({
			width:160
		})
	},function(){
		$(this).find('.intro').show();
		$('.accordion ul li').stop(true).animate({
			width:200
		})
	})

});