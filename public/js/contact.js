const contactForm = document.querySelector("#contact-form")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const { fname, lname, message, phone, email } = contactForm;

    console.log({ fname: fname.value, lname: lname.value, message: message.value, phone: phone.value, email: email.value, })
    contactForm.reset();
})