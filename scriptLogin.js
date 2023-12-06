document.addEventListener("DOMContentLoaded", function(){

const first_name = document.getElementById('firstName');
const last_name = document.getElementById('lastName');
const password = document.getElementById('password');
const email = document.getElementById('email');

const submit_button = document.getElementById('submit');


first_name.addEventListener('blur', function() {
    if (first_name.value.trim() === ''){
        let f_name_div = document.getElementById('f_name_div');
        let addi_message = f_name_div.querySelector('.custom_error');
        if (addi_message)
        {
            addi_message.remove();
        }
        let icon = f_name_div.querySelector('.error_icon');
        if (icon)
          icon.remove();
        let newError = document.createElement('div')
        newError.innerText = 'Zadejte prosím své jméno.'
        newError.classList.add('custom_error');
        icon = f_name_div.querySelector('.custom_icon');
        if (icon)
          icon.remove();
        let custom_icon = document.createElement('div')
        custom_icon.classList.add('custom_icon');
        let error_icon = document.createElement('div')
        error_icon.innerHTML = '!';
        error_icon.classList.add('error_icon');
        custom_icon.appendChild(error_icon);
        f_name_div.appendChild(custom_icon);
        f_name_div.appendChild(newError);
        first_name.classList.add('red_input');
    }
    else
    {
        let f_name_div = document.getElementById('f_name_div');
        let addi_message = f_name_div.querySelector('.custom_error');
        if (addi_message)
        {
            addi_message.remove();
        }
        icon = f_name_div.querySelector('.custom_icon');
        if (icon)
          icon.remove();
        let custom_icon = document.createElement('div')
        custom_icon.style.backgroundImage = 'url(https://customer.bmwgroup.com/oneid/img/check-default-light.341ace2a.svg)';
        custom_icon.classList.add('custom_icon');
        f_name_div.appendChild(custom_icon);
        first_name.classList.remove('red_input');
    }
    
});

last_name.addEventListener('blur', function() {
    if (last_name.value.trim() === ''){
        let l_name_div = document.getElementById('l_name_div');
        let addi_message = l_name_div.querySelector('.custom_error');
        if (addi_message)
        {
            addi_message.remove();
        }
        let icon = l_name_div.querySelector('.error_icon');
        if (icon)
          icon.remove();
        let newError = document.createElement('div')
        newError.innerText = 'Zadejte prosím své příjmení.'
        newError.classList.add('custom_error');
        icon = l_name_div.querySelector('.custom_icon');
        if (icon)
          icon.remove();
        let custom_icon = document.createElement('div')
        custom_icon.classList.add('custom_icon');
        let error_icon = document.createElement('div')
        error_icon.innerHTML = '!';
        error_icon.classList.add('error_icon');
        custom_icon.appendChild(error_icon);
        l_name_div.appendChild(custom_icon);
        l_name_div.appendChild(newError);
        last_name.classList.add('red_input');
    }
    else
    {
        let l_name_div = document.getElementById('l_name_div');
        let addi_message = l_name_div.querySelector('.custom_error');
        if (addi_message)
        {
            addi_message.remove();
        }
        icon = l_name_div.querySelector('.custom_icon');
        if (icon)
          icon.remove();
        let custom_icon = document.createElement('div')
        custom_icon.style.backgroundImage = 'url(https://customer.bmwgroup.com/oneid/img/check-default-light.341ace2a.svg)';
        custom_icon.classList.add('custom_icon');
        l_name_div.appendChild(custom_icon);
        last_name.classList.remove('red_input');
    }
    
});

password.addEventListener('blur', function() {
    if (password.value.trim() === ''){
        let password_div = document.getElementById('password_div');
        let addi_message = password_div.querySelector('.custom_error');
        if (addi_message)
        {
            addi_message.remove();
        }
        let icon = password_div.querySelector('.error_icon');
        if (icon)
          icon.remove();
        let newError = document.createElement('div')
        newError.innerText = 'Zadejte prosím své heslo.'
        newError.classList.add('custom_error');
        icon = password_div.querySelector('.custom_icon');
        if (icon)
          icon.remove();
        let custom_icon = document.createElement('div')
        custom_icon.classList.add('custom_icon');
        let error_icon = document.createElement('div')
        error_icon.innerHTML = '!';
        error_icon.classList.add('error_icon');
        custom_icon.appendChild(error_icon);
        password_div.appendChild(custom_icon);
        password_div.appendChild(newError);
        password.classList.add('red_input');
    }
    else
    {
        let password_div = document.getElementById('password_div');
        let addi_message = password_div.querySelector('.custom_error');
        if (addi_message)
        {
            addi_message.remove();
        }
        icon = password_div.querySelector('.custom_icon');
        if (icon)
          icon.remove();
        let custom_icon = document.createElement('div')
        custom_icon.style.backgroundImage = 'url(https://customer.bmwgroup.com/oneid/img/check-default-light.341ace2a.svg)';
        custom_icon.classList.add('custom_icon');
        password_div.appendChild(custom_icon);
        password.classList.remove('red_input');
    }
    
});

email.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)){
        let email_div = document.getElementById('email_div');
        let addi_message = email_div.querySelector('.custom_error');
        if (addi_message)
        {
            addi_message.remove();
        }
        let icon = email_div.querySelector('.error_icon');
        if (icon)
          icon.remove();
        let newError = document.createElement('div')
        newError.innerText = 'Zadejte prosím platnou e-mailovou adresu.'
        newError.classList.add('custom_error');
        icon = email_div.querySelector('.custom_icon');
        if (icon)
          icon.remove();
        let custom_icon = document.createElement('div')
        custom_icon.classList.add('custom_icon');
        let error_icon = document.createElement('div')
        error_icon.innerHTML = '!';
        error_icon.classList.add('error_icon');
        custom_icon.appendChild(error_icon);
        email_div.appendChild(custom_icon);
        email_div.appendChild(newError);
        email.classList.add('red_input');
    }
    else
    {
        let email_div = document.getElementById('email_div');
        let addi_message = email_div.querySelector('.custom_error');
        if (addi_message)
        {
            addi_message.remove();
        }
        icon = email_div.querySelector('.custom_icon');
        if (icon)
          icon.remove();
        let custom_icon = document.createElement('div')
        custom_icon.style.backgroundImage = 'url(https://customer.bmwgroup.com/oneid/img/check-default-light.341ace2a.svg)';
        custom_icon.classList.add('custom_icon');
        email_div.appendChild(custom_icon);
        email.classList.remove('red_input');
    }
    
});

});