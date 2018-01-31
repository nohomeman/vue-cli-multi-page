<template>
	<div>
		<vheader d="true">
		
		</vheader>
		<div class="bannerabout"></div>
		<div class="reveal_main">
	<ul class="reveal_main_01" id="reveal_main_01_t1">
		<span>数据总览</span><br>
		<li><span>￥23,522,000.00</span><p>累计投资金额</p></li>
		<li><span>￥0.00</span><p>已还本金</p></li>
		<li><span>￥22,000,000.00</span><p>待还金额</p></li>
		<li><span>￥0.00</span><p>累计预期收益</p></li>	
	</ul>
	<ul class="reveal_main_01" id="reveal_main_01_t1">
		<span style="float: left;width: 200px;">每月投资金额</span>
		<select name="" id="clickyear"  class="" style=" position: relative;z-index: 1; margin: 20px auto;width: 94px;height: 30px;border: 1px #b1b1b1 solid;font-size: 13px;color: #666666;line-height: 30px;float: right;">
			<option value="2018" selected="selected">2018</option>
			<option value="2017" >2017</option>
			<option value="2016" >2016</option>
		</select> 
		<div id="money" style=""></div>
	</ul>
	<ul class="reveal_main_01" id="reveal_main_01_t1">
		<span>用户统计</span><br>
		<li id='tt1' style=""><span>170</span><p>加盟人数</p></li>
		<li id='tt1' style=""><span>49</span><p>投资人数</p></li>
	</ul>
	<ul class="reveal_main_01" style="">
		<span>注册人年龄分布</span>
		<div id="age" style=""></div>
	</ul>
	<ul class="reveal_main_01"  style="">
		<span>注册用户投资比例</span>
		<div id="investment" style=""></div>
	</ul>
	<ul class="reveal_main_02" id="reveal_main_01_t1">
		<span>投融资统计</span><br/>
		<li><span>￥4,647,058.82</span><p>平均每笔融资金额</p></li>
		<li><span>￥480,040.82</span><p>人均累计投资金额</p></li>
		<li><span>￥19,552.78</span><p>平均每笔投资金额</p></li>
	</ul>
<!-- 	<ul class="reveal_main_01">
		<span>最大单户融资余额占比（截止当前日期）</span>
		<div id="single1" style=""></div>
	</ul>
	<ul class="reveal_main_01">
		<span>最大十户融资余额占比（截止当前日期）</span>
		<div id="ten1" style=""></div>
	</ul> -->
	<ul class="reveal_main_01" id="">
		<span>最大单户投资余额占比（截止当前日期）</span>
		<div id="single2" style=""></div>
	</ul>
	<ul class="reveal_main_01" id="">
		<span>最大十户投资余额占比（截止当前日期）</span>
		<div id="ten2" style=""></div>
	</ul>
	<ul class="reveal_main_01" id="reveal_main_01_t1">
		<span>逾期统计</span><br/>
		<li><span>1</span><p>逾期项目总数</p></li>
		<li><span>0%</span><p>平台项目逾期率</p></li>
		<li><span>￥35,000.00</span><p>逾期金额</p></li>
		<li><span>0%</span><p>金额逾期率</p></li>	
	</ul>
	<ul class="reveal_main_01"  id="reveal_main_01_t1">
	<span>逾期详情（截至今日）</span><br>
	
		
		<table class="yuqi" cellspacing="0">
			<tbody>
				<tr>
					<td class="t1" >序号</td>
					<td class="t2" >标的ID</td>
					<td class="t3" >逾期金额（元）</td>
					<td class="t4" >期数</td>
					<td class="t5" >逾期罚金（元）</td>
					<td class="t6" >是否偿还</td>
					<td class="t7" >应还日期</td>
					<td class="t8" >实还日期</td>
					<td class="t9" >逾期原因</td>
				</tr>
<!-- 				<tr>
					<td>1</td>
					<td>1023</td>
					<td>2000.00</td>
					<td>2/3</td>
					<td>1000.00</td>
					<td>已偿还</td>
					<td>2017-08-02</td>
					<td>2017-08-03</td>
					<td>不熟悉操作</td>
				</tr> -->
			<tr>
					<td>1</td>
					<td>9</td>
					<td>￥35,000.00</td>
					<td>11/12</td>
					<td>￥10.50</td>
					<td>已偿还</td>
					<td>2017-12-28</td>
					<td>2017-12-27</td>
					<td>不熟悉操作</td>
				</tr>			</tbody>
		</table>
				
	</ul>
	<div class='pageBox'>    </div></div>
		<vfooter></vfooter>
		<kefu></kefu>
	</div>
</template>
<script type="text/javascript">
	require('assets/css/page.css')
	require('assets/css/styleNewsReveal.css')

	require('assets/js/mycharts.js')
	import vheader from 'components/header/vheader'
	import vfooter from 'components/footer/vfooter'
	import kefu from 'components/kefu/kefu'

	export default{
		data(){
			return {

			}
		},
		mounted(){
			
		},
	    methods: {
	   
	    },		
		components:{
			vheader,
			vfooter,
			kefu
		}
	}

</script>
<style type="text/css" media="screen">
		.bannerabout{
    background: url('./picture/about_banner.jpg') no-repeat center;
    background-size: cover;
    height: 320px;
}
</style>
