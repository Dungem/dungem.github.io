// dãy màu cho sóng wifi
var colors = ['#0284c7', '#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd']

// lấy danh sách các cột sống wifi

var boxes = document.querySelectorAll('.box')

var index = 0
setInterval(() => {
  if (boxes[index] != null) {
    boxes[index].style.borderTop = `30px solid ${colors[index]}`
  }
  index++
  if (index == colors.length + 1) {
    index = 0
    resetBorderBackground()
  }
}, 400)

const resetBorderBackground = () => {
  boxes.forEach((box) => {
    box.style.borderTop = '30px solid transparent'
  })
}
