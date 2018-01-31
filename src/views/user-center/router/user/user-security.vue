<template lang="html">
  <div class="">
    <vheader></vheader>
    <div class="contentMain clearfix">
      <userNav a='true' color='rgb(215, 9, 55)' c='true'></userNav>

	<div class="UserRight">
		<h3>账户设置</h3>
		<div class="security_main">
			<!-- <ul>
				<li><img src="./picture/account_star.png"/></li>
				<li><span class="icon2">实名认证</span></li>
				<li>42098****************&nbsp;&nbsp;(王**)</li>
				<li><font class="iconyes">已实名</font></li>
				<li><a class="buttonyes" @click="">查看</a></li>
			</ul> -->
			<ul>
				<li><img src="./picture/account_star.png"/></li>
				<li><span class="icon1">登录密码</span></li>
				<li>&nbsp;</li>
				<li><span class="iconyes">已设置</span></li>
				<li>
					<a class="buttonno" @click="editLoginPwd();">修改</a>
				</li>
			</ul>
			<ul>
				<li><img src="./picture/account_star.png"/></li>
				<li><span class="icon2">绑定手机</span></li>
				<li>131 **** 2459</li>
				<li><font class="iconbinding">已绑定</font></li>
				<li>
					<a class="buttonno" @click="changeMobile();">修改</a>				</li>
			</ul>
			<ul>
				<li><img src="./picture/account_star.png"/></li>
				<li><span class="icon3">绑定邮箱</span></li>
				<li></li>
				<li><font class="iconunbinding">未绑定</font>				</li>
				<li>
					<a class="buttonyes" @click="changeEmail();">绑定</a>				</li>
			</ul>

			<ul>
				<li><img src="./picture/account_star.png"/></li>
				<li><span class="icon4">交易密码</span></li>
				<li></li>
				<li>
								<font class="iconyes">已设置</font>
								<li>
									<a href="/user-updatepaypwd.html" target="_blank"  class="buttonno1">修改</a>
					<a href="/user-resetpaypwd.html" target="_blank"  class="buttonno2">重置</a>
								</li>
			</ul>
			<ul>
				<li><img src="./picture/account_star.png"/></li>
				<li><span class="icon1" id="toubiao">投标验证方式</span></li>
				<li></li>

								<li><a class="buttonyes">密码验证</a></li><li><a @click="editTradetype('toubiao',1);" class="buttonno">手机验证</a></li>
							</ul>
			<ul>
				<li><img src="./picture/account_star.png"/></li>
				<li><span class="icon1" id="tixian">提现验证方式</span></li>
				<li></li>
								<li><a class="buttonyes">密码验证</a></li><li><a @click="editTradetype('tixian',1);" class="buttonno">手机验证</a></li>
							</ul>
			<ul>
				<li><img src="./picture/account_star.png"/></li>
				<li><span class="icon1" id="huankuan">还款验证方式</span></li>
				<li></li>
								<li><a class="buttonyes">密码验证</a></li><li><a @click="editTradetype('huankuan',1);" class="buttonno">手机验证</a></li>
							</ul>
						<ul>
				<li><img src="./picture/account_star.png"/></li>
				<li><span class="icon1" id="huankuan">绑定银行卡</span></li>
				<li></li>
				<li><a class="buttonyes" @click="selectBankno();">查询</a></li><li><a @click="lockBankno();" class="buttonyes">绑定</a></li>
			</ul>
		</div>
	</div>
  <div id="loginPwdPopBox" style="display:none">
<div style="padding:20px 30px;">
  <p>为了您的账户安全，请定期更换登录密码，并确保登录密码设置与交易密码不同。</p>
  <table>
    <tr height="60px">
      <td width="100px">原登录密码</td>
      <td><input class='ui-input' placeholder='请输入原登录密码' type='password' id='orilpwd'></td>
    </tr>
    <tr height="60px">
      <td>新登录密码</td>
      <td><input class='ui-input' placeholder='新登录密码需大于6个字符' type='password' id='newlpwd'></td>
    </tr>
    <tr height="60px">
      <td>确认登录密码</td>
      <td><input class='ui-input' type='password' id='newlpwd2'></td>
    </tr>
    <tr height="60px">
      <td></td>
      <td><input type='button' class='green' onclick="doeditLoginPwd($(this));" id="editLgPwdBtn" value='保  存'></td>
    </tr>
  </table>
</div>
</div>
<div id="authBanknoPopBox" style="display:none">

	<div style="padding:20px 30px;">
		<table>
			<tr height="60px">
				<td style="width:100px">银行卡号</td>
				<td>
					<input class="ui-input rankcard" type='text' id='idcard' style="width:280px;" value="">
					<div class="cardtitle" style="display: none;">
						支持以下对私银行（不支持企业账户）：<br>
						中国工商银行，中国农业银行，中国银行，中国建设银行，中信银行，光大银行，华夏银行，平安银行，招商银行，兴业银行，浦发银行，中国邮政储蓄银行，宁波银行，南京银行，农信湖南。<br>
					</div>
				</td>

			</tr>
			<tr height="60px">
				<td>预留手机号</td>
				<td><input class='ui-input' type='text' id='phone' style="width:280px;" value="13163222459"></td>
			</tr>
			<tr height="60px">
				<td>持卡人姓名</td>
				<td><input class='ui-input' type='text' id='name' style="width:280px;" value="王硕"></td>
			</tr>
			<tr height="60px">
				<td>身份证号</td>
				<td><input class='ui-input' type='text' id='identityNo' style="width:280px;" value="420984199511064432"></td>
			</tr>
			<tr id="getcode" height="60px">
				<td></td>
				<td><input type='button' class='green' onclick="dolockBankno($(this));" id="authMobilebtn" value='绑  定'></td>
			</tr>
		</table>
	</div>
</div>


<div id="authsBanknoPopBox" style="display:none">
	<div style="padding:10px 30px 0px 30px;height:300px;overflow:auto;margin-bottom:20px">
		<table style="width:100%" id="bankt">
		<tr height="40px">
			<td style="width: 22%">开户行</td>
			<td style="width: 25%">银行卡号</td>
			<td style="width: 18%">预留电话</td>
			<td style="width: 23%">绑卡时间</td>
			<td> </td>
		</tr>
		</table>
	</div>
</div>
<div id="changeEmailPopBox" style="display:none">
	<div style="padding:20px 30px;">
		<table>
			<tr height="60px">
				<td width="100px">新电子邮箱</td>
				<td><input class='ui-input' placeholder='' type='text' id='newmail'></td>
			</tr>
			<tr height="60px">
				<td></td>
				<td><input type='button' class='green' onclick="doeditMail($(this));" id="changemailBtn" value='保  存'></td>
			</tr>
		</table>
	</div>
</div>


<!-- <div id="changeMobilePopBox" style="display:none">
<div style="padding:20px 30px;">
  <table>
    <tr height="60px">
      <td width="100px"”>原手机号码</td>
      <td>131 **** 2459</td>
    </tr>
    <tr height="60px">
      <td>新手机号码</td>
      <td><input class='ui-input' type='text' id='newmobile' style="width:186px;"></td>
    </tr>
    <tr height="60px">
      <td>手机验证码</td>
      <td><input class='ui-input' type='text' id='newcode' style="width:82px;">&nbsp;&nbsp;<input type='button' class='green' @click="sendAuthCode(this,'changemobile');" id="changemobilesms" value='获得验证码'></td>
    </tr>
    <tr height="60px">
      <td></td>
      <td><input type='button' class='green' @click="doChangeMobile(this);" id="changeMobilebtn" value='保  存'></td>
    </tr>
  </table>
</div>
</div> -->

    </div>
    <vfooter></vfooter>
    <kefu></kefu>
  </div>
</template>

<script>
require('assets/css/style_user_security.css')
require('assets/js/layer/layer.js')
require('assets/js/layer/theme/default/layer.css')
import kefu from 'components/kefu/kefu'
import vheader from 'components/header/vheader'
import userNav from 'components/user/userNav'
import vfooter from 'components/footer/vfooter'

export default {
  data() {
    return {
      layers: '',
      smstime: 0,
      timer: ''
    }
  },
  components: {
    vheader,
    userNav,
    vfooter,
    kefu
  },
  methods: {
    editTradetype(name, type) {
      if (name && type) {
        $.post("/user-paytype.html", {
          name: name,
          type: type
        }, function(data) {
          if (parseInt(data.status) == 2) {
            layer.alert(data.info);
          } else {
            layer.close(this.layers);
            layer.alert(data.info, function() {
              window.location.reload();
            });
          }
        });
      }
    },
    editLoginPwd() {
      this.layers = layer.open({
        type: 1,
        title: "修改登录密码",
        area: ['485px', 'auto'],
        content: $('#loginPwdPopBox').html()
      });
    },
    findId(obj, id) {
      return $(obj).closest('table').find(id);
    },
    doeditLoginPwd(obj) {
      var orilpwd = findId(obj, '#orilpwd').val();
      var newlpwd = findId(obj, '#newlpwd').val();
      var newlpwd2 = findId(obj, '#newlpwd2').val();

      if (!orilpwd) {
        layer.tips('请输入原登录密码', findId(obj, '#orilpwd'));
        return;
      } else if (!newlpwd) {
        layer.tips('请输入新登录密码', findId(obj, '#newlpwd'));
        return;
      } else if (newlpwd.length < 6) {
        layer.tips('新登录密码不能小于6个字符', findId(obj, '#newlpwd'));
        return;
      } else if (!newlpwd2) {
        layer.tips('请输入新登录密码', findId(obj, '#newlpwd2'));
        return;
      } else if (newlpwd != newlpwd2) {
        layer.tips('两次输入的新密码不正确', findId(obj, '#newlpwd2'));
        return;
      }
      findId(obj, '#editLgPwdBtn').attr("disabled", "disabled");
      findId(obj, '#editLgPwdBtn').val("提交中...");
      $.post("/user-editloginpwd.html", {
        oripwd: orilpwd,
        newpwd: newlpwd
      }, function(data) {
        if (parseInt(data.status) == 1) {
          layer.close(this.layers);
          layer.alert(data.info, function() {
            window.location.reload();
          });
        } else if (parseInt(data.status) == -1) {
          layer.tips(data.info, findId(obj, '#orilpwd'));
          findId(obj, '#editLgPwdBtn').removeAttr("disabled");
          findId(obj, '#editLgPwdBtn').val("保  存");
        } else {
          layer.tips(data.info, findId(obj, '#newlpwd'));
          findId(obj, '#editLgPwdBtn').removeAttr("disabled");
          findId(obj, '#editLgPwdBtn').val("保  存");
        }
      });
    },
    changeEmail() {
      this.layers = layer.open({
        type: 1,
        title: "修改邮箱",
        area: ['485px', 'auto'],
        content: $('#changeEmailPopBox').html()
      });
    },
    doeditMail(obj) {
      var newmail = $.trim(findId(obj, '#newmail').val());
      if (newmail) {
        findId(obj, '#changemailBtn').attr("disabled", "disabled");
        findId(obj, '#changemailBtn').val("提交中...");
        $.post('/user-changeemail.html', {
          newmail: newmail
        }, function(data) {
          if (parseInt(data.status) == 0) {
            layer.tips(data.info, findId(obj, '#newmail'));
            findId(obj, '#changemailBtn').removeAttr("disabled");
            findId(obj, '#changemailBtn').val("保  存");
          } else {
            layer.close(this.layers);
            layer.alert(data.info, function() {
              window.location.reload();
            });
          }
        });
      } else {
        layer.tips("请输入电子邮箱", findId(obj, "#newmail"));
      }
    },
    changeMobile() {
      this.layers = layer.open({
        type: 1,
        title: "修改手机号码",
        area: ['485px', 'auto'],
        content: $('#changeMobilePopBox').html()
      });
    },
    doChangeMobile(obj) {
      var oldmobile = "13163222459";
      var newmobile = $.trim(findId(obj, '#newmobile').val());
      var newcode = $.trim(findId(obj, '#newcode').val());

      if (!newmobile) {
        layer.tips('请输入新手机号码', findId(obj, '#newmobile'));
        return;
      }

      if (!newcode) {
        layer.tips('请输入验证码', findId(obj, '#newcode'));
        return;
      }

      if (newmobile && newcode) {
        var loadindex = layer.load(1, {
          shade: [0.6, '#000000']
        });
        findId(obj, '#changeMobilebtn').attr("disabled", "disabled");
        findId(obj, '#changeMobilebtn').val("提交中...");
        $.post('/account-setting.html', {
          mobile: oldmobile,
          mobile1: newmobile,
          mobilecode1: newcode
        }, function(data) {
          layer.close(loadindex);
          findId(obj, '#changeMobilebtn').removeAttr("disabled");
          findId(obj, '#changeMobilebtn').val("保  存");
          if (parseInt(data.status) == 0) {
            layer.tips(data.info, findId(obj, '#newcode'));
          } else if (parseInt(data.status) == -1) {
            layer.tips(data.info, findId(obj, '#newcode'));
          } else {
            layer.alert(data.info, function() {
              layer.close(this.layers);
              window.location.reload();
            });
          }
        });
      }
    },
    lockBankno() {
      $(".cardtitle").hide();
      this.layers = layer.open({
        type: 1,
        title: "绑定银行卡",
        area: ['485px', '430px'],
        content: $('#authBanknoPopBox').html()
      });
    },
    dolockBankno(obj) {
      var idcard = $.trim(findId(obj, '#idcard').val());
      var phone = $.trim(findId(obj, '#phone').val());
      var name = $.trim(findId(obj, '#name').val());
      var identityNo = $.trim(findId(obj, '#identityNo').val());

      if (!idcard) {
        layer.tips("请填写银行卡号", findId(obj, '#idcard'));
        return;
      }
      if (!phone) {
        layer.tips("请填写预留手机号", findId(obj, '#phone'));
        return;
      }
      if (!name) {
        layer.tips("请填写持卡人姓名", findId(obj, '#name'));
        return;
      }
      if (!identityNo) {
        layer.tips("请填写身份证号", findId(obj, '#identityNo'));
        return;
      }

      if (identityNo) {
        findId(obj, '#authMobilebtn').attr("disabled", "disabled");
        findId(obj, '#authMobilebtn').val("提交中...");

        var loadindex = layer.load(1, {
          shade: [0.6, '#000000']
        });

        $.post('/account-applybindbankcard.html', {
          idcard: idcard,
          phone: phone,
          name: name,
          identityNo: identityNo
        }, function(data) {
          findId(obj, '#authMobilebtn').removeAttr("disabled");
          findId(obj, '#authMobilebtn').val("保  存");
          layer.close(loadindex);
          if (parseInt(data.status) == 0) {
            layer.alert(data.info);
          } else {
            layer.alert(data.info);

            var tr = "<tr height='60px'><td>验证码：</td><td><input class='ui-input' type='text' id='verificationCode' style='width:100px;'><input class='ui-input' type='hidden' id='tranceNum' value='" + data.data.tranceNum +
              "'><input class='ui-input' id='transDate' type='hidden' value='" + data.data.transDate +
              "'>&nbsp;&nbsp;&nbsp;请输入短信验证码</td></tr><tr><td></td><td><input type='button' class='green' @click='confirmBankno($(this));' id='authMobilebtn' value='绑  定'></td></tr>";
            findId(obj, '#getcode').replaceWith(tr);
          }
        });
      }
    },
    confirmBankno(obj) {
      var verificationCode = $.trim(findId(obj, '#verificationCode').val());
      var tranceNum = $.trim(findId(obj, '#tranceNum').val());
      var transDate = findId(obj, '#transDate').val();
      var phone = $.trim(findId(obj, '#phone').val());

      if (verificationCode) {
        findId(obj, '#authMobilebtn').attr("disabled", "disabled");
        findId(obj, '#authMobilebtn').val("提交中...");
        var loadindex = layer.load(1, {
          shade: [0.6, '#000000']
        });
        $.post('/account-bindbankcard.html', {
          verificationCode: verificationCode,
          phone: phone,
          tranceNum: tranceNum,
          transDate: transDate
        }, function(data) {
          findId(obj, '#authMobilebtn').removeAttr("disabled");
          findId(obj, '#authMobilebtn').val("保  存");
          layer.close(loadindex);
          if (parseInt(data.status) == 0) {
            layer.alert(data.info);
          } else {
            layer.close(this.layers);
            layer.alert(data.info);
          }
        });
      } else {
        layer.tips('请输入短信验证码', findId(obj, '#verificationCode'));
      }
    },
    selectBankno() {
      this.layers = layer.open({
        type: 1,
        title: "绑定银行卡",
        area: ['750px', 'auto'],
        content: $('#authsBanknoPopBox')
      });

      $("#bankt").find('.bankli').remove();

      $.post('/user-security.html', {}, function(data) {
        var bindCardList = data.data.bindCardList;
        var bank_list = '';
        for (var i = 0; i < bindCardList.length; i++) {
          var bankName = bindCardList[i].bankName;
          if (!bindCardList[i]['bindMethod'] && !bankName) {
            bankName = '对公账户';
          }
          var btn = "<input type='button' class='green' @click='unsetBankno($(this),\"" + bindCardList[i].bankCardNo + "\");' id='unbindbtn' value='解绑' style='min-width: 70px;float: right;'>";
          if (!bindCardList[i]['bindMethod']) {
            btn = '[不可解绑]';
          }
          bank_list += "<tr class='" + bindCardList[i].bankCardNo + " bankli' height='40px'>" +
            "<td >" + bankName + "</td>" +
            "<td >" + bindCardList[i].bankCardNo + "</td>" +
            "<td >" + bindCardList[i].phone + "</td>" +
            "<td >" + bindCardList[i].bindTime + "</td>" +
            "<td align='right'>" + btn + "</td></tr>";
        }
        $("#bankt").append(bank_list);
      });
    },
    unsetBankno(obj, bankno) {
      if (bankno) {
        var confirmBox = layer.confirm('是否要解绑该银行卡', {
          btn: ['确定', '取消']
        }, function() {
          layer.close(confirmBox);
          $(obj).attr("disabled", "disabled");
          $(obj).val("提交中");
          var loadindex = layer.load(1, {
            shade: [0.6, '#000000']
          });
          $.post('/account-unbindbankcard.html', {
            cardNo: bankno
          }, function(data) {
            $(obj).removeAttr("disabled");
            $(obj).val("解绑");
            layer.close(loadindex);
            if (parseInt(data.status) == 0) {
              layer.alert(data.info);
            } else {
              layer.alert(data.info);
              $(obj).closest('tr').remove();
            }
          });
        }, function() {

        });
      }
    },
    sendAuthCode(obj, type) {
      var act;
      var sendVerificationCode;
      if (type == 'findpwd') {
        act = '找回密码';
        mobile = '';
      } else if (type == 'changemobile') {
        act = '新手机号验证';
        sendVerificationCode = 9;
        mobile = findId(obj, "#newmobile").val();
        mobile = $.trim(mobile);
        if (!mobile) {
          layer.alert("你还没有填写正确的手机号", 3);
          return;
        }
      } else if (type == 'lockmobile') {
        act = '绑定手机';
        sendVerificationCode = 9;
        mobile = findId(obj, "#mobile").val();
        mobile = $.trim(mobile);
      }
      if (!act) {
        layer.alert("短信发送过快，请稍后再试", 3);
        return;
      }
      $.post('/account-setting.html', {
        act: act,
        mobile: mobile,
        mobilecode: sendVerificationCode
      }, function(data) {
        if (parseInt(data.status) == 1) {
          smstime = 60;
          findId(obj, '#' + type + 'sms').val("已发送(" + smstime + ")");
          findId(obj, '#' + type + 'sms').attr('class', 'graybtn');
          timer = setInterval(function() {
            if (smstime == 0) {
              findId(obj, '#' + type + 'sms').val("获得验证码");
              findId(obj, '#' + type + 'sms').attr('class', 'green');
              clearInterval(timer);
            } else {
              smstime = smstime - 1;
              findId(obj, '#' + type + 'sms').val("已发送(" + smstime + ")");
              findId(obj, '#' + type + 'sms').attr('class', 'graybtn');
            }
          }, 1000);
        }
        layer.alert(data.info);
      });
    }









  }
}
</script>

<style lang="css">
.contentMain{
	width: 1200px;
    margin: auto;
    margin-top: 30px;
}
.UserRight{float: left;margin-left: 20px;background: #ffffff;padding: 15px 20px;margin-bottom: 0px;width: 938px}
.icon1 {
	background:url('./picture/account_safe_loginpwd.png') no-repeat 4px 4px;
	text-indent: 50px;
	display: block;
	line-height: 40px;
}
.icon2 {
	background:url('./picture/account_safe_mobile.png') no-repeat 4px 4px;
	text-indent: 50px;
	display: block;
	line-height: 40px;
}
.icon3 {
	background:url('./picture/account_safe_email.png') no-repeat 4px 4px;
	text-indent: 50px;
	display: block;
	line-height: 40px;
}
.icon4 {
	background:url('./picture/account_safe_paypwd.png') no-repeat 4px 4px;
	text-indent: 50px;
	display: block;
	line-height: 40px;
}
.iconyes{
	background:url('./picture/account_yes.png') no-repeat 5px 13px;
	text-indent: 0px;
	display: block;
	line-height: 40px;
	color: #fd5959;
}
.iconno{
	background:url('./picture/account_no.png') no-repeat 5px 13px;
	text-indent: 0px;
	display: block;
	line-height: 40px;
	color: #898989;
}
.iconbinding{
	background:url('./picture/account_binding.png') no-repeat 5px 13px;
	text-indent: 0px;
	display: block;
	line-height: 40px;
	color: #fd5959;
}
.iconunbinding{
	background:url('./picture/account_unbinding.png') no-repeat 5px 13px;
	text-indent: 0px;
	display: block;
	line-height: 40px;
	color: #898989;
}
.buttonno1:hover,.buttonno2:hover{
	background: #cecece;
}
.buttonno1{
	display: block;
	width: 49px;
	height: 40px;
	background: #eeeeee;
	color: #727171;
	border-radius: 50px 0px 0px 50px;
	transition: all .4s ease 0s;
	float: left;
}
.buttonno2{
	display: block;
	width: 49px;
	height: 40px;
	background: #eeeeee;
	color: #727171;
	border-radius: 0px 50px 50px 0px;
	transition: all .4s ease 0s;
	float: right;
}
.green {
  background: #d70937;
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

a.green {
  min-width: 80px;
}

.green:hover {
  text-decoration: none;
  background: #ff3434
}

select {
  border: 1px solid #c5c5c5;
  padding: 3px 5px;
  height: 30px;
}

.ui-input {
  width: 200px;
  height: 22px;
  padding: 4px 5px;
  line-height: 22px;
  color: #595959;
  font-size: 14px;
  border: 1px solid #c5c5c5
}

.ui-input:hover,
.ui-textarea:hover,
.ui-input:focus,
.ui-textarea:focus,
.ui-input-hover {
  border: 1px solid #0697da
}

.ui-input:focus,
.ui-textarea:focus,
.ui-input-focus,
input:focus,
select:focus,
button:focus {
  outline: 0
}
</style>
