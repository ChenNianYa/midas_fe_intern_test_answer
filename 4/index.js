// Question 4 (Optional)
// 请以 source 为数据源, 实现一个可筛选可排序的表格
// , 筛选字段为 shape, color, 用最简单的平铺 UI 即可
// , 排序字段为 area, 点击表头排序即可
// , 可以选择你熟悉的框架实现, 也可以不用

const source = (() => {
  const shapes = ['Circle', 'Triangle', 'Square']
  const colors = ['White', 'Black', 'Blue', 'Red']
  const source = []
  for (let i = 0; i < 100; i++) {
    const shapeIndex = Math.floor((Math.random() * 100) % shapes.length)
    const colorIndex = Math.floor((Math.random() * 100) % colors.length)
    source.push({
      id: i,
      shape: shapes.at(shapeIndex),
      color: colors.at(colorIndex),
      area: Math.floor(Math.random() * 100),
    })
  }
  return source
})()
