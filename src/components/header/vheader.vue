<template>
<div>
  <div class="topNav">
    <div class="navList clearfix">
      <div class="left">服务热线：0533-3177089</div>
      <div class="right">
        <ul>
          <li class="topnav-list-login">
            <a href="/views/index-login.html">登录</a>
          </li>
          <div class="leftline"></div>
          <li class="topnav-list-register">
            <a href="/views/protocol-index-type-fengxian.html">注册</a>
          </li>

          <!--            <div class="leftline"></div>

                <li><a href=""><img src="picture/topnav_sina.png"/></a>
                <a><img src="picture/topnav_wechat.png"/></a></li>  -->

          <div class="leftline"></div>

          <li class="webmenu">
            <a href="##"><i>下载APP</i></a>
            <ul class="webmenu1">
              <li style="float: none;line-height: 0;"><a style="margin:0px;padding:0px;border:0px" href="https://www.qcjinxin.com/index-downpage.html"><img src="./picture/footer_qrcode_download.png" style="width:88px;height:88px;text-align: center;padding: 8px 5px;" alt="网站二维码" ></a>
              </li>
            </ul>
          </li>

          <div class="leftline"></div>

          <li class="webmenu">
            <a href="##"><i>手机浏览</i></a>
            <ul class="webmenu1" style="left: -31px;">
              <li style="float: none;line-height: 0;"><a style="margin:0px;padding:0px;border:0px" href="http://h5.qcjinxin.com/"><img src="./picture/footer_qrcode_moblie.png" style="width:88px;height:88px;text-align: center;padding: 8px 5px;" alt="网站二维码" ></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="headerBox" slot="nav">
    <div class="headerMenu clearfix">
      <div class="logo">
        <a href="index.html">
                <img src="./picture/big_20180108101611_64982.png">
            </a>
      </div>
      <div class="menu">
        <ul id="nav" class="nav">

          <li :class="{navli:true,hover:a}">
            <a href="index.html">主 页</a>
          </li>

          <li :class="{navli:true,list:true,hover:b}">
            <a href="##">投资理财<em></em></a>
            <div class="menu_list">
              <a href="loan-index.html">理财产品</a><a href="transfer-index.html">债权转让</a> </div>
          </li>

          <li :class="{navli:true,hover:c}">
            <a href="news-guide.html">新手指引</a>
          </li>

          <li :class="{navli:true,list:true,hover:d}">
            <a href="##">信息披露<em></em></a>
            <div class="menu_list">
              <a href="news-aboutus.html">关于我们</a><a href="news-reveal.html">平台数据</a><a href="news-index.html">新闻公告</a> </div>
          </li>

          <li :class="{navli:true,hover:e}">
            <a href="news-help.html">帮助中心</a>
          </li>
          <div class="NavMenu">
            <li class="navli Navmylogin" onclick="window.location.href='user-index.html'">
              <img class="userimg" src="./picture/header_user.png" /> 我的账户
              <img class="arrow" style="margin: 0px 0px 0px 25px;float: none;" src="./picture/header_user_arrow.png" />
            </li>
            <ul class="myloginlist">
              <li class="line"><a href="user-index.html">账户总览</a></li>
              <li class="line"><a href="user-index.html#/user-invest">我的投资</a></li>
              <li class="line"><a href="user-index.html#/user-jifen">我的积分</a></li>
              <li class="line"><a href="user-index.html#/user-hongbao">我的红包</a></li>
              <li class="line"><a href="user-index.html#/user-security">账户信息</a></li>
              <li class="login">
                <a href="/index-logout.html">安全退出</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
require('assets/css/nav.css')
export default {
  data() {
    return {}
  },
  props: {
    navli: {
      default: "navli"
    },
    list: {
      default: 'list'
    },
    hover: {
      default: 'hover'
    },
    a: {
      default: false
    },
    b: {
      default: false
    },
    c: {
      default: false
    },
    d: {
      default: false
    },
    e: {
      default: false
    }
  }
}
</script>
<style type="text/css" media="screen">
@charset "utf-8";
* {
  margin: 0px;
  padding: 0px;
}

body {
  font-size: 14px;
  font-family: "微软雅黑";
  color: #595757;
  line-height: 180%;
  padding: 0px;
  margin: 0px;
  background: #f0f0f0;
}

a {
  text-decoration: none;
  blr: expression(this.onfocus=this.blur());
  outline: none;
  cursor: pointer;
}

/*a:hover {
    text-decoration:underline;
}*/

img {
  border: none;
}

ul,
li,
i {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  font-style: normal;
}

h1,
h2,
h3,
p {
  padding: 0px;
  margin: 0px;
}

.right {
  float: right;
}

.left {
  float: left;
}

.changeMobileBox {
  display: none;
}

.leftline {
  border-left: #eeeeee solid 1px;
  margin-top: 8px;
  height: 14px;
  float: left;
}

.topNav .bottomline {
  border-bottom-style: solid;
  border-bottom-color: #000;
  border-bottom-width: 2px;
}

.topNav {
  background: #f9f9f9;
  font-size: 12px;
  height: 30px;
  color: #a5a5a5;
  width: 100%;
}

.topNav .navList {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  line-height: 12px;
}

.topNav .navList a {
  color: #a6a6a6;
}

.topNav .navList a:hover {
  text-decoration: none;
  color: #e22835;
}

.topNav .navList ul li {
  float: left;
  line-height: 30px;
  min-width: 60px;
  text-align: center;
  transition: all 0.2s ease 0s;
}

.topNav .navList .left {
  line-height: 12px;
  padding: 9px 0;
}

.weibo {
  background: url('/static/img/topnav_sina.png') no-repeat;
  height: 30px
}

.topNav .navList img {
  padding: 0px 8px;
}

.topNav .navList img:hover {
  cursor: pointer;
}

.phone {
  background: url('/static/img/topnav_moblie.png') no-repeat;
  padding-left: 16px;
  color: #a6a6a6;
  transition: all 0.4s ease 0s;
}

.webmenu:hover .phone {
  background: url('/static/img/topnav_moblie_hover.png') no-repeat;
  color: #e22835;
}

.webmenu {
  position: relative;
}

.webmenu a {
  position: relative;
  border-left: 1px solid #f9f9f9;
  border-right: 1px solid #f9f9f9;
}

.webmenu a {
  padding: 7px 16px;
  z-index: 4
}

.webmenu:hover a {
  background: #ffffff;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;

}

.webmenu1 {
  left: auto;
  right: -1;
}

.webmenu ul {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: -15px;
  width: 111px;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  z-index: 3;
  top: 29px;
  margin-top: -10px;
  transition: all .2s ease 0s;
}

.webmenu li {
  text-align: center;
}

.webmenu:hover .webmenu1 {
  visibility: visible;
  opacity: 1;
  margin-top: 0px;

}

/*按钮字体*/
input, button {
    font: 12px/1.75 '微软雅黑',YaHei,tahoma,arial;
}
.moblie {
  width: 112px;
  padding: 10px 0 0 10px 10px;
  text-align: center;
  border: #eeeeee 1px solid;
  position: absolute;
  background: #ffffff;
}
</style>
