// Question 5 (Optional)
// 请以 source 为数据源, 用一些合适的可视化图表来分析这些数据
// , 如变化趋势, 分布情况等,
// , 可以选择你熟悉的图表库实现

const source = (() => {
  const weathers = ['Sunny', 'Rainy', 'Cloudy']
  const source = []
  const now = Date.now()
  const ONE_DAY = 86400_000
  const startTime = now - (now % ONE_DAY)
  for (let i = 0; i < 20; i++) {
    const weatherIndex = Math.floor((Math.random() * 100) % weathers.length)
    source.push({
      time: startTime + ONE_DAY * i,
      weather: weathers.at(weatherIndex),
      temperature: 10 + (Math.floor(Math.random() * 100) % 10),
    })
  }
  return source
})()

const timeList = []
const weatherList = []
const temperatureList = []
source.forEach(item => {
  const date = new Date(item.time)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  timeList.push(`${year}-${month}-${day} ${hours}:${minutes}`)
  weatherList.push(item.weather)
  temperatureList.push(item.temperature)
})