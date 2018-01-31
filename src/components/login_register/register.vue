<template lang="html">
  <div class="loginRight regBox">
		<h3>注册账户</h3>
		<form id="regform" method="post">
			<table>
				<tr>
					<td>
						<input type="text" id="mobile" class="ui-input" name="mobile" placeholder="请输入手机号码"/>
					</td>
				</tr>
				<tr>
					<td>
						<input type="password" id="password1" class="ui-input" name="password1" placeholder="请输入6~16位登录密码"/>
					</td>
				</tr>
								<tr>
					<td>
						<input type="text" id="mobilecode" placeholder="手机验证码" class="ui-input" name="mobilecode" style="width: 205px;"/>&nbsp;&nbsp;<input type='button' class='green green2' id="sendsms" value='获得验证码'>
					</td>
				</tr>
												<tr>
					<td>
						<!-- <select name="area" id="area" style="width: 160px;">
							<option value="-1">不选择地区</option>
							<option value="0">全国</option>
						</select> -->
						<input type="search" id="area" class="ui-input" value="" placeholder="输入营业部编码并回车" style="width:165px;height: 30px;line-height: 30px;">
						<select name="managerid" id="managerid" style="width: 155px;">
							<option value="0">请选择理财经理</option>
						</select>
					</td>
				</tr>
								<tr>
					<td class="register-readinfo">
						<input type="checkbox" id="readinfo" name="readinfo">&nbsp;&nbsp;<label for="readinfo">阅读并同意<a href="javascript:void(0)" @click="showAgreement()">《用户注册协议》</a></label>
						<span class="tologin">已有账号，<a href="/index-login.html" style="color: #03A9F4;">去登录</a></span>
					</td>
				</tr>
				<tr>
					<td valign="top">
						<div id="embed-captcha"></div>
						<input type="button" value="注册" id="regbutton" class="green" @click="doSubmit()"/>
					</td>
				</tr>
			</table>
		</form>
	</div>

</template>

<script>
require('assets/css/style_login.css')

function isMobile(mobile) {
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})||(19[0-9]{1}))+\d{8})$/;
	if(!myreg.test(mobile))  {
	    return false;
	} else {
		return true;
	}
}
export default {
  methods: {
    doSubmit() {
      var mobile = $('#mobile').val();
      if (!isMobile(mobile)) {
        layer.tips('请正确填写手机号码', '#mobile', {
          tips: 1
        });
        return;
      }
      if ($("#password1").val() == '') {
        layer.tips("请输入账户密码", "#password1", {
          tips: 1
        });
        return;
      }
      if ($("#mobilecode").val() == '') {
        layer.tips("请填写手机验证码", "#mobilecode", {
          tips: 1
        });
        return;
      }
      if ($("input[name='readinfo']:checkbox:checked").length == 0) {
        layer.tips("请同意注册条款", "#readinfo", {
          tips: 1
        });
        return;
      }

    },
    showAgreement() {
      const url = 'https://www.qcjinxin.com/protocol-index-type-reg.html';
      layer.open({
        type: 2,
        shade: [0],
        fix: true,
        title: '用户注册协议',
        maxmin: true,
        content: url,
        area: ['800px', '80%']
      });
    }

  }
}
</script>

<style lang="css">


</style>
