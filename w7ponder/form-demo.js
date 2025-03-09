function validateForm(event) {
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const theForm = event.target;
    // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
    // To keep it from happening we can can call e.preventDefault()
    // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
    const errors = [];
    // start by assuming the form is valid.
    let isValid = true;
    // add our validations here
  
    // if we ran into any problems above valid will be false.
    if (!isValid) {
      //stop the form from being submitted
      event.preventDefault();
      // show the errors
      showErrors(errors);
      // return false to let the browser know the form was not submitted.
      return false;
    }
  }
  
  function togglePaymentDetails(e) {
    console.log("togglePaymentDetails");
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.getElementById("checkoutForm");
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCard = document.getElementById("creditCard");
    const creditCardContainer = document.getElementById("creditCardNumber");
    const payPal = document.getElementById("PayPal");
    const paypalContainer = document.getElementById("payPalUser");
  
    // Hide payment containers by adding the '.hide' class to each of them
    creditCard.classList.add("hide");
    payPal.classList.add("hide");
    
    // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!
    creditCardContainer.removeAttribute("required")
    paypalContainer.removeAttribute("required")
  
    // Show the container based on the selected payment method, and add the required attribute back.
    if (theForm.paymentMethod.value === "credit") {
      creditCard.classList.remove("hide");
      creditCardContainer.setAttribute("required", "required");
    } else if (theForm.paymentMethod.value === "paypal") {
      payPal.classList.remove("hide");
      paypalContainer.setAttribute("required", "required");
    }
  }
  
  document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);

  // helper function to display our errors.
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }