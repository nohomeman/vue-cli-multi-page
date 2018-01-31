<template>
	<div class="indexBody clearfix">
	<div class="indexFeature clearfix">
		<ul>
			<li class="FIcon" >
				<p class="ficon">
					<img src="./picture/home_notice_1.png" hovername="home_notice_1" class="FeatureIcon" >
				</p>
				<div class="title">
					<p>安心理财</p>
					<p>产品优质、信息透明</p>
				</div>
			</li>
			<li class="FIcon">
				<p class="ficon">
					<img src="./picture/home_notice_2.png" hovername="home_notice_2" class="FeatureIcon" >
				</p>
				
				<div class="title">
					<p>轻松借款</p>
					<p>操作方便、流程简单</p>
				</div>
			</li>
			<li class="FIcon">
				<p class="ficon">
					<img src="./picture/home_notice_3.png" hovername="home_notice_3" class="FeatureIcon" >
				</p>
				
				<div class="title">
					<p>安全保障</p>
					<p>风控严格、团队专业</p>
				</div>
			</li>
			
		</ul>
	</div>
	<div class="indexGuide">
		<a href="/news-guide.html"><img src="./picture/home_guide.jpg"><span class="gicon"></span></a>
	</div>
</div>
</template>
<script type="text/javascript">

$(function(){
	var url = 
	
		$('.FIcon').mouseover(function(){
	$(this).find('img').attr('src',require('./picture/'+$(this).find('img').attr('hovername')+'.gif'));
});

$('.FIcon').mouseout(function(){
	$(this).find('img').attr('src',require('./picture/'+$(this).find('img').attr('hovername')+'.png'));
});



})
	export default{
		
		

	}
</script>
<style type="text/css" media="screen">
	.indexBody{width:1200px;margin:auto;margin-top:30px;}
.indexBody .indexGuide{float:right;}
.indexBody .indexGuide .gicon{
    background: url(./picture/home_guide_btn.png);
    width: 40px;
    height: 40px;
    display: inline-block;
    position: absolute;
    margin: 50px 0px 0px -83px;
    transition: all .2s ease; 
}

.indexBody .indexGuide a:hover .gicon{background: url(./picture/home_guide_btn_hover.png);}
.indexBody .indexFeature{float:left;width:896px;background: white;height:160px;}
.indexBody .indexFeature ul li{text-align: center; float: left; width: 194px; margin-top: 54px; margin-left: 82px;}
.indexBody .indexFeature ul li img{width: 48px;height:48px;}
.indexBody .indexFeature ul li .title{font-weight:bold;float: left;margin-left:20px;text-align: left; line-height: 26px;}
.indexBody .indexFeature ul li .title p:first-child{font-size:20px;color: #5e5e5e;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-khtml-user-select:none;cursor:default}
.indexBody .indexFeature ul li .title p:nth-child(2){font-size:14px;color: #a5a5a5;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-khtml-user-select:none;cursor:default}
.indexBody .indexFeature ul li .ficon{float: left}
</style>