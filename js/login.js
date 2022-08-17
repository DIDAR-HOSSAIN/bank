document.getElementById('btn-submit').addEventListener('click', function(){
    // email field

    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // console.log(email);

    // email field

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    // console.log(password);


    if(email === 'didar@gmail.com' && password === 'secret'){
        window.location = "bank.html";
    }
    else{
        alert('Invalid User');
    }


})