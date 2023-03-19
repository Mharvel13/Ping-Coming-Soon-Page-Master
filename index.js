// DOM ELEMENTS
const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error");

// Key Down Evemt
email.onkeydown = () => {
    validateEmailData(email);
};

// Form submitting events
form.onsubmit = (e) => {
    e.preventDefault();
    validateData(email);
    validationComplete(email);
};

// Data validation
function validateData(inputFieldName) {
    switch (inputFieldName) {
        case email:
            validateEmailData(inputFieldName);

            inputFieldName.onfocus = () => {
                validateEmailData(inputFieldName);
            };
            break;
    }
}

// Email validation
function validateEmailData(inputFieldName) {
    if (!inputFieldName.value) {
        errorFunction(inputFieldName);
    } else {
        successFunction(inputFieldName);
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!inputFieldName.value.match(emailPattern)) {
        errorFunction(inputFieldName);
    }
}

// Complete Validation

function validationComplete(inputFieldName) {
    if (!inputFieldName.classList.contains("error")) {
        window.location.href = "#";
        inputFieldName.value = "";
        inputFieldName.style.borderColor = "hsl(0, 0%, 59%)";
    }
}

// Error and Success Functions

function errorFunction(inputFieldName) {
    inputFieldName.style.borderColor = "red";
    errorMsg.innerHTML = "Please provide a Valid Email Address";
    inputFieldName.placeholder = "example@email./com";
}

function successFunction(inputFieldName) {
    inputFieldName.style.borderColor = "green";
    errorMsg.innerHTML = "";
    inputFieldName.placeholder = "Your Email Address Here";
}
