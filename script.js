let scrollContainer = document.querySelector('.galeri')
let backBtn = document.querySelector('#backBtn')
let nextBtn = document.querySelector('#nextBtn')


scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY
    scrollContainer.style.scrollBehavior = 'auto'
})


nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft += 1000;
})

backBtn.addEventListener('click', () => {

    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -= 1000;
})