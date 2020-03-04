// Form Blur Event Listeners
// Blur event is called when you unfocus from an element
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  // Can be any letter from A to Z
  // 2 - 10 letters
  // starts and ends with, as we want it to be only this content
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  // Any number from 0 to 9 for 5 numbers
  // - 4 more numbers
  // starts and ends with
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)){
    // Boostrap class
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  // Starts and ends with this expression
  // Can be any letter a-z of any case and/or 0-9, then an @
  // + in both specifies that it can occur however many times you want
  // After the @, can be any letter of any case and/or any number and 
  // then the .
  // After the ., it can be any letter of any case for 2-5 letters long
  // As for the unexplained symbols, the backslashes are escape characters,
  // and the symbols specify it can be an _, a -, or a .
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  // starts and ends with
  // 3 numbers within optional parentheses
  // optional -, ., or space
  // 3 numbers followed by an optional -, ., or space
  // 4 numbers
  // ? makes whatever is before it optional
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}