// Add money part 
document.getElementById('btn-addmoney').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-addmoney').value;
    console.log(addMoney);

    const addPin = document.getElementById('input-pin').value;
    console.log(addPin);

    if (addPin === '1234') {
        console.log('Amount Added in balance');

        const Balance = document.getElementById('balance').innerText;
        console.log(Balance);

        const SumaddMoney = parseFloat(addMoney);
        const SumBalance = parseFloat(Balance);
        const Newbalance = SumaddMoney + SumBalance;
        console.log(Newbalance);
    }
    else{
        alert('Upps please! Try again Later...')
    }

})

// Cashout Part
document.getElementById('btn-moneyout').addEventListener('click', function (event) {
    event.preventDefault();

    const cashoutMoney = document.getElementById('input-cashout').value;
    console.log(cashoutMoney);

    const addPin = document.getElementById('input-pinnumber').value;
    console.log(addPin);

    if (addPin === '1234') {
        console.log('Amount withdraw from balance');

        const Balance = document.getElementById('balance').innerText;
        console.log(Balance);

        const SumcashoutMoney = parseFloat(cashoutMoney);
        const SumBalance = parseFloat(Balance);
        const Newbalance =SumBalance-SumcashoutMoney;
        console.log(Newbalance);
        document.getElementById('balance').innerText=Newbalance;

    }
    else{
        alert('please! Try again Later...')
    }

})

document.getElementById('btn-cashout').addEventListener('click', function(){
    console.log('show cashout form');

    
document.getElementById('form-cashout').classList.remove('hidden');
document.getElementById('form-cashin').classList.add('hidden');

})

document.getElementById('btn-cashin').addEventListener('click', function(){
    console.log('show cashin form');

    
document.getElementById('form-cashin').classList.remove('hidden');
document.getElementById('form-cashout').classList.add('hidden');

})