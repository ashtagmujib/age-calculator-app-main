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


    if(isValid) {

        // get current date
        let currentDate = new Date();
        let currentDay = currentDate.getDay();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();


        // current age 
        let yearOld = currentYear -  yearInput.value;
        let monthOld = currentMonth - monthInput.value;
        let dayOld = currentDay - dayInput.value;
        
    
        //output
        yearOutput.innerText = yearOld;
        monthOutput.innerText = monthOld;
        dayOutput.innerText = dayOld;

    } 
    

})



const setError = (element, message) => {
    const userData = element.parentElement;
    const errorDisplay = userData.querySelector('.error-msg');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}


const setSuccess = element => {
    const userData = element.parentElement;
    const errorDisplay = userData.querySelector('.error-msg');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
}



const validateInput = () => {
    const dayValue = dayInput.value;

    const monthValue = monthInput.value;
    const yearValue = yearInput.value;

    // day

    if(dayValue === '') {
        setError (dayInput, 'This field is required');
        isValid = false;
    } 
    
    else if (dayValue > 31) {
        setError(dayInput, 'invalid date');
        isValid = false;
    }

    else {
        setSuccess(dayInput);
        isValid = true;
    }



    // month
    if(monthValue === '') {
        setError (monthInput, 'This field is required');
        isValid = false;
    } 
    
    else if (monthValue > 12) {
        setError(monthInput, 'invalid date');
        isValid = false;
    }

    else {
        setSuccess(monthInput);
        isValid = true;
    }



    // year
    
    if(yearValue === '') {
        setError (yearInput, 'This field is required');
        isValid = false;
    } 
    
    else if (yearValue > 2023) {
        setError(yearInput, 'invalid date');
        isValid = false;
    }

    else {
        setSuccess(yearInput);
        isValid = true;
    }

}




