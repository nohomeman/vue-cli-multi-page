<template lang="html">
  <div class="">
    <vheader></vheader>
    <div class="contentMain clearfix">
      <userNav a='true' color='rgb(215, 9, 55)' e="true"></userNav>
    </div>
    <vfooter></vfooter>
    <kefu></kefu>
  </div>
</template>

<script>
import kefu from 'components/kefu/kefu'
import vheader from 'components/header/vheader'
import userNav from 'components/user/userNav'
import vfooter from 'components/footer/vfooter'

export default {
components: {
  vheader,
  userNav,
  vfooter,
  kefu
}
}
</script>

<style lang="css">

</style>
