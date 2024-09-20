document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNum = document.getElementById('phone-num').value;
    const pinNum = document.getElementById('pin-num').value;
    if(phoneNum === "5" && pinNum === '1234'){
        console.log('you are logged in')
        window.location.href = 'home.html'
    }
    else{
        alert('wrong phone num or pin')
    }
})