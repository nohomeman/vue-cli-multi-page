<template lang="html">
  <div class="">
    <vheader></vheader>
    <div class="contentMain clearfix">
      <userNav a='true' color='rgb(215, 9, 55)' d='true'></userNav>
      <div class="UserRight">
  <h3 >交易记录</h3>
  <form methed="GET" action="/user-capital.html">
    选择时间：<input class="datainp" name="startdate" id="inpstart" placeholder="开始日期" readonly="readonly" value="" type="text">
    <input class="datainp" name="enddate" id="inpend" placeholder="结束日期" readonly="readonly" type="text" value="">

    查询类型：<select name="type">
      <option value="all">全部</option>
              <option value="repayment">还款成功</option>
              <option value="borrow">借款入账</option>
              <option value="recharge">充值</option>
              <option value="carry">提现</option>
              <option value="carryfee">提现手续费</option>
              <option value="invest">投标</option>
              <option value="investback">回收本息</option>
              <option value="failed">流标回款</option>
              <option value="trans">债权转让</option>
              <option value="transfee">转让手续费</option>
              <option value="lixifee">利息手续费</option>
              <option value="qichufee">期初管理费</option>
              <option value="manfee">借款管理费</option>
              <option value="earliermoney">提前还款违约金</option>
              <option value="forfeitmoney">逾期罚息</option>
              <option value="hongbao">红包</option>
              <option value="daichang">收回代偿资金</option>
              <option value="serverfee">服务费</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input class="green" type="submit" value="查询">
  </form>

  <table class="tradeTable_1" style="" cellspacing='0' >
    <tr class="user-capital-thead">
      <td style="width:120px">交易时间</td>
      <td>类型</td>
      <td>收入</td>
      <td>支出</td>
      <td style="width:200px">交易明细</td>
    </tr>
        </table>
  <div class="noData">暂时没有交易记录</div>		<div style="padding:10px 15px"></div>
</div>

    </div>
    <vfooter></vfooter>
    <kefu></kefu>
  </div>
</template>

<script>

require('assets/css/style_time.css')
require('assets/js/times.js')
$(function(){
	$('select[name="type"]').val("");
});

// var start = {
//     dateCell: '#inpstart',
//     format: 'YYYY年MM月DD日',
//     minDate: '2014-01-01 00:00:00', //设定最小日期为当前日期
// 	festival:true,
//     maxDate: '2018-01-30 18:00:52', //最大日期
//    isTime: true,
//     choosefun: function(datas){
//          end.minDate = datas; //开始日选好后，重置结束日的最小日期
//     }
// };
// var end = {
//     dateCell: '#inpend',
//     format: 'YYYY年MM月DD日',
//     minDate: jeDate.now(0), //设定最小日期为当前日期
// 	festival:true,
//     maxDate: '2018-01-30 18:00:52', //最大日期
//     isTime: true,
//     choosefun: function(datas){
//          start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
//     },
// 	okfun:function(val){alert(val)}
// };
// jeDate(start);
// jeDate(end);

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
.contentMain{
	width: 1200px;
    margin: auto;
    margin-top: 30px;
}
.UserRight h3{    color: #666666;
    font-size: 16px;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 20px;
    font-weight: normal;
    padding-bottom: 10px;}
.UserRight{float: left;margin-left: 20px;background: #ffffff;padding: 15px 20px;margin-bottom: 0px;width: 938px;min-height:788px}
.green {
  background: #d70937;
  color: #ffffff;
  font-size: 14px;
  padding: 0px 10px;
  display: inline-block;
  border-radius: 0px;
  border: 0px;
  text-align: center;
  line-height: 30px;
  min-width: 100px;
  cursor: pointer;
  transition: all 0.4s ease 0s;
}

a.green {
  min-width: 80px;
}

.green:hover {
  text-decoration: none;
  background: #ff3434
}

select {
  border: 1px solid #c5c5c5;
  padding: 3px 5px;
  height: 30px;
}
.tradeTable_1 {
    width: 900px;
    margin: 20px 0;
    font-size: 14px;
    text-align: center;
}
.tradeTable_1 tr:first-child {

    color: #696969;
    background: #f1f1f1;
}
.tradeTable_1 td {
    height: 35px;
    width: 110px;
    padding: 10px 0;
}
.datainp{
    width: 120px;
    height: 28px;
    border: 1px #ccc solid;
    padding: 0px 11px;
    margin-right:10px;
    font-size: 14px;
    color: #727171;
    line-height: 28px;

}
.noData{
    font-size: 16px;
    text-align: center;
    margin-top: 40px
    ;margin-bottom: 40px;
    color: #888888;
}
</style>
