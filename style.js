// function getFormValue() {
//     const nameInput = document.getElementById("full-name");
//     const nameValue = nameInput.Value;
//     const errorText = document.getElementById("error-text");
//     if(nameValue) {
//         console.log(nameValue);
//         errorText.innerHTML = "";
//         nameInput.Value = "";
//     } else {
//         errorText.innerHTML = '<p class="text-warning">Please write your neme</p>';
//     }
// }

// // addEventListener
// const submitButton = document.getElementById("submit-button");
// console.log(submitButton);
// submitButton.addEventListener("click",getFormValue);

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(e) {
        e.preventDefault();
        const nameInput = document.getElementById("full-name");
        const emailInput = document.getElementById("email-address");
        const addressInput = document.getElementById("full-address");
        
        const nameValue = nameInput.value;
        const emailValue = emailInput.value;
        const addressValue = addressInput.value;
        
        const errorText = document.getElementById("error-text");
        const formData = document.getElementById("form-data");
        
        if(nameValue && emailValue && addressValue) {
            formData.innerHTML = `<p>Form submitted by: ${nameValue}, 
            Email Address: ${emailValue},
            Address: ${addressValue} </p>`;
            errorText.innerHTML = "";
            console.log(nameValue, emailValue, addressValue);
            nameInput.value = "";
            emailInput.value = "";
            addressInput.value = "";
        } else {
             errorText.innerHTML = '<p class="text-warning">Please fill the form</p>';
             formData.innerHTML = "";
        }
    }); 