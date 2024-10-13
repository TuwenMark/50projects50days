const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const progress = document.getElementById("progress")

let currentActive = 1

prev.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--
  }
  update()
})

next.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++
  }
  update()
})

function update() {
  // 更新active类
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // 更新进度条长度
  const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  // 更新prev和next按钮状态
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
