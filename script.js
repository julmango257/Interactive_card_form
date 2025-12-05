const form = document.getElementById ("form");
const name = document.getElementById("name");
const number = document.getElementById("number");
const expiryMonth = document.getElementById("expiry-month");
const expiryYear = document.getElementById ("expiry-year");
const cvc = document.getElementById("cvc");
const confirm = document.getElementById("confirm");


form.addEventListener("submit", e =>{
    e.preventDefault();
    validateInputs;
});

const validateInputs = () => {
    const nameValue = name.value.trim();
}


