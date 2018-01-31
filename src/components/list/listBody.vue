<template>
	<div class="contentMain">
		<screenBox txt="理财周期" msg="年化利率" txtb="1-3个月" txtc="4-6个月" txtd="7-9个月" txte="10-12个月" txtf="12个月以上" msgb="5%-6.99%" msgc="5%-6.99%" msgd="9%-11%" msge="大于11" ></screenBox>
		<loanListAll data="期限" dataa="订购规模" datab="进度" datac="剩余时间">
			<div slot="canvas" class="indicatorContainer" percentVal="24" style="width:60px;"></div>
		</loanListAll>
	</div>
</template>
<script type="text/javascript">
	import screenBox from './screenBox'
	import loanListAll  from './loanListAll'
	export default{
		components:{
			screenBox,
			loanListAll
		}
	}
</script>
<style type="text/css" media="screen">
	a{
	color: #595757;

}
a:hover {
	   	text-decoration: none;
}
.contentMain{
    width:1200px;
    margin:31px auto;
    margin-bottom: 0; 
}
</style>