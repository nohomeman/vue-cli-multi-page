<template>
	
		<div class="screenBox">
		<div class="title">筛选</div>
		<div class="screenBody">
			<!-- <dl class="listIndex" conditionName="loantype">
				<dt>产品类型</dt>
				<dd>
					<a val="0" class="selected">不限</a> 
									</dd>
			</dl> -->
			<dl class="listIndex" conditionName="loanterm">
				<dt>{{txt}}</dt>
				<dd>
					<a val="0" class="selected">不限</a> 
					<a val="1">{{txtb}}</a>
					<a val="2">{{txtc}}</a>
					<a val="3">{{txtd}}</a>
					<a val="4">{{txte}}</a>
					<a val="3">{{txtf}}</a>
					
				</dd>
			</dl>
			<dl class="listIndex" conditionName="loanlilv">
				<dt>{{msg}}</dt>
				<dd>
					<a val="0" class="selected">不限</a>
					<a val="5">{{msgb}}</a>
					<a val="7">{{msgc}}</a>
					<a val="9">{{msgd}}</a>
					<a val="11">{{msge}}</a>
				</dd>
			</dl>
		</div>
	</div>
	
</template>
<script type="text/javascript">
	export default{
		props:['txt','txta','txtb','txtc','txtd','txte','txtf','msg','msga','msgb','msgc','msgd','msge']
	}
</script>
<style type="text/css" media="screen">
.screenBox{
    background:#ffffff;
    padding:0 46px 0 26px;
}
.screenBox .screenBody{
    font-size:14px;
    color:#595757;
}
.screenBox dl{
    overflow:hidden;
    margin-left: 8px;
    line-height:60px;
}
.screenBox dl:nth-child(1) {
	border-bottom:#e6e6e6 1px solid;
}
.screenBox dl dt{
	float:left;
	width: 75px;
	padding-top: 5px;
	color:#666666;
}
.screenBox dl dd{
	position: relative;
	padding-top: 5px;
	width: 883px;
	float: left;
	overflow: hidden;
}
.screenBox dl dd a{
    margin: 0px 6px 0px 6px;
    overflow: hidden;
    text-decoration: none;
    padding: 5px 10px;
    display:inline
}
.screenBox dl dd a.selected,.screenBox dl dd a:hover{
    color:#d70937;
    border-radius: 5px;
}
.screenBox .title{
    font-size: 16px;
    color: #221815;
    margin-left:8px;
    line-height:60px;
    height:60px;
    border-bottom:solid #e6e6e6 1px;
}
</style>