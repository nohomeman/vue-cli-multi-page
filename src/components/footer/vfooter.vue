<template>
<div>
  <footerTop></footerTop>
  <footerBottom></footerBottom>
</div>
</template>
<script type="text/javascript">
import footerTop from 'components/footer/footerTop'
import footerBottom from 'components/footer/footerBottom'
export default {
  components: {
    footerTop,
    footerBottom

  }
}
</script>
<style type="text/css" media="screen">
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  display: inline-block;
}

* html .clearfix {
  height: 1%;
}

.clearfix {
  display: block;
}

.clearline {
  display: block;
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  clear: both;
}



.footer {
  background: #333333;
  color: #999999;
  margin-top: 30px;
  width: 100%;
  height: 266px;
}

.footerBottom {
  background: #1a1a1a;
  color: #474747;
  width: 100%;
  height: 96px;
}

.footer .footBody,
.footerBottom .footBody {
  width: 1200px;
  margin: auto;
  padding: 10px 0px;
}

.footerBottom .footBody p {
  line-height: 32px
}

.footB_left {
  float: left;
}

.footB_right {
  float: right;
  text-align: right;
}

.footA_left {
  float: left;
  margin-top: 55px;
  width: 700px;
}

.footA_right {
  float: right;
  text-align: right;
  margin-top: 54px;
}

.footA_left_top .foot_logo {
  float: left;
}

.footA_left_top ul {
  float: left;
  margin-top: 10px;
}

.footA_left_top ul li {
  float: left;
  margin-left: 35px;
  color: #999999;
  font-size: 12px;
  list-style-type: square
}

.footA_left_top ul li a {
  color: #999999;
  font-size: 14px
}

.footA_left_bottom {
  margin-top: 30px;
  font-size: 14px;
  color: #656565;
  line-height: 24px;
}

.footA_left_bottom p {
  margin-bottom: 20px;
}
</style>
