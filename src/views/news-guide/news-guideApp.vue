<template>
	<div>
		<vheader c="true">
			
		</vheader>
		<div class="banner"></div>
		<div class="guide_bg">
	<div class="guide_title">平台优势</div>
		<ul class="guide_notice">
			<li>
				<img src="./picture/guide_notice_1.png">
				<h2>知名品牌</h2>
				<p>全国布局、实力雄厚</p>
			</li>
			<li>
				<img src="./picture/guide_notice_2.png"/>
				<h2>专业团队</h2>
				<p>精英团队、服务专业</p>
			</li>
			<li>
				<img src="./picture/guide_notice_3.png"/>
				<h2>安全省心</h2>
				<p>风控严格、管理严密</p>
			</li>		
		</ul>
</div>
<div class="guide_banner2"></div>
<div class="guide_bg" style="height:800px">
	<div class="guider_shoadow" style="margin-top:30px">
		<div class="QA">
			<div class="QA_title">
				<p>常见问题</p>
			</div>
		</div>
		<accordion></accordion>
	</div>
</div>
		

		<vfooter></vfooter>
		<kefu></kefu>
	</div>
</template>
<style type="text/css" media="screen">

.banner{
	background: url('./picture/guide_banner.jpg') no-repeat center;
    background-size: cover;
    height: 320px;
}
 .guide_banner2 {
	background: url('./picture/guide_banner2.jpg') no-repeat center;
    background-size:cover;
    height:526px;
}

</style>
<script type="text/javascript">
	require('assets/css/nav.css')
	require('assets/css/style_guide.css')
	import vheader from 'components/header/vheader'
	import vfooter from 'components/footer/vfooter'
	import kefu from 'components/kefu/kefu'
	import accordion from 'components/help/accordion'
	export default {
		data(){
			return {
				
			}
		},
		components: {
			vheader,
			vfooter,
			accordion,
			kefu
		},

	}
</script>