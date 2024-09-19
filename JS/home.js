const addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', function(event){
    event.preventDefault();
    const addBalance = document.getElementById('addAmount').value;
    const pinNum = document.getElementById('pinNum').value;
    if(pinNum === '1234'){
        
        let currentBalance = document.getElementById('currentBalance').innerText;
        const addBalance = document.getElementById('addAmount').value;
        const newBalance = parseFloat(addBalance) + parseFloat(currentBalance);
        // currentBalanceconsole.log(newBalance);
        document.getElementById('currentBalance').innerText = newBalance;
        
    }
    else{
        alert('Can not add Money')
    }

})