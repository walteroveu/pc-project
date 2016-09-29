/*
* @Author: Administrator
* @Date:   2016-09-21 14:55:53
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-21 19:55:24
*/

	$(function(){
		var banner = {

			init: function(){
				this.now = 0;
				this.next = 0;
				this.arrowL = $('.arrow-left');
				this.arrowR = $('.arrow-right');
				this.imgs = $('.img-wrapper img');
				
				this.timer = null;
				this.autoPlay();
				this.qiehuan();
				this.mouseflow();


			},

			autoPlay: function(){
				var that = this;

				this.timer = setInterval(function(){
					that.next++;
					that.next %= that.imgs.length;

					that.switchImg();

				},1500);
			},
			switchImg: function(){
				
				this.imgs.eq(this.now).fadeOut(500);
				//console.log(this.now);
				this.imgs.eq(this.next).fadeIn(500);
				this.now = this.next;

			},

			//鼠标移入/移出 暂停、播放
			mouseflow: function(){
				var that = this;
				$('.banner-wrapper').hover(function() {
					clearInterval(that.timer);
				}, function() {
					//setInterval(that.timer);
					that.autoPlay();
				});
			},



			//按钮点击按钮切换
			qiehuan: function(){
				var that = this;
				this.arrowR.click(function(){
					//console.log("q");
					//that.now++;
					/*
					that.imgs.eq(that.now).show(); */
					//that.autoPlay();
					that.next++;
					that.next %= that.imgs.length;

					that.switchImg();
				});

				this.arrowL.click(function(){
					that.next--;
					that.next %= that.imgs.length;
					that.switchImg();
				});


			},


		};
		banner.init();	
	});             