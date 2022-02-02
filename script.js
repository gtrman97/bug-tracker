console.log(document.getElementById("reset-password"));
document.getElementById("reset-password").addEventListener('click', () => {
    document.querySelector("main").style.display = 'none';
    document.getElementById("forgot-password").style.display = 'flex';
})