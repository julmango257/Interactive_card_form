const form = document.getElementById ("form");
const formName = document.getElementById("name");
const number = document.getElementById("number");
const expiryMonth = document.getElementById("expiry-month");
const expiryYear = document.getElementById ("expiry-year");
const cvc = document.getElementById("cvc");

const confirm = document.getElementById("confirm");

const nameError = document.querySelector(".name-error");
const numberError = document.querySelector (".card-number-error");
const expiryError = document.querySelector(".expiry-error");
const expiryErrorYear = document.querySelector(".expiry-error-year");
const cvcError = document.querySelector(".cvc-error");

function validateName(){
    if (formName.value === ""){
        nameError.style.display="block"
        console.log("name error")
        return false;
    }
    return true;
};

function validateNumber(){
    if (number.value.length <12 || number.value.length >12){
        numberError.style.display = "block"
        return false;
    }
    return true;
};

function validateMonth(){
    if (expiryMonth.value >12){
        expiryError.style.display = "block"
        return false;
    }
    return true
};

function validateYear(){
    if (expiryYear.value <2025){
        expiryErrorYear.style.display = "block"
        return false;
    }
    return true
};

function validateCVC(){
    if(cvc.value.length >3){
        cvcError.style.display = "block"
        return false;
    }
    return true
};

validateName();
validateNumber();
validateMonth();
validateYear();
validateCVC();

// form.addEventListener("submit", validateName)

// confirm.addEventListener("click",(event) =>{
//     if (!validateName() ||!validateNumber() ||!validateMonth() ||!validateYear() || !validateCVC()){
//         event.preventDefault();
//     }
// });