function ShowPassword() {
    var pass = document.getElementById("PInput");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
  const getType = (value) => {
    const type = Object.prototype.toString.call(value).slice(1, -1).split(" ");

    return type && type[1].toLowerCase();
};

const validations = {
    isEmpty: ({ value }) => {
        const valueIsType = getType(value);

        if (valueIsType === "string") return !value.trim().length;
        if (valueIsType === "array") return !value.length;
        if (valueIsType === "object") return !Object.keys(value).length;
        if (valueIsType === "number") return Number.isNaN(value);
        if (valueIsType === "boolean") return false;

        return true;
    },
    email: ({ value }) => {
        const isEmpty = validations.isEmpty({ value });
        const returnValue = {
            isValid: false,
            message: null,
        };

        if (isEmpty === true) {
            returnValue.message = "Email is required";
            return returnValue;
        }

        const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = pattern.test(String(value).toLowerCase());

        if (isValid === false) {
            returnValue.message = "Provide a valid email address";
        }
        returnValue.isValid = isValid;

        return returnValue;
    },
    username: ({ value }) => {
        const isEmpty = validations.isEmpty({ value });
        const returnValue = {
            isValid: !isEmpty,
            message: null,
        };

        if (isEmpty === true) {
            returnValue.message = "Username is required";
        }
        return returnValue;
    },
    password: ({ value }) => {
        const isEmpty = validations.isEmpty({ value });
        const returnValue = {
            isValid: false,
            message: null,
        };

        if (isEmpty === true) {
            returnValue.message = "Password is required";
            return returnValue;
        }

        if (value.length < 8) {
            returnValue.message = "Password must be at least 8 character.";
            return returnValue;
        }

        returnValue.isValid = true;
        return returnValue;
    },
    passwordConfirm: ({ value, valueToMatch }) => {
        const isEmpty = validations.isEmpty({ value });
        const valueToMatchIsEmpty = validations.isEmpty(valueToMatch);
        const returnValue = {
            isValid: false,
            message: null,
        };

        if (valueToMatchIsEmpty === true) {
            return returnValue;
        }

        if (isEmpty === true) {
            returnValue.message = "Please confirm your password";
            return returnValue;
        }

        if (value !== valueToMatch) {
            returnValue.message = "Passwords doesn't match";
            return returnValue;
        }

        returnValue.isValid = true;
        return returnValue;
    },
};

const setInputControlClassName = ({ element, isValid = true, message = null }) => {
    const inputControl = element.parentElement || {};
    inputControl.classList.toggle("error", !isValid);
    inputControl.classList.toggle("succes", isValid);

    const errorDisplay = inputControl.querySelector(".error") || {};
    errorDisplay.innerText = message || "";
};

const onSubmitForm = (event) => {
    event.preventDefault();

    const formObject = event.currentTarget;
    const formElements = formObject.elements;

    Array.prototype.slice.call(formElements).forEach((element) => {
        const { type, required, dataset } = element;

        if (["submit", "reset", "button"].includes(type) || !required) return;

        const validationType = dataset.validation;
        const value = element.value?.trim();
        const valueToMatch = validationType === "passwordConfirm" ? formElements.password?.value?.trim() : null;
        const { isValid, message } = validations[validationType]({ value, valueToMatch });

        setInputControlClassName({ element, isValid, message });
    });
};

const formElement = document.querySelector("#form");
formElement.addEventListener("submit", onSubmitForm);
