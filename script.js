console.log(document.getElementById("forgot-password"));
document.getElementById("reset-password").addEventListener('click', () => {
    console.log('no');
    document.querySelector("main").style.display = 'none';
    document.getElementById("forgot-password").style.display = 'flex';
})