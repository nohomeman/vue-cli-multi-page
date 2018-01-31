<template>
	<div class="kefu-cs">
	<div class="floatL">
		<a style="display: block" id="aFloatTools_Show" class="btnOpen" title="查看在线客服"  href="javascript:void(0);"> 展开</a>
		<a style="display: none" id="aFloatTools_Hide" class="btnCtn" title="关闭在线客服"  href="javascript:void(0);"> 收缩</a>
	</div>
	<div id="divFloatToolsView" class="floatR" style="display: none">
		<div class="cn">
			<h3 class="titZx">在线咨询</h3>
			<ul>
									<li><a target="_blank" href="http://wpa.qq.com/msgrd?v=1&uin=1146712024&Site=www.qcjinxin.com&Menu=no"><img border="0" src="./picture/button_121.gif" alt="业务咨询" title="业务咨询" /> <span>业务咨询</span></a> </li>
									<li><a target="_blank" href="./picture/button_121.gif"><img border="0" src="./picture/button_121.gif" alt="加盟咨询" title="加盟咨询" /> <span>加盟咨询</span></a> </li>
									<li><a target="_blank" href="http://wpa.qq.com/msgrd?v=1&uin=1146712024&Site=www.qcjinxin.com&Menu=no"><img border="0" src="./picture/button_121.gif" alt="投资咨询" title="投资咨询" /> <span>投资咨询</span></a> </li>
									<li><a target="_blank" href="./picture/button_121.gif"><img border="0" src="./picture/button_121.gif" alt="借款咨询" title="借款咨询" /> <span>借款咨询</span></a> </li>
							</ul>
			<h3 style="padding-bottom: 0px;">联系电话</h3>
			<ul>
				<li style="color:#ff3700;font-size:15px;line-height: 25px;height: 30px;">0533-3177089</li>
			</ul>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
	export default{
		created(){
			$(function(){
				$('#aFloatTools_Show').click(function(){
					$('#divFloatToolsView').animate({width: 'show', opacity: 'show'}, 'normal',function(){ $('#divFloatToolsView').show();});$('#aFloatTools_Show').attr('style','display:none');$('#aFloatTools_Hide').attr('style','display:block')
				});
				$('#aFloatTools_Hide').click(function(){
					$('#divFloatToolsView').animate({width: 'hide', opacity: 'hide'}, 'normal',function(){ $('#divFloatToolsView').hide();});$('#aFloatTools_Show').attr('style','display:block');$('#aFloatTools_Hide').attr('style','display:none');
				})
			})
		}
	}
</script>
<style type="text/css" media="screen">
	.kefu-cs {
	background:rgba(51, 51, 51, 0.9);
	position: fixed;
	top: 230px;
	right: 1px;
	_position: absolute;
	z-index: 999;
	white-space:nowrap;
	filter:progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr='#E5333333', endColorstr='#E5333333');
}
.kefu-cs a {
	color: #00A0E9;
}
.kefu-cs a:hover {
	color: #ff8100;
	text-decoration: none;
}
.kefu-cs .floatL {
	width: 36px;
	float:left;
	position: relative;
	z-index:1;
}
.kefu-cs .floatL a {
	font-size:0;
	text-indent: -999em;
	display: block;
}
.kefu-cs .floatR {
	width: 130px;
	float: left;
	padding: 5px;
	overflow:hidden;
}
.kefu-cs .floatR .cn {
	background: #F7F7F7;
}
.kefu-cs .cn h3 {
	font-size: 14px;
	color: #333;
	font-weight:600;
	line-height: 24px;
	padding: 5px
}
.kefu-cs .cn ul {
	padding: 0 0 0 8px;
}
.kefu-cs .cn ul li {
	line-height: 38px;
	height:38px;
	border-bottom: solid 1px #E6E4E4;
	overflow: hidden;
}
.kefu-cs .cn ul li span {
	color: #777;
}
.kefu-cs .cn ul li img {
	vertical-align: middle;
}
.kefu-cs .btnOpen, .kefu-cs .btnCtn {
	position: relative;
	z-index:9;
	top:0;
	left: 0;
	background-image: url(./picture/kefu.png);
	background-repeat: no-repeat;
	display:block;
	width: 20px;
	height: 146px;
	padding: 8px;
}
.kefu-cs .btnOpen {
	background-position: 0px 0;
}
.kefu-cs .btnCtn {
	background-position: -35px 0;
}
.kefu-cs ul li.top {
	border-bottom: solid #ACE5F9 1px;
}
.kefu-cs ul li.bot {
	border-bottom: none;
}
</style>
