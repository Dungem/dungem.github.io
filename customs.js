var headerText = document.querySelector('.header__text')

var text = 'EM DŨNG HỌC CODE '

for (let i = 0; i < text.length; i++) {
    let span = document.createElement('span')
    span.textContent = text[i]
    span.style.fontSize = '0px'
    headerText.appendChild(span)
}

//  get all span tag

var listSpan = document.querySelectorAll('.header__text span')
var index = 0
setInterval(() => {
    listSpan[index].style.fontSize = '70px'
    index++
    if (index == listSpan.length) {
        index = 0
            // reset size of text
        resetFontSize()
    }
}, 300)

const resetFontSize = () => {
    listSpan.forEach((span) => {
        span.style.fontSize = '0px'
    })
}