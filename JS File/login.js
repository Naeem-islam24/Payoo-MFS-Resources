// Search - form Submit reloading the page

document.getElementById('button-login').addEventListener('click',function(event){
  event.preventDefault();    // Critical to understand for beginer
    console.log('Button is clicked');

    const phoneNumber=document.getElementById('input-field').value;
   
    const pinNumber=document.getElementById('pin-field').value;

    console.log(phoneNumber,pinNumber);
    if(phoneNumber==='5678' && pinNumber==='1234'){
        console.log('Youre Logged in');
        window.location.href='/home.html'
    }
    else{
        alert('Phone Number or pin incorrect');
    }
})


