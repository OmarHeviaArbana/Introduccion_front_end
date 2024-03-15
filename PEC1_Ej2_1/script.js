const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(input) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
function checkAge(input, min, max) {
  if (input.value < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min}`
    );
  } else if (input.value > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max}`
    );
  } else {
    showSuccess(input);
  }
}

function checkPassword(input) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=\{\}\|\[\]\\:;'<>,./?]).{8,}$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Must contain uppercase and lowercase letters, symbols and digits.');
    }
    }

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(!checkRequired([username, email, age, password, passwordConfirm])){
        checkLength(username, 3, 15);
        checkLength(password, 8, 25);
        checkAge(age,0, 1000);
        checkEmail(email);
        checkPassword(password);
        checkPasswordsMatch(password, passwordConfirm);
    }

});