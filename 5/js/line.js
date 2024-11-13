  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chart'));
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '气温变化',
      left: 'center'
    },
    toolbox: {

    },
    dataZoom: [
      {
        type: 'slider'
      },
      {
        type: 'inside'
      }
    ],
    tooltip: {
      trigger: 'axis',
      formatter: function (param) {
        const index = param[0].dataIndex
        return `<div>时间：${timeList[index]}<div><div>天气：${weatherList[index]}<div><div>气温：${temperatureList[index]}℃<div>`;
      },
    },
    xAxis: {
      data: timeList
    },
    yAxis: {
      type: 'value',
      name: '温度℃'
    },
    series: [
      {
        label: {
          show: true,
          formatter: function (param) {
            const index = param.dataIndex
            return `${weatherList[index]} 

${temperatureList[index]}℃`;
          },
        },
        type: 'line',
        data: temperatureList
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);