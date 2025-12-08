

// Format card number into groups of 4 digits
function formatCardNumber(value) {
    return value
        .replace(/\D/g, "")                // remove non-digits
        .replace(/(.{4})/g, "$1 ")         // insert spaces after every 4 digits
        .trim();
}

// Show error message
function showError(element, message) {
    element.textContent = message;
    element.style.display = "block";
}

// Hide error message
function hideError(element) {
    element.style.display = "none";
}

// Validate if number is digits of specific length
function isDigits(value, length) {
    return new RegExp(`^\\d{${length}}$`).test(value);
}


const inputs = {
    name: document.getElementById("name"),
    number: document.getElementById("number"),
    month: document.getElementById("expiry-month"),
    year: document.getElementById("expiry-year"),
    cvc: document.getElementById("cvc"),
};

const cardDisplay = {
    name: document.querySelector(".cardholder-name"),
    number: document.querySelector(".number"),
    month: document.querySelector(".expiry-month"),
    year: document.querySelector(".expiry-year"),
    cvc: document.querySelector(".cvc"),
};

// Error elements
const errors = {
    name: document.querySelector(".name-error"),
    number: document.querySelector(".card-number-error"),
    month: document.querySelector(".expiry-error"),
    year: document.querySelector(".expiry-error-year"),
    cvc: document.querySelector(".cvc-error"),
};

const form = document.getElementById("form");


// Name
inputs.name.addEventListener("input", () => {
    const value = inputs.name.value.trim();
    cardDisplay.name.textContent = value || "JANE APPLESEED";
});

// 
inputs.number.addEventListener("input", () => {
    let formatted = formatCardNumber(inputs.number.value);
    inputs.number.value = formatted;

    cardDisplay.number.textContent =
        formatted || "0000 0000 0000 0000";
});

// Expiry Month
inputs.month.addEventListener("input", () => {
    const value = inputs.month.value.padStart(2, "0");
    cardDisplay.month.textContent = `${value}/`;
});

// Expiry Year
inputs.year.addEventListener("input", () => {
    const value = inputs.year.value.padStart(2, "0");
    cardDisplay.year.textContent = value;
});

// CVC
inputs.cvc.addEventListener("input", () => {
    cardDisplay.cvc.textContent = inputs.cvc.value || "000";
});


// Validation Functions


function validateName() {
    const value = inputs.name.value.trim();

    if (!value) {
        showError(errors.name, "Can't be blank");
        return false;
    }

    if (!/^[A-Za-z ]+$/.test(value)) {
        showError(errors.name, "Letters only");
        return false;
    }

    hideError(errors.name);
    return true;
}

function validateCardNumber() {
    const raw = inputs.number.value.replace(/\s/g, "");

    if (!raw) {
        showError(errors.number, "Can't be blank");
        return false;
    }

    if (!/^\d+$/.test(raw)) {
        showError(errors.number, "Numbers only");
        return false;
    }

    if (raw.length !== 16) {
        showError(errors.number, "Must be 16 digits");
        return false;
    }

    hideError(errors.number);
    return true;
}

function validateExpiryMonth() {
    const value = inputs.month.value;

    if (!isDigits(value, 2)) {
        showError(errors.month, "Invalid month");
        return false;
    }

    if (Number(value) < 1 || Number(value) > 12) {
        showError(errors.month, "Month 01–12");
        return false;
    }

    hideError(errors.month);
    return true;
}

function validateExpiryYear() {
    const currentYear = Number(String(new Date().getFullYear()).slice(2));
    const value = inputs.year.value;

    if (!isDigits(value, 2)) {
        showError(errors.year, "Invalid year");
        return false;
    }

    if (Number(value) < currentYear) {
        showError(errors.year, "Card expired");
        return false;
    }

    hideError(errors.year);
    return true;
}

function validateCVC() {
    const value = inputs.cvc.value;

    if (!isDigits(value, 3)) {
        showError(errors.cvc, "Must be 3 digits");
        return false;
    }

    hideError(errors.cvc);
    return true;
}

// Form Submit

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valid =
        validateName() &
        validateCardNumber() &
        validateExpiryMonth() &
        validateExpiryYear() &
        validateCVC();

    if (!valid) return;

        //success state logic here
});
