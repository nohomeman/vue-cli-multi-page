<template id="">
<div class="contentMain clearfix">
  <div class="articleLeft">
    <ul class="clearfix">
      <li  @click='a="taba",bol=true' :class="{'selected':bol}"><a href="##">公司新闻</a></li>
      <li @click='a="tabb",bol=false' :class="{'selected':!bol}"><a href="##">行业新闻</a></li>
    </ul>
  </div>
  <component :is="a"></component>

</div>
</template>
<script type="text/javascript">

import taba from './taba'
import tabb from './tabb'
export default {
  data() {
    return {
      a: 'taba',
      bol: true,
      selected:'selected'
    };
  },
  components: {
    taba,
    tabb
  }
}
</script>
<style media="screen">
.contentMain{
	width: 1200px;
    margin: auto;
    margin-top: 30px;
}
.grouplist li:before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 3px;
    background-color: #595757;
    border-radius: 50%;
    float: left;
    margin: 10px 0px 0px 0px;
}
.grouplist li:before:hover{
    color:#d70937
}
.grouplist li {border-bottom:1px solid #dcdcdc;padding:12px 10px;font-size:16px;text-indent: 10px}
.grouplist li:hover{background: #f9f9f9;;}
.grouplist li:hover a{color:#d70937}
.grouplist li a{color:#595757;}
.grouplist li a:hover {text-decoration:none;color: #222;}
.articleLeft {
    width: 1178px;
    background: #ffffff;
    font-size: 18px;
    padding:30px;
    padding-bottom:0px;
    height: 45px;
        padding-left: 52px;
}
.articleLeft ul{list-style:none;}
.articleLeft ul li{float: left;margin-right:30px;line-height: 28px;height: 34px;}
.articleLeft ul li:last-child{border-right:0px;}
.articleLeft ul li a{display:block;color:#666666;}
.articleLeft ul li a:hover{text-decoration: none;color:#d70937;}
/*.articleLeft ul li:hover{border-bottom: 1px solid #d70937;}*/
.articleLeft p{background: #d70937;line-height: 50px;color: #ffffff;font-weight: bold;font-size: 16px;text-indent: 30px;}
.articleLeft .selected{
    border-bottom: 2px solid #d70937;
}
.articleLeft .selected a{color:#d4002c}
.articleRight {width: 1200px;    background: #ffffff;
    padding: 30px;    padding-top: 10px;}
.articleRight .pageBox{padding-right:0px;}
</style>
