document.addEventListener('DOMContentLoaded', () => {
  const futureLinkElems = document.querySelectorAll('.feature__link')
  const futureSubElems = document.querySelectorAll('.feature-sub')

  futureLinkElems.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      console.log(btn)
      if (btn.classList.contains('feature__link_active')) {
        btn.classList.remove('feature__link_active')
        futureSubElems[index].classList.add('hidden')
      } else {
        futureSubElems.forEach((futureSubElem) => {
          futureSubElem.classList.add('hidden')
        })
        futureLinkElems.forEach((futureLinkElem) => {
          futureLinkElem.classList.remove('feature__link_active')
        })
        futureSubElems[index].classList.remove('hidden')
        btn.classList.add('feature__link_active')
        console.log(btn.classList)
      }
    })
  })
})
