<template>
	<div>
		<vheader d="true">
		

		</vheader>
		<div class="bannerabout"></div>
		<div class="about_content">
	<div class="about_title1">
		<span>金信资本平台简介</span>
		<ul style="width: 320px;padding: 0px 5px;">
			<li class="bottomline"></li>
			<li><img src="./picture/about_diamond_1.png" /></li>
			<li class="bottomline"></li>
		</ul>
	</div>
	<div class="content1">
		<p>金信资本是一家专注于供应链金融、代理销售金融资产交易所内注册资产的网络交易信息平台<br>
		平台与通联支付合作，资金托管于银行专用账户内，保证投资客户的资金安全</p>
		<div class="tonglian">
		<div class="leftline1"></div>
			中国互联网信用评价中心AAA评级<br>
			中国支付清算协会会员<br>
			2012年中国电子金融金爵奖
		</div><br>
		<p class="Annotations" style="width: 100%;font-size: 14px;color: #999999;">注：资金托管可以有效避免平台跑路的风险，但无法消除其他因素产生的投资风险</p>
	</div>
</div>
<div class="about_content3">
	<div style="width: 1200px;margin: 0 auto">
	<div class="about_title3">
		<span>平台风险控制流程图</span>
	</div>
	<img src="./picture/about_flowchart_1.png"/>
	<ul>
		<li>融资方提供结算单据及其它贷款申请材料，<br>
		向金交所提出融资申请</li>
		<li>收到融资申请之后，金交所对融资方进行尽职检查，<br>
		核实所提交材料的真实性</li>
		<li>材料核实无误后，金交所与融资方<br/>签订交易服务协议</li>
	</ul>
	<img src="./picture/about_flowchart_2.png"/>
	<ul>
		<li>SPV到金交所够买优质债权，实现债权让渡<br>
		风险被控制到最低</li>
		<li>借款合同签订之后，平台进行挂标、客户投资，<br>
		满标之后SPV提现</li>
		<li>SPV每月还息、到期还本，金信平台负责贷后管理<br>
		监督还息还本</li>
	</ul>
	</div>
</div>
<div class="about_content2">
	<div class="about_title2">
		<span>平台风险控制措施简介</span>
		<ul style="width: 450px;padding: 0px 5px;">
			<li class="bottomline"></li>
			<li><img src="./picture/about_diamond_2.png" /></li>
			<li class="bottomline"></li>
		</ul>
	</div>
	<div class="content2">
		<p>金信惠融严格秉承“零逾期、零异常”的风险控制目标，所有在线产品均在山东金融资产交易中心备案，金交所实地项目考察，<br>
		贷款流程引入SPV机制，将贷款风险降到最低，切实保障投资人的权益</p>
	</div>
	<ul class="risk">
		<li>
			<img src="./picture/about_riskmanagement_1.png"/>
			<p>金交所实地考察</p>
			<ul>
				<li>合作方山东金融资产交易中心</li>
				<li>在线产品均在金交所备案</li>
				<li>金交所严格监管实地项目考察</li>

			</ul>
		</li>
		<li>
			<img src="./picture/about_riskmanagement_2.png"/>
			<p>金信平台严格风控</p>
			<ul>
				<li>供应链核心企业优质债权</li>
				<li>贷前对融资人进行严格审查</li>
				<li>贷款风险被控制到最低</li>

			</ul>
		</li>
		<li>
			<img src="./picture/about_riskmanagement_3.png"/>
			<p>平台信息加密防护</p>
			<ul>
				<li>平台采用数字签名、加密等技术</li>
				<li>赛门铁克公司最高级别证书</li>
				<li>数据稳定性高于99.9999999%</li>
			</ul>
		</li>
		<li style="margin-right:0">
			<img src="./picture/about_riskmanagement_4.png"/>
			<p>签订四方协议</p>
			<ul>
				<li>平台与各方签署四方协议</li>
				<li>实现货权转移和债权让渡</li>
				<li>贷后平台监督SPV还息还本</li>

			</ul>
		</li>
	</ul>
</div>
		
	

		<div style="position:relative;background: #ffffff;">
  <div class="count-architecture-diagram">
    <div class="title">金信惠融公司架构图</div>
    <img src="./picture/about_architecture_diagram.png" alt="">
  </div>
  <div id="particles-js"></div>
</div>
	<div id="container"></div>
		<vfooter></vfooter>
		<kefu></kefu>
	</div>
</template>
<script type="text/javascript">
require('assets/css/nav.css')

	import particles from 'particles.js'
	import vheader from 'components/header/vheader'
	import vfooter from 'components/footer/vfooter'
	import kefu from 'components/kefu/kefu'
	// import particles from 'components/particles'

	export default{
		components:{
			vheader,
			vfooter,			
			kefu
		},
		mounted(){
		particlesJS.load('id',require('assets/js/app.data'));
	}
	}

	var searchService,map,markers = [];
$(function() {
    var center = new qq.maps.LatLng(36.857470,118.061940);
    map = new qq.maps.Map(document.getElementById('container'),{
        center: center,
        zoom: 17
    });
    var infoWin = new qq.maps.InfoWindow({
        map: map
    });
    infoWin.open();
    //tips  自定义内容
    infoWin.setContent('<div style="width:124px;padding-top:10px;">'+
        '<img style="float:left;" src="https://www.qcjinxin.com/Application/Home/View/default/Static/images/new/logo.png?v=2"/> '+
        '</div>');
    infoWin.setPosition(center);
    //设置圆形
    new qq.maps.Circle({
        center:new qq.maps.LatLng(36.857470,118.061940),
        radius: 80,
        map: map
    });
    var latlngBounds = new qq.maps.LatLngBounds();
    //调用Poi检索类
    searchService = new qq.maps.SearchService({
        complete : function(results){
            var pois = results.detail.pois;
            for(var i = 0,l = pois.length;i < l; i++){
                var poi = pois[i];
                latlngBounds.extend(poi.latLng);  
                var marker = new qq.maps.Marker({
                    map:map,
                    position: poi.latLng
                });

                marker.setTitle(i+1);
                
                markers.push(marker);
            }
            map.fitBounds(latlngBounds);
        }
    });
});

//调用poi类信接口                                         
function searchKeyword() {
    var keyword = document.getElementById("keyword").value;
    region = new qq.maps.LatLng(36.857470,118.061940);
   
    searchService.setPageCapacity(5);
    searchService.searchNearBy(keyword, region, 80);//根据中心点坐标、半径和关键字进行周边检索。
}


</script>
<style type="text/css" media="screen">
	.bannerabout{
    background: url('./picture/about_banner.jpg') no-repeat center;
    background-size: cover;
    height: 320px;
}

    .bottomline{
    	width: 142px;
    	border-bottom: 2px solid #b59d84;
    }
    .leftline1{
    	border-left: 1px solid #c4c4c4;
    	height: 96px;
    	margin-right: 20px;
    	float: left;
    }
   	.about_content{
   		width: 1200px;
   		margin:0 auto 80px;
   	}
   .about_content .about_title1 {
   		width: 320px;
   		margin: 80px auto 56px;
   		line-height: 34px;
   		text-align: center;
   	}
   .about_content .about_title1 span {
   		font-size: 36px;
   		color: #b59d84;
   		width: 380px;
   		margin:0 auto 18px;

   	}
   	.about_content .about_title1 ul li {
   		float: left;
   		margin: 18px 0 0 0;
   	}
   	 .about_title1 ul li img {
		margin:-35px 8px 15px;
   	}
	.content1 p, .content1{
		text-align: center;
		line-height: 32px;
		font-size: 16px;
		color: #595959;
	}
	.tonglian{
		background:url('./picture/about_allinpay.jpg') no-repeat 0 20px;
		width: 245px;
		height: 96px;
		font-size: 14px;
		padding-left: 236px;
		text-align: left;
		margin: 20px auto 0;
		color: #666666;
	}
	.about_content2{
			height: 640px;
	   		width: 100%;
	   		margin:0 auto;
	   		background: url('./picture/about_bg_02.jpg') no-repeat center 0;
	   		padding: 5px 0 0 0;
	}
   	.about_title2 {
   		width: 400px;
   		margin: 80px auto 56px;
   		line-height: 34px;
   		text-align: center;
   	}
   	.about_title2 span {
   		font-size: 36px;
   		color: #ffd299;
   		width: 400px;
   		margin:0 auto 18px;

   	}
   	.about_title2 ul li {
   		float: left;
   		margin: 18px 0 0 0;
   	}
   	.about_title2 ul li img {
		margin:-35px 8px 15px 8px;
   	}
   	.about_title2 ul .bottomline {
   		width: 180px
   	}
	.content2 p, .content2{
		text-align: center;
		line-height: 32px;
		font-size: 16px;
		color: #e6e6e6;
	}
	.risk{
		width: 1200px;
		text-align: center;
		margin:0 auto;
	}
	.risk li {
		background: #fff;
		float: left;
		width: 290px;
		height: 300px;
		margin: 44px 13px 0 0 ;
	}
	.risk img {
		margin: 56px auto 21px ;
	}
	.risk p {
		text-align: center;
		color: #595959;
		font-size: 18px;
		line-height: 36px;
		font-weight: 700;
	}
	.risk li ul li {
		width: 200px;
		height: 28px;
		line-height: 28px;
		font-weight: normal;
		margin: 0 45px;
		text-align: left;
		list-style-type: disc;
	}
	.about_content3{
   		width: 100%;
   		margin:0 auto;
   		padding-bottom: 160px;
   		text-align: center;
   		background: #ffffff;
   	}
   	.about_title3 {
   		width: 320px;
   		margin:0 auto 56px;
   		padding-top: 86px;
   		line-height: 34px;
   		text-align: center;
   	}
   	.about_title3 span {
   		font-size: 32px;
   		color: #2e2e2e;
   		width: 380px;
   		margin:0 auto 66px;

   	}
	.about_content3 img {
		margin:0 auto;
	}
	.about_content3 ul{
		padding:0 60px;
	}
	.about_content3 ul li {
		width: 360px;
		margin: 23px 0 7px 0;
		float: left;
		font-size: 13px;
		color: #5b5b5b;
		text-align: center;
		line-height: 28px;
	}
#container {
   min-width:603px;
   min-height:400px;
}
.about_content4{
		height: 706px;
   		width: 100%;
   		margin:0 auto;
   		background: url('./picture/about_bg_01.jpg') no-repeat 0 0;
   		padding: 5px 0 0 0;
}
.content4 {
		text-align: center;
		line-height: 32px;
		font-size: 16px;
		color: #e6e6e6;
}
.content4 ul {
	width: 900px;
	margin: 0 auto;
}
.content4 ul li{
	width: 348px;
	float: left;
}
.content4 ul li:nth-child(2) {
	width: 494px;
	margin-left: 30px;
}
.content4 ul li table tbody tr td {
	border: #353334 1px solid;
	text-align: left;
	font-size: 13px;
	padding-left: 10px; 
}
.content4 ul li table tbody tr td:nth-child(1){
	background: #232122;
	color: #ffffff;
	width: 146px;
}
.content4 ul li table tbody tr td:nth-child(2){
	background: #2b2b2b;
	color: #fcbd79;
}
.about_content5 {
	height: 550px;
	width: 100%;
	margin:0 auto;
	background: url('./picture/about_bg_03.jpg') no-repeat 0 0;
	padding: 5px 0 0 0;
}
canvas{
  display:block;
  vertical-align:bottom;
}
.count-architecture-diagram {
  position: absolute;
  top: 0px;
  left: calc((100% - 720px) / 2);
  -webkit-user-select: none;
}
.count-architecture-diagram .title {
  width: 100%;
  height: 36px;
  text-align: center;
  padding: 42px 0px;
  font-size: 32px;
  font-family: 'Microsoft Yahei';
  color: #2e2e2e;
}
.js-count-particles{
  font-size: 1.1em;
}
#stats{
  -webkit-user-select: none;
  margin-top: 5px;
  margin-left: 5px;
}
#particles-js{
  width: 100%;
  height: 550px;
}
</style>