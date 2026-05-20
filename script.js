const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (event) => {
  if (window.location.protocol !== "file:") {
    return;
  }

  event.preventDefault();
  const button = form.querySelector("button");
  const originalText = button.textContent;

  form.classList.add("is-submitted");
  button.textContent = "Request ready";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    form.classList.remove("is-submitted");
    form.reset();
  }, 2200);
});
