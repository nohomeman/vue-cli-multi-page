<template lang="html">
  <div class="UserLeft">
	<div class="leftBox">
		<ul class="leftMenu">
			<li class="leftBoxmin"><span :class="{usericon1: true, active: a}" :style="{color}">我的账户</span>
				<ul>
					<li id="mindex" :class="{selected:b}"><router-link to="/">账户首页</router-link></li>
					<li id="mipsaccount" :class="{selected:c}"><router-link to="/user-security">账户设置</router-link></li>
					<li id="mcapital" :class="{selected:d}"><router-link to="/user-capital">交易记录</router-link></li>
					<li id="mjifen" :class="{selected:e}"><router-link to="/user-jifen">我的积分</router-link></li>
					<li id="mhongbao" :class="{selected:f}"><router-link to="/user-hongbao">我的红包</router-link></li>
					<li id="mpromote" :class="{selected:g}"><router-link to="/user-promote">推广赚钱</router-link></li>
				</ul>
			</li>
			<li class="leftBoxmin"><span :class="{usericon2:true,active:aa}" :style="{colora}">投资管理</span>
				<ul>
					<li id="minvest" :class="{selected:h}"><a href="/user-invest.html">我的投资</a></li>
					<li id="mtransfer" :class="{selected:i}"><a href="/transfer-transfer.html">债权转让</a></li>
					<li id="mautoinvest" :class="{selected:j}"><a href="/user-autoinvest.html">自动投标</a></li>
				</ul>
			</li>
						<li class="leftBoxmin" :class="{usericon3:true,active:ba}" :style="{colorb}"><span class="usericon3">消息管理</span>
				<ul>
					<li id="mmessage" :class="{selected:k}"><a href="/message-index.html">我的消息</a></li>
					<li id="mmsgsetting" :class="{selected:l}"><a href="/user-msgsetting.html">通知设置</a></li>

				</ul>
			</li>
		</ul>
	</div>
</div>


</template>

<script>
export default {
  props: {
    usericon1: {
      default: 'usericon1'
    },
    usericon2: {
      default: 'usericon2'
    },
    usericon3: {
      default: 'usericon3'
    },
    selected:{
      default: 'selected'
    },
    active: {
      default: 'active'
    },
    color:{
      default: ''
    },
    colora:{
      default: ''
    },
    colorb:{
      default:''
    },
    a:{
      default: false
    },
    aa:{
      default: false
    },
    ba:{
      default: false
    },
    ca:{
      default: false
    },
    b:{
      default: false
    },
    c:{
      default: false
    },
    d:{
      default: false
    },
    e:{
      default: false
    },
    f:{
      default: false
    },
    g:{
      default: false
    },
    h:{
      default: false
    },
    i:{
      default: false
    },
    j:{
      default: false
    },
    k:{
      default: false
    },
    l:{
      default: false
    }
  }
}
</script>

<style lang="css">
.UserLeft{float:left;width:200px;}

.UserLeft .leftBoxMenu{padding:0px;}
.UserLeft .leftBox a{color:#999999;}
.UserLeft .leftBox .leftMenu li ul{list-style:none;text-indent: 30px;font-size:16px;}
.UserLeft .leftBox .leftMenu li ul li {display:block;line-height: 60px;border-left: 5px solid #ffffff;height:60px;transition: all .2s ease 0s;}

.UserLeft .leftBox .leftMenu span {display: block;
    line-height: 50px;
    color: #666666;
    font-size: 18px;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;}
.UserLeft .leftBox .leftMenu li.selected{    background: #f7f7f7;
    border-left: 5px solid #d70937;}

.UserLeft .leftBox .leftMenu li.selected a{color:#666666;background: #f7f7f7;}

.UserLeft .leftBox .leftMenu li ul li:hover{color: #d70937}

.UserLeft .leftBox .leftMenu li ul li a{display:block;line-height: 60px}
.UserLeft .leftBox .leftMenu li ul li a:hover{text-decoration: none;color: #d70937}
.UserLeft .leftBox .leftMenu li ul .selected a:hover {color: #666666;}
.UserLeft .leftBoxmin{margin-bottom: 20px;
    background: #ffffff;
    border: 1px solid #e7e7e7;}

.UserLeft .leftBoxmin .usericon1{
    background: url('./picture/account_sidebar_icon_1.png') no-repeat 35px 16px;
}

.UserLeft .leftBoxmin .usericon1:hover,.UserLeft .leftBoxmin .usericon1.active{
    background: url('./picture/account_sidebar_icon_1_active.png') no-repeat 35px 16px;
}

.UserLeft .leftBoxmin .usericon2{
    background: url('./picture/account_sidebar_icon_2.png') no-repeat 35px 16px;
}

.UserLeft .leftBoxmin .usericon2:hover,.UserLeft .leftBoxmin .usericon2.active{
    background: url('./picture/account_sidebar_icon_2_active.png') no-repeat 35px 16px;
}

.UserLeft .leftBoxmin .usericon3{
    background: url('./picture/account_sidebar_icon_3.png') no-repeat 35px 15px;
}

.UserLeft .leftBoxmin .usericon3:hover,.UserLeft .leftBoxmin .usericon3.active{
    background: url('./picture/account_sidebar_icon_3_active.png') no-repeat 35px 15px;
}

.UserLeft .leftBoxmin .usericon4{
    background: url('./picture/account_sidebar_icon_4.png') no-repeat 35px 15px;
}

.UserLeft .leftBoxmin .usericon4:hover,.UserLeft .leftBoxmin .usericon4.active{
    background: url('./picture/account_sidebar_icon_4_active.png') no-repeat 35px 15px;
}
</style>
