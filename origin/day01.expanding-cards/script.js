const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // 移除所有panel的active类
    removeActiveClasses()
    // 当前panel添加active类
    panel.classList.add('active')
  })
})

const removeActiveClasses = () => {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}