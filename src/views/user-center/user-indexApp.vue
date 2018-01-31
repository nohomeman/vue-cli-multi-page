<template lang="html">
  <div class="">
    <vheader></vheader>
    <div class="contentMain clearfix">
      <userNav a='true' color='rgb(215, 9, 55)' b='true'></userNav>
      <!-- 个人信息 -->
      <div class="UserRight indexP1 clearfix">
		<div class="clearfix" style="margin-right:0px;">
			<div class="avatar">
				<p><a href="/user-face.html"><img src="./picture/5a6af2890bc8c.png"></a></p>
				<p style="margin-top: 10px;width: 200px;margin-left: -55px;">13163222459</p>
			</div>
			<div class="infos">
				<div class="ziliao">
					<a href="/account-setting.html" class="zl1 zl11" title="验证手机"></a>
					<a href="/account-setting.html" class="zl2 zl21" title="开通托管"></a>
					<a href="/account-setting.html" class="zl3 zl31" title="邮箱验证"></a>
																		<a href="/account-setting.html" class="zl4 zl41" title="设置交易密码"></a>
															</div>

				<div class="pinggutip">金信惠融提醒您：<a href="/user-pinggu.html">
										您尚未进行投资风险承受能力评估>>
									</a></div>
			</div>
			<div class="moneys">
				<p style="font-size:14px">可用余额：</p>
				<p style="font-size:22px">￥0.00</p>
				<div style="margin-top:25px;">
					<a href="/pay-index.html" class="red_btn">充值</a>
					<a href="/pay-carry.html" class="gray_btn" style="margin-left:10px">提现</a>
				</div>
			</div>
		</div>
	</div>
  <!-- 个人收益 -->
  <div class="UserRight indexP3">
		<div class="moneyInfo" style="width: 870px;margin-left: 54px;">
			<table style="width:100%">
				<tr>
					<td>总收益(￥0.00)</td>
					<td>已到账收益(￥0.00)</td>
					<td>未到账收益(￥0.00)</td>
				</tr>
			</table>
		</div>
	</div>
<!--资产信息  -->
  <div class="UserRight indexP4 clearfix">
  <div class="pie" style="background: #f2f2f2;border-radius: 1000px;position:absolute"></div>
  <div class="pie" style="background: #ffffff;border-radius: 1000px;position:absolute;width: 102px;height: 102px;margin-left: 133px;margin-top: 109px;"></div>
  <div class="pie" style="position:absolute"><canvas id="chart-area" width="208px" height="208px"></canvas></div>
  <div style="position: absolute;margin: 133px 0px 0px 147px;text-align: center;width: 76px;"><p style="font-size: 12px;color:#909090">总资产</p><p style="font-size: 14px;">￥0.00</p></div>
  <div class="pie_val">
    <ul>
      <li class="pie1"><p>可用余额（元）</p><p class="piemoney">￥0.00</p></li>
      <li class="pie2"><p>冻结资金（元）</p><p class="piemoney">￥0.00</p></li>
      <li class="pie3"><p>待收本金（元）</p><p class="piemoney">￥0.00</p></li>
      <li class="pie4"><p>待收利息（元）</p><p class="piemoney">￥0.00</p></li>
    </ul>
  </div>
  <dataPick></dataPick>
</div>
<div class="clearfix">


<!--登录记录  -->
<div class="UserRight indexP5">
  <div class="title">登录记录</div>
  <table class="tableLog" style="background: #fff1e8;margin-top:10px">
    <tr>
      <td>登录时间</td>
      <td>所在地</td>
      <td>ip地址</td>
      <td>登录方式</td>
    </tr>
  </table>
  <div style="height:190px;overflow:auto">
    <table class="tableLog" style="margin-top:0px">
      <tr>
          <td>2018-01-29 15:18</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-29 14:42</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-29 11:28</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-26 14:18</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-26 10:47</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-25 14:08</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-24 19:14</td>
          <td>湖北省武汉市 联通</td>
          <td>113.57.183.202</td>
          <td>APP登录</td>
        </tr><tr>
          <td>2018-01-24 17:21</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-24 16:45</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-24 10:10</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-22 13:56</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-19 16:10</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-19 11:43</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-18 11:05</td>
          <td>天津市 电信IDC机房</td>
          <td>123.151.77.74</td>
          <td>APP登录</td>
        </tr><tr>
          <td>2018-01-16 15:26</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-16 10:15</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>网页登录</td>
        </tr><tr>
          <td>2018-01-15 11:41</td>
          <td>IANA 保留地址</td>
          <td>45.115.218.118</td>
          <td>APP登录</td>
        </tr>				</table>
  </div>
      </div>
  <!-- 邀请好友 -->
  <div class="UserRight indexP6">
			<div class="title">邀请好友</div>
			<div class="invitetop">
				<img src="https://www.qcjinxin.com/tool-qrcode-uid-3697.html" class="qrcode">
				<div class="invicons">
					<img src="./picture/account_frind_qq.png"/>
					<img src="./picture/account_frind_wechat.png"/>
					<img src="./picture/account_frind_weibo.png"/>
					<div class="invtxt">扫一扫，邀请好友加入</div>
				</div>
			</div>

			<div class="invitetop" style="height:34px">
				<input value="https://www.qcjinxin.com/index-register-invite-3697.html" type="text" class="invurl">
				<button>复制</button>
			</div>
		</div>

    </div>

    </div>
    <vfooter></vfooter>

    <kefu></kefu>
  </div>
</template>

<script>


import vheader from 'components/header/vheader'
import vfooter from 'components/footer/vfooter'
import userNav from 'components/user/userNav'
import dataPick from 'components/user/dataPick'
import kefu from 'components/kefu/kefu'
$(function() {
  // $('#mindex').attr('class','selected');
  // $('#mindex').closest('ul').closest('li').find('span').css({"color":"#d70937"});
  // $('#mindex').closest('ul').closest('li').find('span').addClass('active');

});

export default {
  data(){
    return {}
  },
  components: {
    vheader,
    vfooter,
    userNav,
    dataPick,
    kefu
  },
  methods:{

  }
  ,
  created(){

  }
}
</script>

<style lang="css">

.contentMain{
	width: 1200px;
  margin: auto;
  margin-top: 30px;
}
.UserRight{
  float: left;
  margin-left: 20px;
  background: #ffffff;
  padding: 15px 20px;
  margin-bottom: 0px;
  width: 938px
}
.contentMain .indexP1{padding: 20px;
    height: 140px;
    min-height: 140px;border: 0px;
    margin-bottom: 15px;
}
.indexP1 .avatar{width: 88px;
    height: 88px;
    float: left;
    text-align: center;
    font-size: 15px;
    color: #231815;    margin-left: 54px;}
.indexP1 .avatar a:hover img {
  /*  transform: scale(1.14);*/
    animation: rubberBand 1s;
}
.indexP1 .avatar a img:hover {
    transition: all .8s ease-in-out;
}
.indexP1 .avatar img{width: 88px;max-width: 88px;
    height: 88px;
    border-radius: 100px;}
.indexP1 .infos{width: 370px;    border-left: 1px dashed #dcdcdc;
    float: left;
    margin-left: 64px;
    height: 126px;}
.indexP1 .infos .title .left{font-size:20px;font-weight: bold}
.indexP1 .infos .title img{width:30px;height:30px;margin-left:10px;}
.indexP1 .moneyInfo{margin-top:10px;background: rgb(241, 241, 241);padding: 13px;}
.indexP1 .moneyInfo span{display: inline-block;font-size: 14px;line-height: 150%;padding-left:10px;}
.indexP1 .moneyInfo em{font-size: 25px;}
.indexP1 .moneyInfo span p{font-size:16px;}
.indexP1 .btns{font-size:16px;line-height:28px;position: absolute;margin: -44px 0px 0px 387px;line-height: 34px}
.indexP1 .moneyInfo .btn{padding:5px 0px;width:80px;font-size:16px;margin-right:20px;}
.indexP1 .title{font-size:22px;}
.indexP1 .pinggutip{margin-left: 34px;
    margin-top: 14px;
    font-size: 12px;
    color: #221815;}
.indexP1 .moneys{float:left;border-left: 1px dashed #dcdcdc;height:126px;padding-left: 112px;color: #d70934;    line-height: 30px;}

.indexP1 .pinggutip a{color:#d70937;}
.red_btn{width:70px;height:40px;background: #d70937;color:#ffffff;line-height:40px;text-align: center;    display: inline-block;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.4s ease 0s;}

.gray_btn{width:70px;height:40px;background: #666666;color:#ffffff;line-height:40px;text-align: center;    display: inline-block;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.4s ease 0s;}


.ziliao{margin-top:18px;display: inline-block;}
.ziliao .zl1,.ziliao .zl2,.ziliao .zl3,.ziliao .zl4,.ziliao .zl5{display: inline-block;
    width: 32px;
    height: 32px;
    transition: all .4s ease 0s;
}
.ziliao .zl1{background: url('./picture/account_info_icon_2.png') no-repeat center;margin-left:34px;}
.ziliao .zl2{background: url('./picture/account_info_icon_1.png') no-repeat center;margin-left:18px;}
.ziliao .zl3{background: url('./picture/account_info_icon_3.png') no-repeat center;margin-left:18px;}
.ziliao .zl4{background: url('./picture/account_info_icon_4.png') no-repeat center;margin-left:18px;}
/* .ziliao .zl5{background: rgb(248, 247, 247) url('../images/icon/i5.png') no-repeat center;margin-left:18px;background-size: 25px 25px;} */
.ziliao .zl11{background-image:url('./picture/account_info_icon_2_activate.png');}
.ziliao .zl21{background-image:url('./picture/account_info_icon_1_activate.png');}
.ziliao .zl31{background-image:url('./picture/account_info_icon_3_activate.png');}
.ziliao .zl41{background-image:url('./picture/account_info_icon_4_activate.png');}
/* .ziliao .zl51{background-image:url('../images/icon/i5-1.png');} */
.ziliao a:hover {
    /*opacity: 0.5;*/
    animation: rubberBand 1s;
}
@keyframes rubberBand {
    0% {
        transform: scale3d(1, 1, 1)
    }

    30% {
        transform: scale3d(1.35, .65, 1)
    }

    40% {
        transform: scale3d(.65, 1.35, 1)
    }

    50% {
        transform: scale3d(1.15, .85, 1)
    }

    65% {
        transform: scale3d(.95, 1.05, 1)
    }

    75% {
        transform: scale3d(1.05, .95, 1)
    }

    100% {
        transform: scale3d(1, 1, 1)
    }
}
.red_btn:hover,.gray_btn:hover{text-decoration: none;color: #ffffff;}
.red_btn:hover {background: #ff3434 !important ;}
.gray_btn:hover {opacity: 0.8}

.contentMain .indexP3 {min-height: 40px;
    height: 40px;
    padding: 0 20px;
    padding-top: 0px;
    border: 0px;
    line-height: 40px;
    color: #595757;
    margin-bottom: 15px;}
  .contentMain  .indexP4 {    min-height: 340px;
        height: 340px;
        padding: 20px;
        border: 0px;
        color: #595757;
        margin-bottom: 15px;
    }

    .indexP4 .pie{width:208px;height:208px;float:left;margin-left:80px;margin-top:56px;}
    .indexP4 .pie_val{ margin-left: 380px;margin-top:36px;    float: left;}
    .indexP4 .pie_val ul li .piemoney{padding-left:20px;}
    .indexP4 .pie_val ul li{width: 250px;
        text-indent: 10px;
        line-height: 28px;
        margin-bottom: 10px;}
    .indexP4 .pie_val ul li::before{
      content:"●";
      font-size:12px;
      float:left;
    }

    .indexP4 .pie_val ul .pie1::before{
      color:#ff8853;
    }
    .indexP4 .pie_val ul .pie2::before{
      color:#f7c93f;
    }
    .indexP4 .pie_val ul .pie3::before{
      color:#589ff7;
    }
    .indexP4 .pie_val ul .pie4::before{
      color:#a76bf1;
    }
    .datepick{/*width: 338px;height: 340px;margin:-20px 0 0 570px;*/

}
.contentMain .indexP5 {float:left;width:585px;border:0px;height: 270px;
    min-height: 270px;}
.indexP5 .noData {
    font-size: 14px;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 40px;
    color: #ababab;
}

.indexP5 .tableLog{border-collapse: collapse;margin-top:20px;width:100%;}
.indexP5 .tableLog tr{height:30px;}
.indexP5 .tableLog td{padding:8px 15px;font-size: 14px;}
.indexP5 .tableLog td:first-child{width:130px;}
.indexP5 .tableLog td:nth-child(2){width:170px;}
.indexP5 .tableLog td:nth-child(3){width:100px;}
.indexP5 .tableLog td:nth-child(4){width:70px;}
.contentMain .indexP6 {float:right;width:300px;border:0px;height: 270px;margin-left:10px;
    min-height: 270px;}
.indexP6 .invitetop{
	height:140px;width:300px;
	background: #ecf3ff;
	margin-top:10px;
}
.indexP6 .invitetop .qrcode {width: 100px;
    margin-left: 20px;
    margin-top: 20px;    float: left;}
    .invicons{    float: left;    margin-top: 30px;
    margin-left: 10px;}
    .invicons img {margin-right:9px;height:44px;width:44px;}
        .invicons img:last-child{margin:0px;}
.invicons .invtxt{font-size: 14px;
    margin-left: 7px;
    margin-top: 15px;}
.invitetop .invurl{    width: 230px;
    height: 34px;
    border: 0px;
    padding-left: 10px;
    background: #ecf3ff;}
    .invitetop button{background: #bbcff4;
    border: 0px;
    width: 55px;
    height: 34px;}
</style>
