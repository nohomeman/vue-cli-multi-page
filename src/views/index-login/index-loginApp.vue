<template>
<div class="">
  <vheader></vheader>
  <div class="contentMain loginbox clearfix">
    <loginLeft></loginLeft>
    <login></login>
  </div>
  <vfooter></vfooter>
  <kefu></kefu>
</div>
</template>
<style media="screen">

</style>
<script type="text/javascript">
require('assets/js/layer/layer.js')
require('assets/js/layer/theme/default/layer.css')
import vheader from 'components/header/vheader'
import vfooter from 'components/footer/vfooter'
import kefu from 'components/kefu/kefu'
import loginLeft from 'components/login_register/loginLeft'
import login from 'components/login_register/login'
export default {

  components: {
    vheader,
		loginLeft,
		login,
    vfooter,
    kefu
  }
}
</script>
