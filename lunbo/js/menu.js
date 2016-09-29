/*
* @Author: Administrator
* @Date:   2016-09-21 20:00:12
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-22 11:49:57
*/

//'use strict';
$(function(){
	var menu = {
		//初始化
		init: function(){
			this.foodName = $('.food-name');
			this.foodPrice = $('.food-price');
			this.foodAmount = $('.food-amount');
			this.add = $('.add');
			this.remove = $('.remove');
			this.tablebody = $('.content');
			this.removeIt = $('.removeIt');

			this.addIn();
			this.removeTr();
			this.selectAll();

		},

		//点击写入
		addIn: function(){
			var that = this;
			this.add.click(function(){
				//console.log('aa');
				var tr = '<tr>';
					tr += '<td><input type="checkbox" class="select" /></td>';
					tr += '<td>'+that.foodName.val()+'</td>';
					tr += '<td>'+that.foodPrice.val()+'</td>';
					tr += '<td>'+that.foodAmount.val()+'</td>';
					tr += '<td class="removeIt">删除</td>';
					tr += '</tr>';

				that.tablebody.append(tr);

			});

		},

			//点击删除
			//事件委托on()
			removeTr: function(){
				
				this.tablebody.on('click','.removeIt',function(){
					$(this).parent().remove();
				});
			
			},

			//点击全选 
			//prop 获取checked selected 属性值

			selectAll: function(){
				var that = this;
				$('.select_all').click(function(){
					console.log("1");
					if($(this).prop('checked')){
						that.tablebody.find('input[type=checkbox]').prop('checked',true);
					}else{
						that.tablebody.find('input[type=checkbox]').prop('checked',false);
					}
				});
			},


			




	};
	menu.init();
});



















