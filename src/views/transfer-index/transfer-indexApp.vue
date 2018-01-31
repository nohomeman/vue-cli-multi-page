<template>
	<div>
		<vheader b="true">


		</vheader>
		<div class="banner"></div>
		<div class="contentMain">
		<screenBox txt="剩余期限" msg="年利率" txtb="6个月及以下" txtc="7-12个月" txtd="13-24个月" txte="25个月及以上" msgb="5%-6.99%" msgc="7%-8.99%" msgd="9%-11%" msge="大于11%" ></screenBox>
		<loanListAll data="转让用户" dataa="可交易金额" datab="折让率" datac="剩余期限">
			<listWrap slot="list_wrap" ele="123">

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
	import screenBox from 'components/list/screenBox'
	import loanListAll  from 'components/list/loanListAll'
	import listWrap from 'components/list/listWrap'
	import vfooter from 'components/footer/vfooter'
	import kefu from 'components/kefu/kefu'
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
