/**
 * 2016东汇养车js集合
 * 2016/7/24/17/41新建
 *曾泓珂(koko)
 **/

$(function(){
	
	//车辆管理选择默认
	$('.carManage_tool_left').click(function(){
		$('.icon_27').attr('src','img/icon_27.png');
		$('.carManage_tool_left').find('span').text('设为默认');
		$(this).find('img').attr('src','img/icon_28.png');
		$(this).find('span').text('默认车辆');
	});
	
	//车辆管理车牌号地名选择
	$('.add_car_pro').click(function(){
		$('.onSelect_bg').show();
		$('.car_pro_block').show();
	});
	$('.province_name').find('span').click(function(){
		var aTxt = $(this).text();
		$('.add_car_pro').text(aTxt);
		$('.add_car_pro').css({'background':'#ef4043','color':'#fff'});
		$('.onSelect_bg').hide();
		$('.car_pro_block').hide();
	})
	
	//门店列表筛选器-智能排序
	$('.condition_show_li').click(function(){
		
		if($('.condition_ul_next').is(':hidden')){
			$('.condition_service_box').hide();
			$('.condition_service_li').css('color','#848689');
			$('.condition_service_li').find('img').attr('src','img/icon_37.png');
			$('.onSelect_bg').show();
			$('.condition_ul_next').show();
			$(this).css('color','#f25353');
			$(this).find('img').attr('src','img/icon_36.png');
		}else{
			$('.onSelect_bg').hide();
			$('.condition_ul_next').hide();
			$(this).css('color','#848689');
			$(this).find('img').attr('src','img/icon_37.png');
		}
		
	});
	
	$('.condition_ul_next > li').click(function(){
		var aTxt = $(this).text();
		$('.condition_ul_next > li').find('img').attr('src','img/icon_39.png');
		$('.condition_ul_next > li').css('color','#848689');
		$(this).find('img').attr('src','img/icon_38.png');
		$(this).css('color','#f25353');
		$('.condition_show_li').find('span').text(aTxt);
		$('.onSelect_bg').hide();
		$('.condition_ul_next').hide();
		$('.condition_show_li').css('color','#848689');
		$('.condition_show_li').find('img').attr('src','img/icon_37.png');
		
	})
	
	//门店列表筛选器-服务筛选
	$('.condition_ul_service > li').click(function(){
		$('.condition_ul_service > li').css({'background':'#fff','color':'#848689'});
		$(this).css({'background':'#f2f2f2','color':'#f25353'})
	});
	
	$('.condition_service_li').click(function(){
		if($('.condition_service_box').is(':hidden')){
			$('.condition_ul_next').hide();
			$('.condition_show_li').css('color','#848689');
			$('.condition_show_li').find('img').attr('src','img/icon_37.png');
			$('.onSelect_bg').show();
			$('.condition_service_box').show();
			$(this).css('color','#f25353');
			$(this).find('img').attr('src','img/icon_36.png');
		}else{
			$('.onSelect_bg').hide();
			$('.condition_service_box').hide();
			$(this).css('color','#848689');
			$(this).find('img').attr('src','img/icon_37.png');
		}
	})
	
	$('.service_detail_li > li').click(function(){
		var aTxt = $(this).text();
		$('.service_detail_li > li').css('color','#848689');
		$(this).css('color','#f25353');
		$('.condition_service_li').find('span').text(aTxt);
		$('.onSelect_bg').hide();
		$('.condition_service_box').hide();
		$('.condition_service_li').css('color','#848689');
		$('.condition_service_li').find('img').attr('src','img/icon_37.png');
	});
	
	$('.service_bg').click(function(){
		$('.condition_service_box').hide();
		$('.condition_service_li').css('color','#848689');
		$('.condition_service_li').find('img').attr('src','img/icon_37.png');
		$('.condition_ul_next').hide();
		$('.condition_show_li').css('color','#848689');
		$('.condition_show_li').find('img').attr('src','img/icon_37.png');
		$(this).hide();
	})
	
	//门店-店铺服务关注icon
	$('.service_icon_share').click(function(){
		var oVal = $(this).find('img').attr('value');
		if(oVal == 1){
			$(this).find('img').attr('src','img/icon_45.png');
			$(this).find('img').attr('value','2');
		}else {
			$(this).find('img').attr('src','img/icon_43.png');
			$(this).find('img').attr('value','1');
		}
		
	})
	
	
	//门店详情tab标签选中
	$('.store_detail_title > span').click(function(){
		$('.store_detail_title > span').removeClass('store_detail_title_on');
		$(this).addClass('store_detail_title_on');
	})
	
	
	//综合服务input按钮
	$('.integrated_services_li').toggle(function(){
		$(this).find('.icon_47').attr('src','img/icon_48.png');
	},function(){
		$(this).find('.icon_47').attr('src','img/icon_47.png');
	})
	
	
	
	
})




