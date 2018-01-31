import layer from 'layer'
$(function(){
  $('#regbutton').click(function () {
    if (!$('#account').val()) {
    layer.tips('请输入手机号', '#account',{tips:1});
    return;
  }
  if (!$("#password").val()) {
    layer.tips("请输入登录密码","#password",{tips:1});
    return;
  }
  $('#loginform').submit();

  })

})
