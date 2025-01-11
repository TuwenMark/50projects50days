const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let loading = 0

let timeId = setInterval(blurring, 30)

function blurring() {
  loading++
  if (loading > 99) {
    clearInterval(timeId)
  }
  loadingText.innerText = `${loading}%`
  bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
  loadingText.style.opacity = scale(loading, 0, 100, 1, 0)
}

// in_min <= num <= in_max，将一个数值范围转化为另一个数值范围
function scale(num, in_min, in_max, out_min, out_max) {
  // (out_max - out_min) / (in_max - in_min)：比例
  // num - in_min：变化的幅度
  // + out_min：转化后的最小值 + 变化的幅度 = 转化后的最终值
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
