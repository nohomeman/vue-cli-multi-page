<template>
	<div class="investbang">
			<div class="intitle">投资排行榜</div>
			<table>
				<tr>
					<td width="35px"> </td>
					<td width="80px">投资用户</td>
					<td align="right">累计投资额</td>
				</tr>
				<tr>
					<td><div class="picon">1</div></td>
					<td><div class="pnickname" style="width: auto;">135*****493</div></td>
					<td align="right"><div class="pmoney">￥1,966,000.00</div></td>
				</tr><tr>
					<td><div class="picon">2</div></td>
					<td><div class="pnickname" style="width: auto;">134*****772</div></td>
					<td align="right"><div class="pmoney">￥1,000,000.00</div></td>
				</tr><tr>
					<td><div class="picon">3</div></td>
					<td><div class="pnickname" style="width: auto;">139*****933</div></td>
					<td align="right"><div class="pmoney">￥1,000,000.00</div></td>
				</tr><tr>
					<td><div class="picon">4</div></td>
					<td><div class="pnickname" style="width: auto;">150*****013</div></td>
					<td align="right"><div class="pmoney">￥790,000.00</div></td>
				</tr><tr>
					<td><div class="picon">5</div></td>
					<td><div class="pnickname" style="width: auto;">135*****762</div></td>
					<td align="right"><div class="pmoney">￥600,000.00</div></td>
				</tr>			</table>
		</div>
</template>
<style type="text/css" media="screen">
	.investbang{margin-top:20px;background: #ffffff;width:260px;height:310px;float:left;}
.investbang .intitle{padding:16px 20px;color:#323232;font-size:18px;border-bottom:1px solid #f2f2f2;}
.investbang .pnickname{width:65px;overflow: hidden;height:20px;}
.investbang .pmoney{width:100px;overflow: hidden;height:20px;}
.investbang .picon{
	background: #322f2d;
    width: 16px;
    height: 16px;
    text-align: center;
    font-size: 13px;
    color: #ffffff;
    line-height: 16px;}
.investbang table{font-size:14px;padding: 0px 16px;    width: 100%;margin-top:10px;}
.investbang table td {padding:8px 0px;}
.investbang table td:nth-child(3){text-align: left;padding-left: 15px;}
</style>