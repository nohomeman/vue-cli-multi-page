<template>
<div>
  <vheader>


  </vheader>
  <div class="banner"></div>
<vcontent></vcontent>
  <vfooter></vfooter>
  <kefu></kefu>
</div>
</template>
<style type="text/css" media="screen">
.banner {
  background: url('picture/product_banner.jpg') no-repeat center;
  background-size: cover;
  height: 320px;
}

</style>
<script type="text/javascript">


import vheader from 'components/header/vheader'
import vfooter from 'components/footer/vfooter'
import kefu from 'components/kefu/kefu'
import vcontent from 'components/list/content'




export default {

  components: {
    vheader,
    vfooter,
    kefu,
    vcontent
  }
}
</script>
