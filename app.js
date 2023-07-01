let toggleBtn = document.querySelector('#toggle-btn')
let body = document.querySelector('body')
let btnContainer = document.querySelector('.btn-container')

btnContainer.addEventListener('click', () => {
    toggleBtn.classList.toggle('day');
    body.classList.toggle('day');
    btnContainer.classList.toggle('day');
})