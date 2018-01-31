<template>
	<div class="indexBanner">
		<div id="focus">
	        <div class="focusWarp">
	            <ul class="imgList">
	            	<li>
	            		<div class="imgDiv" style=""></div>
	            	</li>
	            </ul>
	        </div>
	    </div>

	    <div class="indexlogin">
		    <div style="padding:10px">
		    	<div>
					<p style="font-size: 14px;color: #a6a6a6;margin-top: 68px;">金信资本累计成交额超过</p>
					<p style="margin-top: 48px;font-size: 56px;color: #ffffff;">7440.6<span style="font-size:23px">万元</span></p>
					<p style="color: #ffffff;font-size: 13px;margin-top: 18px;">为客户赚取245010.40元<img src="./picture/home_banner_continue.png" style="margin-left:8px"></p>
					<p style="margin-top: 54px;font-size: 16px;"><a href="/index-register.html" class="index_reg_btn">注册金信资本账户</a></p>
					<p style="font-size: 12px;color: #a6a6a6;margin-top: 14px;">已有3703位投资客户注册</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css" media="screen">
.indexBanner{width: 100%;min-width: 1200px; height: 426px;position: relative;}
.indexBanner .imgDiv{width:100%;min-width: 1200px; height:426px;background:url('./picture/big_20180108111906_25424.jpg');background-repeat:no-repeat;background-position:center top;background-size:auto 100%;}

/*#focus{width:1200px;height:426px;margin:0 auto;overflow:hidden;position:relative;  background:#c1c1c1;}*/
/*.focusWarp{width:1200px;height:426px;overflow:hidden;position:relative;}
.imgList{position:absolute;}
.imgList li{float:left;text-align:center;height:426px;}
.imgList li img{height:426px;}
.imgList_two{position:absolute;z-index:10;top:100px;}
.imgList_two li{float:left;text-align:center;}
.imgList_two li img{margin-left:-330px;}
.imgBtn{position:absolute;bottom:10px;z-index:10;}
.btnWarp{overflow:hidden;}
.imgBtn li{float:left;margin-right:10px;text-align:center;cursor:pointer; background: rgba(255,255,255,0.7); width: 25px; height: 5px;}
.imgBtn li.hover{background: #ffffff; width: 25px; height: 5px;}*/

.indexlogin{width: 288px; background: rgba(55,53,51,0.96); filter:alpha(opacity=96)progid:DXImageTransform.Microsoft.gradient(startColorstr=#373533,endColorstr=#373533); padding: 0px; height: 426px; top: 0px; position: absolute; left: 50%; margin-left: 312px;}
.indexlogin p{width:100%;text-align:center;margin-top:10px;}

.index_reg_btn{line-height: 42px;height: 42px;width: 210px;border: 1px solid #ffffff;display: inline-block; vertical-align: middle; color: #ffffff; -webkit-transform: perspective(1px) translateZ(0); transform: perspective(1px) translateZ(0); box-shadow: 0 0 1px transparent; position: relative; -webkit-transition-property: color; transition-property: color; -webkit-transition-duration: 0.3s; transition-duration: 0.3s;}
.index_reg_btn:before{content: ""; position: absolute; z-index: -1; top: 0; left: 0; right: 0; bottom: 0; background: #ffffff; -webkit-transform: scaleX(0); transform: scaleX(0); -webkit-transform-origin: 0 50%; transform-origin: 0 50%; -webkit-transition-property: transform; transition-property: transform; -webkit-transition-duration: 0.3s; transition-duration: 0.3s; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out;}
.index_reg_btn:hover, .index_reg_btn:focus, .index_reg_btn:active{color: #666666;}
.index_reg_btn:hover:before, .index_reg_btn:focus:before, .index_reg_btn:active:before{-webkit-transform: scaleX(1); transform: scaleX(1);}
.index_reg_btn:hover{text-decoration: none;}
</style>