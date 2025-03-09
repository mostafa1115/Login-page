let container = document.querySelector('.container');
let registerBtn = document.querySelector('.register-btn');
let loginBtn = document.querySelector('.login-btn');
registerBtn.onclick = function(){
    container.classList.add('active');
}
loginBtn.onclick = function(){
    container.classList.remove('active');
}
