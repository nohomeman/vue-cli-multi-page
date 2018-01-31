import echarts from 'echarts'
$(function() {
  const dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  let data = [23522000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let yMax = 5000;
  let dataShadow = [];

  // for (let i = 0; i < data.length; i++) {
  //     dataShadow.push(yMax);
  // }

  let myChart = echarts.init(document.getElementById('money'));

  let option = {
    title: {
      text: '',
      subtext: ''
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '2%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    // xAxis: {
    //     data: dataAxis,
    //     axisLabel: {
    //         inside: true,
    //         textStyle: {
    //             color: '#fff'
    //         }
    //     },
    //     axisTick: {
    //         show: false
    //     },
    //     axisLine: {
    //         show: false
    //     },
    //     z: 10
    // },
    xAxis: [{
      type: 'category',
      data: dataAxis,
      axisTick: {
        alignWithLabel: true
      }
    }],
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#999'
        }
      }
    },
    dataZoom: [{
      type: 'inside'
    }],
    series: [{ // For shadow
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'rgba(0,0,0,0.05)'
          }
        },
        barGap: '-100%',
        barCategoryGap: '40%',
        data: dataShadow,
        animation: false
      },
      {
        type: 'bar',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1, [{
                  offset: 0,
                  color: '#83bff6'
                },
                {
                  offset: 0.5,
                  color: '#188df0'
                },
                {
                  offset: 1,
                  color: '#188df0'
                }
              ]
            )
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1, [{
                  offset: 0,
                  color: '#2378f7'
                },
                {
                  offset: 0.7,
                  color: '#2378f7'
                },
                {
                  offset: 1,
                  color: '#83bff6'
                }
              ]
            )
          }
        },
        data: data
      }
    ]
  };
  myChart.setOption(option);
  $("#money").children("div").css("width", "100%");
  $("#money").find("canvas").css("width", "100%");
});
$(function() {
  var data = {
    "tip": ["19\u5c81\u4ee5\u4e0b", "20\u81f329\u5c81", "30\u81f339\u5c81", "40\u81f349\u5c81", "50\u81f359\u5c81", "60\u81f369\u5c81"],
    "agedata": [{
      "value": 6,
      "name": "19\u5c81\u4ee5\u4e0b"
    }, {
      "value": 9,
      "name": "20\u81f329\u5c81"
    }, {
      "value": 25,
      "name": "30\u81f339\u5c81"
    }, {
      "value": 41,
      "name": "40\u81f349\u5c81"
    }, {
      "value": 40,
      "name": "50\u81f359\u5c81"
    }, {
      "value": 38,
      "name": "60\u81f369\u5c81"
    }]
  };
  var myChart1 = echarts.init(document.getElementById('age'));
  var optionage = {
    color: ['#1677b8', '#1b89d5', '#61a8d8', '#94c6e9', '#b7d0ec', '#ddddee'],
    title: {
      text: '',
      subtext: '',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      right: 'right',
      top: 'top',
      // data: ['19岁以下','20至29岁','30至39岁','40至49岁','50至59岁','60至69岁']
      data: data.tip
    },
    series: [{
      name: '注册人年龄分布',
      type: 'pie',
      radius: '60%',
      center: ['45%', '50%'],
      // data:[
      //     {value:341, name:'19岁以下'},
      //     {value:3366, name:'20至29岁'},
      //     {value:3267, name:'30至39岁'},
      //     {value:1683, name:'40至49岁'},
      //     {value:990, name:'50至59岁'},
      //     {value:693, name:'60至69岁'},
      // ],
      data: data.agedata,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  myChart1.setOption(optionage);
});
$(function() {
  var data = {
    "tip": ["\u6295\u8d44\u7528\u6237", "\u6ce8\u518c\u7528\u6237"],
    "userdata": [{
      "value": 49,
      "name": "\u6295\u8d44\u7528\u6237"
    }, {
      "value": 170,
      "name": "\u6ce8\u518c\u7528\u6237"
    }]
  };
  var myChart2 = echarts.init(document.getElementById('investment'));
  var optioninvestment = {
    color: ['#3498db', '#dde'],
    title: {
      text: '',
      subtext: '',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      right: 'right',
      top: 'top',
      // data: ['投资用户','注册用户']
      data: data.tip
    },
    series: [{
      name: '注册用户投资比例',
      type: 'pie',
      radius: '60%',
      center: ['45%', '50%'],
      // data:[
      //     {value:21956, name:'投资用户'},
      //     {value:9148, name:'注册用户'},
      // ],
      data: data.userdata,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
  myChart2.setOption(optioninvestment);
});
$(function() {
  var data = {
    "tip": null,
    "tenderdata": [{
      "value": "280000.00",
      "name": "\u6700\u5927\u5355\u6237\u6295\u8d44\u4f59\u989d"
    }, {
      "value": 23522000,
      "name": "\u5e73\u53f0\u603b\u6295\u8d44\u4f59\u989d"
    }]
  };
  var myChart5 = echarts.init(document.getElementById('single2'));
  var optionsingle2 = {
    color: ['#3498db', '#dde'],
    title: {
      text: '',
      subtext: '',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      right: 'right',
      top: 'top',
      // data: ['最大单户投资余额','平台总投资余额']
      data: data.tip
    },
    series: [{
      name: '最大单户投资余额占比（截止当前日期）',
      type: 'pie',
      radius: '60%',
      center: ['45%', '50%'],
      // data:[
      //     {value:21956, name:'最大单户投资余额'},
      //     {value:9148, name:'平台总投资余额'},
      // ],
      data: data.tenderdata,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
  myChart5.setOption(optionsingle2);
});
$(function() {
  var data = {
    "tip": ["\u6700\u5927\u5341\u6237\u6295\u8d44\u4f59\u989d", "\u5e73\u53f0\u603b\u6295\u8d44\u4f59\u989d"],
    "tenderdata": [{
      "value": 874000,
      "name": "\u6700\u5927\u5341\u6237\u6295\u8d44\u4f59\u989d"
    }, {
      "value": 23522000,
      "name": "\u5e73\u53f0\u603b\u6295\u8d44\u4f59\u989d"
    }]
  };

  var myChart6 = echarts.init(document.getElementById('ten2'));
  var optionten2 = {
    color: ['#3498db', '#dde'],
    title: {
      text: '',
      subtext: '',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      right: 'right',
      top: 'top',
      // data: ['最大十户投资余额','平台总投资余额']
      data: data.tip
    },
    series: [{
      name: '最大十单户投资余额占比（截止当前日期）',
      type: 'pie',
      radius: '60%',
      center: ['45%', '50%'],
      // data:[
      //     {value:111956, name:'最大十户投资余额'},
      //     {value:914800, name:'平台总投资余额'},
      // ],
      data: data.tenderdata,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
  myChart6.setOption(optionten2);
})
