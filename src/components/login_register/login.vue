<template lang="html">
  <div class="loginRight">
    <form id="loginform" method="post">
      <div class="inputfield loginname"><input type="text" id="account" placeholder="请输入手机号" name="account"/></div>
      <div class="inputfield loginpass"><input type="password" placeholder="请输入登录密码" id="password" name="password"/></div>
      <div class="clearfix" style="width: 327px;">
        <div style="float:left;"><a href="/index-resetpwd.html" style="color: #a6a6a6;">忘记密码</a></div>
        <div style="float:right">没有账户？<a href="/index-register.html" style="color: #03A9F4;">立即注册</a></div>
      </div>
      <input type="button" value="立即登录" @click="doSubmit();" id="regbutton" class="green" style="margin-top:30px"/>
    </form>
  </div>
</template>

<script>
require('assets/css/style_login.css')
export default {
  methods: {
    doSubmit() {
      if (!$('#account').val()) {
        layer.tips('请输入手机号', '#account', {
          tips: 1
        });
        return;
      }
      if (!$("#password").val()) {
        layer.tips("请输入登录密码", "#password", {
          tips: 1
        });
        return;
      }
      $('#loginform').submit();
    }
  },
}
</script>

<style lang="css">
.loginRight .loginname {
  background: #ffffff url('./picture/login_username.png') no-repeat 15px 14px;
}

.loginRight .loginpass {
  background: #ffffff url('./picture/login_password.png') no-repeat 15px 14px;
  margin-top: 40px;
}
</style>
