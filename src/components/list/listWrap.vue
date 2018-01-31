<template>
	<div>
				<a style="color: initial;text-decoration: none;" href="/loan-dealpage-loanid-25.html">
				<table class="loanList" border-bottom="1px">
					<tbody>
						<tr>
							<td style="width:256px;padding-left:32px">
								<a style="display: inline-table;background: none;" href="/loan-dealpage-loanid-25.html">[ID25]资产·担保2号</a>
							</td>
							<td style="width:128px;font-size:22px;color:#d70937">7.20%</td>
							<td style="width:120px;position: relative;" class="listhover">
								付息还本
								<i class="iocnnews">
									<div class="tips1 animated">
								    	<b></b>
										<div>按月付息，到期还本</div>
									</div>
								</i>
							</td>
							<td style="width: 95px">12个月</td>
							<td style="width:162px">￥200.00万</td>
							<td style="width:92px; text-align:center;" class="container">
									{{ele}}
								<slot name="canvas"></slot>
							</td>
							<td style="width:162px; text-align:center;">
								12天19小时18分钟 </td>
							<td style="width:153px; text-align:center;">
								<router-link to="/loan-dealpage" class="listbutton dis" style="display: none;">查看详情</router-link>
								<a href="/loan-dealpage-loanid-25.html" class="listbutton">筹款中</a>
							</td>
						</tr>
					</tbody>
				</table>
			</a>
			<div class='pageBox'> </div>
			</div>
</template>
<script type="text/javascript">
	require('assets/css/page.css')
	$(function() {
		$('.indicatorContainer').each(function() {
			$(this).radialIndicator({
				barColor: '#595757',
				barWidth: 3,
				initValue: $(this).attr('percentVal'),
				roundCorner: true,
				percentage: true
			});
		});
		$(".listIndex").find("a").on("click",function(){
	var textTypeIndex =$(this).parents("dl").index();
	var textType =$(this).parents("dl").attr('conditionName');
	index = textTypeIndex -(2);
	$(this).addClass("selected").siblings().removeClass("selected");
	var conditions=new Object();
	$('.screenBody > dl').each(function(){
		if ($(this).find('.selected').attr('val')) {
			if ($(this).find('.selected').attr('val')!='0') {
				conditions[$(this).attr('conditionName')]=$(this).find('.selected').attr('val');
			}
		}
	});
	conditions['controller']='Loan';
	conditions['action']='index';
	$.post('/index-creaturl.html',conditions,function(data){
		window.location.href=data;
	});
});
	})

	export default{
		props:["ele"]
	}
</script>
<style type="text/css" media="screen">
	.loanList {
    width: 100%;
    background:#fff;
    line-height:60px;
    text-align:center;
    font-size:14px;
    color:#828282;
    border-spacing:0;
}
    .loanList tbody tr {
        border-bottom-style: solid;
        border-bottom-color: #eeeeee;
        border-bottom-width: 1px;
        display:table;
    }
.loanList tbody tr td:nth-child(1) {
	text-align: left;
}
.loanList tbody tr:hover td:nth-child(1) a {
	color: initial;
}
.loanList tbody tr td:nth-child(1) a:hover{
	color:#d70937;
	transform: scale(1.2);
}
.loanList tbody tr:hover {
   /* color: #d70937;*/
    display :inline-table ;
    background: #f9f9fc;
    box-shadow: 0 0 15px #d9d9d9;
}

.listbutton {
    background: #fff;
    border:none;
    cursor:pointer;
    font-size:14px;
    color:#727272;
    font-family:"微软雅黑";
    font-style:normal;
    display:inline-table;
    width:100px;
    line-height:30px;
    transition: all .4s ease 0s;
/*    position: absolute;*/


}
.loanList tbody tr:hover td .dis {
	color: #ffffff;
}
.loanList tbody tr:hover td .dis {
	display: block!important;
	margin-left:calc(50% - 50px);
/*	opacity: 1!important;
	visibility: visible!important;*/
}
.loanList tbody tr:hover td .dis:hover {
	background: #ff3333;
}
.loanList tbody tr:hover td a{
	background: #d70937;
	/*color: #ffffff;*/
	transition: all .4s ease 0s;
	display: none;
/*    opacity: 0;
    visibility: hidden;*/
}
.loanListAll ul li {
	float: left;
	background: #ffffff;
	text-align: center;
	color: #828282;
	line-height: 70px;
	font: 14px;
}
.loanListAll ul li:nth-child(1) {
	text-align: left;
}
.loanListAll ul{
	border-bottom: solid #eeeeee 1px;
	height: 70px;

}
.listNotes{
	width: 206px;
	height: 64px;
	position: absolute;
	background: #ffffff;
	box-shadow: 0px 2px 3px rgba(0,0,0,12);
}

.loanList tbody tr td .tips1 {
	position: absolute;
	width: 210px;
	height: 68px;
	left: -34px;
	top:-70px;
	background: #ffffff;
	line-height: 18px;
	box-shadow: 1px 2px 3px #e6e6e6;
	border: 1px solid #e6e6e6;
	text-align: left;
	color: #5e5e5e;
	font-size: 12px;
	z-index: 999;
	-webkit-animation-duration:.5s;
	animation-duration: .5s;
	margin-left: -60px;
	visibility: hidden;
	opacity: 0;
	transition: all .4s ease 0s;
}
.loanList tbody tr td .tips1 b {
	width: 0;
	height: 100%;
	vertical-align: middle;
}
.loanList tbody tr td .tips1 div {
	display: inline-block;
	padding: 8px;
	vertical-align: middle;
}
.loanList tbody tr td i:hover .tips1 {

	visibility: visible;
	opacity: 1;
	-webkit-animation-name: fadeIn;
	animation-name: fadeIn;
}
.loanList tbody tr td .tips1:before {
	display: block;
	position: absolute;
	content: '';
	width: 0;
	height: 0;
	border: 10px solid transparent;
	border-top-color: #e6e6e6;
	bottom: -20px;
	left: 50%;
	margin-left: -10px;
	box-sizing: border-box;
}
.loanList tbody tr td .tips1:after {
	display: block;
	position: absolute;
	content: '';
	width: 0;
	height: 0;
	border: 10px solid transparent;
	border-top-color: #ffffff;
	bottom: -18px;
	left: 50%;
	margin-left:-10px;
	box-sizing: border-box;
}
/* 进度条 */
canvas{
	width: 50px;
	margin: 5px 0 0 20px;
}
/* 问号 */
.iocnnews {
	background: url('./picture/account_loan_tip_2.png') no-repeat 5px 12px;
	padding: 15px;
	cursor: pointer;
	position:absolute;
	top:10px;
	left: 86px;
	transition: all .2s ease 0s;
}
.iocnnews:hover,.loanList tbody tr td i:hover .iocnnews {
	background: url('./picture/account_loan_tip_1.png') no-repeat 5px 12px;
}
</style>
