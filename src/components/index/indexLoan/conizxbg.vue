<template>
	<div class="conizxbg">
			<div class="conizxtit">
				<ul style="padding:0px">
					<li id="id0" style="padding:0px" @click='a="tab0";bool=true'><a  :class="{on:bool}" >公司新闻</a></li>
					<li id="id1" style="padding:0px" @click='a="tab1";bool=false'><a :class="{on:!bool}">行业新闻</a></li>
				</ul>
			</div>
			<component :is="a"></component>
		</div>

</template>
<script type="text/javascript">
import tab0 from './tab0'
import tab1 from './tab1'
	export default{
		data(){
			return {
				a:'tab0',
				bool:'true'
			}
		},
		components:{
			tab0,
			tab1
		},
		mothods:{
			
		}

	}
</script>
<style type="text/css" media="screen">
.conizxbg{width: 625px;float: left;margin-top:20px;margin-left: 20px;height:310px;    background: #ffffff;}
.conizxbg .conizxtit {width: 100%;height: 46px;
    background: #f4f4f4;}
.conizxbg .conizxx {width: 326px;height: 5px;background: #006DA5;margin-left: 4px;margin-top:2px;}
.conizxbg .conizxtxt {
width: 100%;
    height: 230px;
    position: relative;
}
.conizxbg .morep{padding: 0 13px 5px 0;position: absolute;right:0;bottom:0}
.conizxbg .conizxtxt ul {    margin: 34px 0px 0px 19px;}
.conizxtxt ul li {line-height: 35px;text-indent: 10px;}
.conizxtxt ul li a{color: #4e4e4e;}
.conizxtxt ul li a:hover {
    text-decoration: none;
    color: #222;
}
.conizxtxt ul li:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #eeeeee;
    border-radius: 50%;
    float: left;
    margin: 12px 0px 0px 0px;
}
.conizxtxt ul li span{    float: right;
    padding-right: 20px;
    color: #8c8c8c;}

.conizxbg .conizxtit ul {    height: 46px;
    margin: 0px;}
.conizxbg .conizxtit ul li {
	width: 114px;
    height: 46px;
    float: left;
    display: inline;
    cursor: pointer;
    background: #f4f4f4;
    font-size: 16px;
    color: #4e4e4e;
}
.conizxbg .conizxtit ul li a {width: 114px;height: 46px;float: left;line-height:46px;font-size: 16px;color: #4e4e4e;text-align: center;}
.conizxbg .conizxtit ul li a.on{background:#ffffff;color:#ff4747;}
.conizxbg .conizxtit ul li a:hover{text-decoration: none}

</style>