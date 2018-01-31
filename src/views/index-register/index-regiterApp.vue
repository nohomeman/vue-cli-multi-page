<template>
	<div>
		<vheader></vheader>
		<div class="contentMain loginbox clearfix">
			<loginLeft></loginLeft>
			<register></register>
		</div>
		<vfooter></vfooter>
		<kefu></kefu>
	</div>
</template>
<script type="text/javascript">
require('assets/js/layer/layer.js')
require('assets/js/layer/theme/default/layer.css')
import vheader from 'components/header/vheader'
import loginLeft from 'components/login_register/loginLeft'
import register from 'components/login_register/register'
import vfooter from 'components/footer/vfooter'
import kefu from 'components/kefu/kefu'
	export default{
		components: {
			vheader,
			loginLeft,
			register,
			vfooter,
			kefu
		}
	}
</script>
