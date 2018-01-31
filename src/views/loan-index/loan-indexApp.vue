<template>
	<div>
		<vheader b="true">
			
		</vheader>
		<div class="banner"></div>
		<div class="contentMain">
		<screenBox txt="理财周期" msg="年化利率" txtb="1-3个月" txtc="4-6个月" txtd="7-9个月" txte="10-12个月" txtf="12个月以上" msgb="5%-6.99%" msgc="5%-6.99%" msgd="9%-11%" msge="大于11" ></screenBox>
		<loanListAll data="期限" dataa="订购规模" datab="进度" datac="剩余时间">
			<listWrap slot="list_wrap">
				<div slot="canvas" class="indicatorContainer" percentVal="24" style="width:60px;height:60px"></div>
			</listWrap>
			
		</loanListAll>
	</div>
		<vfooter></vfooter>
		<kefu></kefu>
	</div>
</template>
<style type="text/css" media="screen">
.banner {
	background: url('picture/product_banner.jpg') no-repeat center;
    background-size: cover;
    height: 320px;
}
	a{
	color: #595757;

}
a:hover {
	   	text-decoration: none;
}
.contentMain{
    width:1200px;
    margin:31px auto;
    }
</style>
<script type="text/javascript">

	
	require('assets/js/radialIndicator.js')
	import vheader from 'components/header/vheader'
	import vfooter from 'components/footer/vfooter'
	import kefu from 'components/kefu/kefu'
	import screenBox from 'components/list/screenBox'
	import loanListAll  from 'components/list/loanListAll'
	import listWrap from 'components/list/listWrap'
	export default {
		components: {
			vheader,
			vfooter,			
			screenBox,
			loanListAll,
			listWrap,
			kefu
		}
	}
</script>