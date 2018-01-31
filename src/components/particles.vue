<template>
	<div style="position:relative;background: #ffffff;">
  <div class="count-architecture-diagram">
    <div class="title">金信惠融公司架构图</div>
    <!-- <img src="./picture/about_architecture_diagram.png" alt=""> -->
  </div>
  <div id="particles-js"></div>
</div>
</template>
<script type="text/javascript">

import particles from 'particles.js'
export default{
	mounted(){
		particlesJS.load('id',require('assets/js/app.data'));
	}
}
</script>