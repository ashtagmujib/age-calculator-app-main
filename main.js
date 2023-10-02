const form = document.querySelector('.form');
const inputControl = document.querySelector('.inputcontrol');
const submitBtn = document.querySelector('#button');

// input 
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

// output
const yearOutput = document.querySelector('#year__output');
const monthOutput = document.querySelector('#month__output');
const dayOutput = document.querySelector('#day__output');




// input validations


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
})



const setError = (element, message) => {
    const userData = element.parentElement;
    const errorDisplay = userData.querySelector('.error-msg');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}


const setSuccess = element => {
    const userData = element.parentElement;
    const errorDisplay = userData.querySelector('.error-msg');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');

}


const validateInput = () => {
    const dayValue = dayInput.value;
    const monthValue = monthInput.value;
    const yearValue = yearInput.value;

    if(dayValue === '') {
        setError (dayInput, 'This field is required');
        isTrue = false;
    }
    
    else {
        setSuccess (dayInput);
        isTrue = true;
    }


    if(monthValue === '') {
        setError (monthInput, 'This field is required');
        isTrue = false;
    } else {
        setSuccess (monthInput);
        isTrue = true;
    }



    if(yearValue === '') {
        setError (yearInput, 'This field is required');
        isTrue = false;
    } else {
        setSuccess (yearInput);
        isTrue = true;
    }

}