<template lang="html">
  <div class="contentMain">
    <div class="loanInfo clearfix">
      <div class="leftInfo">
        <div class="ltitle">[ID29]资产·担保3号</div>
        <table class="moneyInfo">
          <tr class="second">
            <td style="color:#ff3333;width:250px">7.20%</td>
            <td style="width:250px">12<span class="tsmall">个月</span></td>
            <td><span class="tsmall">￥</span>100.00<span class="tsmall">万</span></td>
          </tr>
          <tr class="llight">
            <td class="second">年化利率</td>
            <td class="third">持有期限</td>
            <td class="first">认购规模</td>
          </tr>
        </table>

        <div class="perbar clearfix" style="min-height: 20px;">
          <div class="pertxt">进度</div>
          <div class="loadingbox">
            <div class="loadingbar" style="width:21%"></div>
          </div>
          <div class="percentTxt">20.80%</div>
        </div>

        <ul class="moreInfo clearfix">
          <li class="clearfix">
            <div class="left">起投金额：</div>
            <div class="info">￥1,000.00</div>
          </li>
          <li class="clearfix">
            <div class="left">还款方式：</div>
            <div class="info">付息还本</div>
          </li>
          <li class="clearfix">
            <div class="left">担保类型：</div>
            <div class="info">风险准备金</div>
          </li>

          <li class="clearfix">
            <div class="left">风险等级：</div>
            <div class="info">稳健型</div>
          </li>

          <li class="clearfix">
            <div class="left">剩余时间：</div>
            <div class="info">
              14天4小时20分钟 </div>
          </li>
          <li class="clearfix">
            <div class="left">借款用途：</div>
            <div class="info">经营周转</div>
          </li>

          <li class="clearfix">
            <div class="left">月还利息：</div>
            <div class="info">￥6,000.00</div>
          </li>
          <li class="clearfix">
            <div class="left">到期还本：</div>
            <div class="info">￥100万</div>
          </li>
        </ul>
      </div>

      <div class="rightInfo">
        <div style="font-size:14px;font-weight:normal;text-align: right;">
          <a href="javascript:void(0)" @click="showProtocol()">
            <借款协议>
          </a>
        </div>

        <div class="lmoney">
          <p>
            <!-- <span class="lsmall">￥</span> -->￥792,000.00</p>
          <p>剩余可投</p>
        </div>

        <div class="ltips" style="margin-top: 10px;">已投人数：4人</div>
        <div class="ltips" style="margin-top: 15px;">理财有风险 投资需谨慎</div>

        <a @click="doInvest();" class="loanbtnred">立即购入</a>
      </div>
    </div>
    <div class="loanTab">
      <ul class="clearfix">
        <li id="loaninfo" @click="loadInfo('loaninfo');">
          <i class="linered"></i> 项目详情
        </li>
        <li id="investinfo" @click="loadInfo('investinfo');"><i class="linered"></i>投标记录</li>
        <li id="openinfo" @click="loadInfo('openinfo');"><i class="linered"></i>信息披露</li>
      </ul>
    </div>
    <div class="loanMoreInfo"></div>


  </div>
</template>

<script>
require('assets/css/style_login.css')
require('assets/js/layer/layer.js');
require('assets/css/select2.css')
require('assets/js/select2.js')
require('assets/js/layer/theme/default/layer.css');

function formatRepo(repo) {
  var markup = '<div class="bbli">' +
    '	<div class="money" >红包金额：<b>￥' + repo.money + '</b></div>' +
    '	<div class="info">' +
    '		<p>投资1000元以上可用</p>' +
    '		<p>过期时间：' + repo.expiretime + '</p>' +
    '	</div>' +
    '</div>';

  return markup;
};

function formatRepoSelection(repo) {
  return repo.money + "元红包";
}
export default {
  methods: {
    showProtocol() {
      var url = 'https://www.qcjinxin.com/protocol-index-type-loan/id-29.html';
      layer.open({
        type: 2,
        shade: [0],
        fix: true,
        title: '借款协议',
        maxmin: true,
        content: url,
        area: ['800px', '80%']
      });
    },
    doInvest() {
      var layers = layer.open({
        type: 1,
        title: "我要投标",
        area: ['485px', 'auto'],
        content: "<div style='margin-left:30px;' class='senderBox'><table><tr style='height:30px'><td>可用余额：</td><td>￥0.00&nbsp;&nbsp;&nbsp;&nbsp;<a target='_blank' href='/pay-index.html'>立即充值</a></td></tr>" +
          "<tr style='height:30px'><td>还可投资：</td><td>￥792,000.00</td></tr>" +
          "<tr style='height:30px'><td>最低投资：</td><td>￥1,000.00</td></tr>" +
          "<tr style='height:50px'><td>投标金额：</td><td><input class='ui-input' style='width:228px' type='text' id='investMoney'></td></tr>" +
          "<tr style='height:50px'><td>使用红包：</td><td><select class='ui-input hongbao' style='width:240px' id='hongbap'></select></td></tr>" +
          "<tr style='height:50px'><td>定向标密码：</td><td><input class='ui-input' style='width:228px' type='text' id='invitecode'></td></tr>" +
          "<tr style='height:50px'><td>验 证 码：</td><td><input class='ui-input verificationCode' style='width:110px' type='text'><input style='font-size: 14px;' class='bottonyzm' onclick='doPostInvest();' id='getcode' value='获得验证码' type='button'></td></tr>" +
          "<tr style='height:40px; color:red; '><td style='font-size:14px;' colspan='2'>乾诚金信提示您：市场有风险，投资需谨慎!</td></tr>" +
          "<tr><td colspan='2'>" +
          "<input style='margin-left: 72px;width: 230px;line-height: 40px;font-size: 16px;' class='green1' type='button' value='我知晓以上提示，确定投标' id='sendbtn1'>" +
          "</td></tr>" +
          "</table></div>"
      });

      var hongbaodata = '[]';
      hongbaodata = jQuery.parseJSON(hongbaodata);

      $('.hongbao').select2({
        minimumResultsForSearch: Infinity,
        language: "zh-CN",
        placeholder: "请选择红包",
        data: hongbaodata,
        escapeMarkup: function(markup) {
          return markup;
        },
        // allowClear: true,
        multiple: true,
        maximumSelectionLength: 1,
        templateResult: formatRepo,
        templateSelection: formatRepoSelection
      });

      $('.select2-search__field').attr("readonly", "readonly");
    },
    loadInfo(type) {
      if ($('.loanMoreInfo').find('.noData').length > 0) {
        return;
      }
      $('.loanTab').find('li').removeClass('selected');
      $('#' + type).addClass('selected');
      $('.loanMoreInfo > div').hide();
      if ($('.loanMore_' + type).length > 0) {
        $('.loanMore_' + type).show();
      } else {
        $('.loanMoreInfo').append("<div class='noData'>正在加载数据中...</div>");
        $.get('/loan-getmoreinfo.html?loanid=29&type=' + type, function(data) {
          $('.loanMoreInfo').append("<div class='loanMore_" + type + "'>" + data + "</div>");
          $('.loanMoreInfo').find('.noData').remove();
          //加载消息列表
          if (type == 'investinfo') {
            getInvList(1);
          }
        });
      }
    }



  }
}
</script>

<style lang="css">
a {
  color: #595757;

}

a:hover {
  text-decoration: none;
}

.contentMain {
  width: 1200px;
  margin: 31px auto;
}

.loanInfo {}

.loanInfo .title {
  border-bottom: 1px solid #cccccc;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: bold;
}

.loanInfo .title span {
  font-size: 16px;
  font-weight: normal;
  margin-left: 20px;
  color: #FF3D00;
}

.loanInfo .leftInfo {
  width: 700px;
  float: left;
  background: #ffffff;
  padding: 25px;
  height: 258px;
}

.loanInfo .leftInfo .ltitle {
  font-size: 18px;
  color: #595757;
}

.loanInfo .rightInfo {
  width: 404px;
  float: left;
  margin-left: 10px;
  padding: 18px;
  background: #ffffff;
  height: 272px;
}

.loanInfo .rightInfo .lmoney {
  text-align: center
}

.loanInfo .rightInfo .lmoney .lsmall {
  font-size: 14px;
}

.loanInfo .rightInfo .lmoney p:first-child {
  font-size: 40px;
  color: #231815;
  margin-top: 40px;
}

.loanInfo .rightInfo .lmoney p:nth-child(2) {
  margin-top: 24px;
  color: #848484;
}

.loanInfo .rightInfo .ltips {
  text-align: center;
  margin-top: 45px;
  color: #595757;
}

.loanInfo .rightInfo .loanbtnred {
  width: 366px;
  height: 38px;
  line-height: 38px;
  color: #ffffff;
  font-size: 18px;
  background: #ff3333;
  display: inline-block;
  text-align: center;
  margin-top: 20px;
  margin-left: 18px;
}

.loanInfo .rightInfo .loanbtngray {
  background: #c3c3c3;
}

.loanInfo .moneyInfo {
  margin-top: 36px;
  width: 100%;
  text-align: center
}

.loanInfo .moneyInfo .tsmall {
  font-size: 14px;
}

.loanInfo .moneyInfo .llight td {
  color: #727171;
}

.loanInfo .moneyInfo tr:first-child {
  font-size: 14px;
  height: 30px;
}

.loanInfo .moneyInfo tr.second {
  font-size: 40px;
  height: 50px;
}

.loanInfo .moneyInfo td.first {
  width: 300px;
}

.loanInfo .moneyInfo td.second {
  width: 150px
}

.loanInfo .moneyInfo td.third {
  width: 150px
}

.loanInfo .moreInfo {
  margin-top: 5px;
}

.loanInfo .moreInfo li {
  float: left;
  width: 225px;
  font-size: 12px;
  margin-top: 6px;
  color: #727171;
}

.loanInfo .moreInfo li:nth-child(4n+1) {
  width: 210px;
}

.loanInfo .moreInfo li:nth-child(4n+2) {
  width: 160px;
}

.loanInfo .moreInfo li:nth-child(4n+3) {
  width: 170px;
}

.loanInfo .moreInfo li:nth-child(4n+4) {
  width: 150px;
}

.loanInfo .moreInfo li .left {
  width: 70px;
}

.loanInfo .statusIco {
  position: absolute;
  margin-top: -117px;
  margin-left: 457px;
}

.perbar {
  border-bottom: 1px solid #e5e5e5;
  margin-top: 14px;
  padding-bottom: 22px;
}

.loadingbox {
  float: left;
  height: 8px;
  width: 580px;
  background: #e5e5e5;
  margin-top: 9px;
  overflow: hidden;
  margin-left: 18px;
}

.loadingbar {
  height: 8px;
  width: 30%;
  background: #ff3333;
}

.pertxt {
  float: left;
  color: #3e3a39;
  font-size: 16px;
}

.percentTxt {
  float: left;
  font-size: 14px;
  color: #727171;
  margin-left: 10px;
}

.bottonyzm {
  height: 30px;
  border: none;
  background: #d70937;
  color: #fff;
  font-size: 18px;
  font-family: "微软雅黑";
  padding: 0 10px;
  margin-left: 20px;
  cursor: pointer;
  transition: all .4s ease 0s;
}

.bottonyzm:hover {
  background: #ff3333;
}

.green1 {
  background: #ccc;
  color: #ffffff;
  font-size: 14px;
  padding: 0px 10px;
  display: inline-block;
  border-radius: 0px;
  border: 0px;
  text-align: center;
  line-height: 30px;
  min-width: 100px;
  cursor: pointer;
  transition: all 0.4s ease 0s;
}

/* .loanInfo .full {
  background: url('../images/full.png');
  width: 134px;
  height: 128px;
}

.loanInfo .payoff {
  background: url('../images/payoff.png');
  width: 134px;
  height: 128px;
  margin-left: 820px;
  margin-top: -128px;
}

.loanInfo .review {
  background: url('../images/review.png');
  width: 134px;
  height: 128px;
  margin-left: 720px;
  margin-top: -146px;
}

.loanInfo .wait {
  background: url('../images/wait.png');
  width: 134px;
  height: 128px;
  margin-left: 720px;
  margin-top: -146px;
}

.loanInfo .failed {
  background: url('../images/failed.png');
  width: 134px;
  height: 128px;
  margin-left: 717px;
  margin-top: -167px;
}

.loanInfo .repayment {
  background: url('../images/repayment.png');
  width: 134px;
  height: 128px;
} */

.loanTab {
  margin-top: 20px;
  font-size: 16px;
  background: #f4f4f4;
}

.loanTab li {
  float: left;
  background: #f4f4f4;
  cursor: pointer;
  /*    transition: all .4s ease 0s;*/
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.loanTab li a {
  color: #3e3a39;
}

.loanTab li.selected,
.loanTab li.selected:hover {
  background: #ffffff;
  color: #3e3a39;
}

.loanTab li:hover {
  background: #f6f6f6;
  /*    border-top: 3px solid #ff3333;
    color: #3e3a39;*/
}

.loanTab li .linered {
  float: left;
  width: 100%;
  height: 2px;
  background: #ff3333;
  display: none;
  -webkit-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.loanTab .selected .linered {
  display: block;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>
