<template>
	<div>
		<vheader e="true"></vheader>
		<div class="help_banner"></div>
		<div class="helpcenter" style="margin-top: 30px;"> 
	<ul class="helpleft help_bg">
		<span>全部分类</span>
		<div style="position: relative;width: 68px;border-bottom: 2px solid #d70937;float: left;left: 46px;top: -10px;"></div>
		<li id="L1" @click="tab(1)" style="color: #d70937"><a>安全问题</a></li>
		<li id="L2" @click="tab(2)"><a>账号问题</a></li>
		<li id="L3" @click="tab(3)"><a>理财问题</a></li>
		<li id="L4" @click="tab(4)"><a>逾期问题</a></li>
		<li id="L5" @click="tab(5)"><a>其他问题</a></li>
	</ul>


	<ul id="accordion" class="accordion helpright" style="box-shadow:0px 0px 12px #eee">
		<div id="d1" style="display:block;">
			<li class="">
				<div class="link"><i class="fa fa-paint-brush"></i>我在金信惠融中投资安全么？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu drop-shadow">
					<li><br>

						金信惠融专注于流通领域大宗融资交易解决方案，所有在线产品均在山东金融资产交易中心备案，金交所实地项目考察、严格监管，债权标的均有应收账款质押和担保企业共同担保，融资方由山东金融资产交易中心进行风控调查，合作机构安全可靠。
					</li>
				</ul>			
			</li>
			<div class="bottomline"></div>
			<li>
				<div class="link"><i class="fa fa-code"></i>金信惠融中是如何保障投资人安全的？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
						供应链金融<br>
						金信惠融通过供应链金融模式，把单个企业的不可控风险转化为供应链企业整体的可控风险，通过双重担保及应收账款质押，把风险控制到最低。<br>
						第三方资金独立托管<br>
						金信惠融平台不设资金池，由通联支付作为第三方支付资金托管平台，资金的充值、支付、提现等全部过程均在第三方托管账户中完成，与平台完全隔离。
					</li>
				</ul>
			</li>
			<div class="bottomline"></div>
			<li>
				<div class="link"><i class="fa fa-mobile"></i>金信惠融如何保障我的信息安全？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
						金信惠融采用SSL加密技术，网站托管于阿里云服务器，可用性高达 99.95%，数据可靠性高达 99.9999999%，平台程序由公司内部技术团队开发，随时应对突发情况。
					</li>

				</ul>
			</li>
			<div class="bottomline"></div>	
		</div>
		<div id="d2">
			<li class="">
				<div class="link"><i class="fa fa-paint-brush"></i>注册金信惠融账号有什么要求？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu drop-shadow">
					<li><br>
						注册金信惠融账号需要填写您的手机号码，并需要接收手机验证码，建议使用您在银行预留的手机号码注册金信惠融账号。
					</li>
				</ul>			
			</li>
			<div class="bottomline"></div>
			<li>
				<div class="link"><i class="fa fa-code"></i>设置登录密码有什么要求？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
						6-16个字符，只能包含字母、数字以及英文标点符号（密码两边不能有空符号）。
					</li>
				</ul>
			</li>
			<div class="bottomline"></div>
			<li>
				<div class="link"><i class="fa fa-code"></i>注册个人账户时需要进行实名认证吗？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
					注册金信惠融账户时不需要对用户进行实名认证。但当用户开通第三方资金托管平台（通联支付）账户时，需对用户进行实名身份认证，且需与您之后要添加的银行卡的银行预留信息一致。用户真实身份在该平台一经核实，不能修改。
					</li>
				</ul>
			</li>
			<div class="bottomline"></div>
			<li>
				<div class="link"><i class="fa fa-code"></i>注册成功后可以更换手机号码吗？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
					可以，具体操作方法为：登录金信惠融网站，进入【我的账户】->【账户管理】->【安全设置】->【绑定手机】->【重新绑定】
					</li>
				</ul>
			</li>
			<div class="bottomline"></div>
			<li>
				<div class="link"><i class="fa fa-code"></i>对注册时填写的手机号码有什么要求？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
					您注册时使用的手机号码必须是大陆地区电信运营商支持的号段且不支持小灵通。
					</li>
				</ul>
			</li>
			<div class="bottomline"></div>
		</div>
		<div id="d3">
			<li>
				<div class="link"><i class="fa fa-code"></i>如何开通资金托管账户？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
					用户注册金信惠融账户完毕，会提示开通资金托管账户，届时请根据引导完成相应操作即可。
					</li>
				</ul>
			</li>
			<div class="bottomline"></div>
			<li>
				<div class="link"><i class="fa fa-code"></i>开通资金托管账户有什么好处？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
					金信惠融选用通联支付作为第三方支付平台，严守平台规范，用户资金只存于通联支付账户里，与平台有效隔离，保证安全。
					</li>
				</ul>
			</li>
			<div class="bottomline"></div>
			<li>
				<div class="link"><i class="fa fa-code"></i>什么情况下需要绑定银行卡？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
					您在金信惠融平台进行投资，需提前绑定银行卡。所绑定银行的银行预留信息，需与您开通第三方托管账户的信息一致。
					</li>
				</ul>
			</li>
			<div class="bottomline"></div>	
			<li>
				<div class="link"><i class="fa fa-code"></i>如何更改绑定的银行卡？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
					登录金信惠融网站，进入【我的账户】->【账户管理】->【银行卡管理】，点击【解除绑定】，再点击【添加新银行卡】，根据操作提示，完成银行卡设置。
					</li>
				</ul>
			</li>
			<div class="bottomline"></div>	
			<li>
				<div class="link"><i class="fa fa-code"></i>可以绑定哪些银行卡？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
					可以绑定的银行卡有中国工商银行、中国农业银行、中国银行、中国建设银行、招商银行、中国邮政储蓄银行、兴业银行、上海浦东发展银行、平安银行、中信银行、中国民生银行、华夏银行、中国光大银行。
					</li>
				</ul>
			</li>
			<div class="bottomline"></div>
			<li>
				<div class="link"><i class="fa fa-code"></i>如何充值？<i class="fa fa-chevron-down"></i><img class="arrow" src="./picture/header_user_arrow.png" /></div>
				<ul class="submenu">
					<li><br>
					用户登录网站后进入【我的账户】->【充值】，选择【个人网银支付】或【企业网银支付】，可使用平台合作的13家银行的网银进行充值，网银充值限额以各银行规定为准。

					</li>
				</ul>
			</li>
			<div class="bottomline"></div>
		</div>
		<div id="d4">
						
		</div>
		<div id="d5">
						
		</div>
	</ul>








</div>
<div class="clear"></div>



		<vfooter>
			
		</vfooter>
		<kefu></kefu>
		
	</div>
</template>
<script type="text/javascript">


	require('assets/js/guide.js')
	require('assets/css/style_help.css')
	import vheader from 'components/header/vheader'
	import vfooter from 'components/footer/vfooter'
	import kefu from 'components/kefu/kefu'

	export default{
		components : {
			vheader,
			vfooter,
			kefu
		},
		methods:{
			tab(num){
				 let i;
			    for(i=1;i<=5;i++)
			    {
			        if(i==num)
			           document.getElementById("d"+i).style.display="block";
			         else
			           document.getElementById("d"+i).style.display="none";
			        if(i==num)
			           document.getElementById("L"+i).style.color="#d70937"
			         else
			           document.getElementById("L"+i).style.color="#666464";      
			    }
}
			}
		}
	

</script>
<style type="text/css" media="screen">
	.help_banner{
    background: url('./picture/help_banner.jpg?v=1') no-repeat center;
    background-size: cover;
    height: 320px;
}
</style>