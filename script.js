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

const cardName = document.querySelector(".cardholder-name");
const cardNumberDisplay = document.querySelector(".number");
const cardExpMonth = document.querySelector(".expiry-month");
const cardExpYear = document.querySelector(".expiry-year");
const cardCvc = document.querySelector(".cvc");

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

form.addEventListener("submit", (event) =>{
    nameError.style.display="none";
    numberError.style.display="none";
    expiryError.style.display="none";
    expiryErrorYear.style.display="none";
    cvcError.style.display="none";

    const isValidName = validateName() && validateNumber() && validateMonth() && validateYear() && validateCVC();

    if (!isValid) {
        event.preventDefault();
    }

});

// confirm.addEventListener("click",(event) =>{
//     if (!validateName() ||!validateNumber() ||!validateMonth() ||!validateYear() || !validateCVC()){
//         event.preventDefault();
//     }
// });

// Updating card details in real time.

// Name
formName.addEventListener("input", () => {
    cardName.textContent = formName.value || "JANE APPLESEED";
});
// Card number 
number.addEventListener("input", () => {
    cardNumberDisplay.textContent = number.value || "0000 0000 0000 0000";
});
// Expiry M
expiryMonth.addEventListener("input", () => {
    cardExpMonth.textContent = expiryMonth.value || "00" + "/";
});
// Expiry Y
expiryYear.addEventListener("input", () => {
    cardExpYear.textContent = expiryYear.value || "/" + "00";
});
// CVC
cvc.addEventListener("input", ()=> {
    cardCvc.textContent = cvc.value || "000";
});