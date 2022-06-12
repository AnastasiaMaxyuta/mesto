const validationsettings = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error"
}

const showError = (errorElement, inputElement, settings) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(settings.inputErrorClass);
}

const removeError = (errorElement, inputElement, settings) => {
  errorElement.textContent = "";
  inputElement.classList.remove(settings.inputErrorClass);
}

const checkInputValidity = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  const isInputNotValid = !inputElement.validity.valid;
  if (isInputNotValid) {
    showError(errorElement, inputElement, settings);
  } else {
    removeError(errorElement, inputElement, settings);
  }
}

const toggleButtonState = (button, isActive, settings) => {
  if (isActive) {
    button.classList.remove(settings.inactiveButtonClass);
    button.disabled = false
  } else {
    button.classList.add(settings.inactiveButtonClass);
    button.disabled = "disabled";
  }
}

const setEventListers = (formElement, settings) => {
  const inputList = formElement.querySelectorAll(settings.inputSelector);
  const formButton = formElement.querySelector(settings.submitButtonSelector);
  const isFormValid = formElement.checkValidity();
  toggleButtonState(formButton, isFormValid, settings);

  Array.from(inputList).forEach(inputElement => {
    inputElement.addEventListener("input", () => {
      const isFormValid = formElement.checkValidity();
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(formButton, isFormValid, settings);
    })
  })
}

const enableValidation = (settings) => {
  const forms = document.querySelectorAll(settings.formSelector);
  Array.from(forms).forEach(formElement => {
    setEventListers(formElement, settings)
  })
}

enableValidation(validationsettings);