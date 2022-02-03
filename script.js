document.getElementById("reset").addEventListener('click', () => {
    document.querySelector("main").style.display = 'none';
    document.getElementById("forgot-password").style.display = 'initial';
})

document.getElementById("create").addEventListener('click', () => {
    document.querySelector("main").style.display = 'none';
    document.getElementById("create-account").style.display = 'initial';
})

document.getElementById("demo").addEventListener('click', () => {
    document.querySelector("main").style.display = 'none';
    document.getElementById("demo-login").style.display = 'initial';
})