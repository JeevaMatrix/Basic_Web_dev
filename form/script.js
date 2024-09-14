const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener('submit', (e) => {
    const isValid = validateForm();
    if (!isValid) {
        e.preventDefault();
    }
});

function validateForm() {
    let isValid = true;
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal === '') {
        isValid = false;
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        isValid = false;
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        isValid = false;
        setError(email, 'Enter a valid Email address');
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        isValid = false;
        setError(password, 'Password cannot be empty');
    } else if (passwordVal.length < 8) {
        isValid = false;
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (cpasswordVal !== passwordVal) {
        isValid = false;
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }

    return isValid;
}

function setError(element, msg) {
    const parent = element.parentElement;
    const error = parent.querySelector(".error");
    error.innerText = msg;

    parent.classList.add("error");
    parent.classList.remove("success");
}

function setSuccess(element) {
    const parent = element.parentElement;
    parent.classList.remove("error");
    parent.classList.add("success");

}

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
}
