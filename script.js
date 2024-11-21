toggleButtons = document.querySelectorAll('.faq-toggle')

toggleButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active')
  })
})
