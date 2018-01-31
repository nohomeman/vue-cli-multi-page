<template>
	<div>

		<vheader d="true">

		</vheader>
		
		<div class="bannerabout"></div>
		<contentMain></contentMain>

		<vfooter></vfooter>
		<kefu></kefu>
	</div>
</template>
<script type="text/javascript">
	import vheader from 'components/header/vheader'
	import vfooter from 'components/footer/vfooter'
	import kefu from 'components/kefu/kefu'
	import contentMain from 'components/newsindex/contentMain'
	export default{
		name: 'App',
		components:{
			vheader,
			vfooter,
			kefu,
			contentMain
		}
	}
</script>
<style type="text/css" media="screen">
.bannerabout{
    background: url('./picture/about_banner.jpg?v=1') no-repeat center;
    background-size: cover;
    height: 320px;
}

</style>
