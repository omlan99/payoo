const showCash =document.getElementById('cashOutcall');
showCash.addEventListener('click', function(){
    document.getElementById('cashOutForm').classList.remove('hidden');
    document.getElementById('addMoneyForm').classList.add('hidden')
})

const addMoneyCall = document.getElementById('addMoneyCall')
addMoneyCall.addEventListener('click', function(){
    document.getElementById('addMoneyForm').classList.remove('hidden')
    document.getElementById('cashOutForm').classList.add('hidden');
})
// add balnce part
// getting the current balance

// getting the button
const addBtn = document.getElementById('addBtn')

// adding click eventlistener to button
addBtn.addEventListener('click', function(event){
    // stopping from reloading
    event.preventDefault();

    // getting input value of amount and pin 
    const addBalance = document.getElementById('addAmount').value;
    const pinNum = document.getElementById('pinNum').value;
    const currentBalance = document.getElementById('currentBalance').innerText;
    // unconventional way of validation
    if(pinNum === '1234'){
        // adding the current balance and addbalance after converting
        const newBalance = parseFloat(addBalance) + parseFloat(currentBalance);
        // changing the value of current balance
        document.getElementById('currentBalance').innerText = newBalance;
        
    }

    else{
        alert('Can not add Money')
    }

})



// cash out part
// gettng the cash out btn
const outBtn = document.getElementById('outBtn')
// adding evenlistener to btn
outBtn.addEventListener('click', function(event){
    // preventing from to reload
    event.preventDefault();
    // getting input value
    const outAmount = document.getElementById('outAmount').value;
    const outPinNum = document.getElementById('outPinNum').value;
    const currentBalance = document.getElementById('currentBalance').innerText;

    // unconventional way of validation
  if(outPinNum === '1234'){
        // substracting the value by converting to float type
        const remainBalance = parseFloat(currentBalance) - parseFloat(outAmount);
        
        console.log(remainBalance)

        // changing the innertext of current balance
        document.getElementById('currentBalance').innerText = remainBalance

    }
    else{
        alert('Can not cash out')
    }  
})



