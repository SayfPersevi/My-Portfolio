function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--succes");
  loading.classList += " modal__overlay--visible";
  emailjs
  .sendForm(
      "service_xa0g75s",
      "template_f08nkdd",
      event.target,
      "ZAXb9Squ0SSUA1gbp"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temorarily unavailable. Please contact me directly on Sayf.Persevi@outlook.com"
      );
    });
}
