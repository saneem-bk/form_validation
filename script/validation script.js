function validateName(){
    let nameError = document.getElementById('username-error')
    let name = document.getElementById('username')

    if(name.value.trim()== ''){
        nameError.innerHTML="username cannot be blank" 
        return false
    }else if(name.value.length < 5){
        nameError.innerHTML = "username must not be less than 5 characters"
        return false
    }
    else{
        nameError.innerHTML = ''
        return true
    }
}

function validateEmail(){
    let email = document.getElementById('email')
    let emailError = document.getElementById('email-error')
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(email.value.trim() == ''){
        emailError.innerHTML = 'Email cannot be blank!!'
    }else if( !email.value.match(regEx) ){
        emailError.innerHTML = "Email is not in Global format"
        return false

    }else{
        emailError.innerHTML = ''
        return true
    }
}

function validatePassword(){
    let password = document.getElementById('password')
    let passwordError =document.getElementById('password-error')

    if(password.value.trim()==''){
        passwordError.innerHTML='password cannot be blank'
        return false
    }else if(password.value.length < 8 || password.value.length > 20){
        passwordError.innerHTML = 'password length must be between 8-20 characters'
        return false
    }else{
        passwordError.innerHTML = ''
        return true
    }
}

function validateRepeat(){
    let password = document.getElementById('password')
    let repeatPassword = document.getElementById('repeat')
    let repeatError = document.getElementById('repeat-error')

    if (password.value != repeatPassword.value){
        repeatError.innerHTML = 'password mismatch'
        return false
    }else{
        repeatError.innerHTML = ''
        return true
    }
}

    function validateForm(){
        let signUpError = document.getElementById('signUp-error')
        if ( !validateEmail() || !validateName() || !validatePassword() || !validateRepeat() ){
            signUpError.innerHTML = 'please resolve the error'
            return false
        }else{
            signUpError.innerHTML = ''
            return true
        }

}

function validateLogInName(){
    let nameError = document.getElementById('login-error')
    let name = document.getElementById('loginUsername')

    if(name.value.trim()== ''){
        nameError.innerHTML="username cannot be blank" 
        return false
    }else if(name.value.length < 5){
        nameError.innerHTML = "username must not be less than 5 characters"
        return false
    }
    else{
        nameError.innerHTML = ''
        return true
    }
}

function validateLogInEmail(){
    let email = document.getElementById('loginEmail')
    let emailError = document.getElementById('loginEmail-error')
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(email.value.trim() == ''){
        emailError.innerHTML = 'Email cannot be blank!!'
    }else if( !email.value.match(regEx) ){
        emailError.innerHTML = "Email is not in Global format"
        return false

    }else{
        emailError.innerHTML = ''
        return true
    }
}

function validateLogInPassword(){
    let password = document.getElementById('logInPassword')
    let passwordError =document.getElementById('loginPassword-error')

    if(password.value.trim()==''){
        passwordError.innerHTML='password cannot be blank'
        return false
    }else if(password.value.length < 8 || password.value.length > 20){
        passwordError.innerHTML = 'password length must be between 8-20 characters'
        return false
    }else{
        passwordError.innerHTML = ''
        return true
    }
}

function checkPasswordStrength(password) {
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');

    let strength = 0;

    if (password.length >= 8 ) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength +=25;
    strengthFill.style.width = strength + '%';

    if (strength <= 25) {
      strengthFill.style.backgroundColor = 'red';
      strengthText.textContent = 'Strength: Lower Strength';
    } else if (strength <= 50) {
      strengthFill.style.backgroundColor = 'orange';
      strengthText.textContent = 'Strength: Low Strength';
    } else if (strength <= 75) {
      strengthFill.style.backgroundColor = 'yellow';
      strengthText.textContent = 'Strength: Medium Strength';
    } else {
      strengthFill.style.backgroundColor = 'green';
      strengthText.textContent = 'Strength: Strong Password';
    }
  }