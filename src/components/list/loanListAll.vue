<template>
		<div class="loanListAll">
			<div class="tabletitle">产品列表</div>
			<ul>
				<li style="width:256px;padding-left:32px">产品名称</li>
				<li style="width:128px">年化利率</li>
				<li style="width:120px">还款方式</li>
				<li style="width: 95px">{{data}}</li>
				<li style="width:162px">{{dataa}}</li>
				<li style="width:92px; text-align:center;">{{datab}}</li>
				<li style="width:162px; text-align:center;">{{datac}}</li>
				<li style="width:153px; text-align:center;">状态</li>
			</ul>
			<slot name="list_wrap"></slot>
			
			
		</div>
	</div>
</template>

<style type="text/css" media="screen">
.loanListAll {
    width: 1200px;
    margin:auto;
}
.tabletitle {
    font-size: 22px;
    color: #221815;
    margin:32px 0 21px 0;
}

</style>
<script type="text/javascript">

export default{
	props:["data","dataa","datab","datac"]
}
</script>