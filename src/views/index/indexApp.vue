<template>
	<div>
		<vheader a='true'>
		

		</vheader>

		<indexBanner>
			
		</indexBanner>	
		<indexBody></indexBody>
		<indexLoan>
			<investbang slot='investbang'></investbang>
		</indexLoan>
		
		<vfooter></vfooter>
		<kefu></kefu>
	</div>
</template>

<script type="text/javascript">

	import vheader from 'components/header/vheader'
	import vfooter from 'components/footer/vfooter'
	import indexBanner from 'components/index/indexBanner'
	import indexBody from 'components/index/indexBody'
	import indexLoan from 'components/index/indexLoan/indexLoan'
	import investbang from 'components/index/indexLoan/investbang'
	import kefu from 'components/kefu/kefu'
	export default{
		components:{
			vheader,
			vfooter,
			indexBanner,
			indexBody,
			indexLoan,
			investbang,
			kefu
		}
	}
</script>
<style type="text/css" media="screen">

</style>
