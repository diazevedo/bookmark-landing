const checkRadio = (event) => {
  const selectedTabValue = event.target.value;

  const isTheSameTab = document.querySelector(
    `.intro.${selectedTabValue}.-active`
  );

  if (isTheSameTab) return;

  const previousTab = document.querySelector(`.intro.-active`);
  previousTab.classList.remove("-active");

  const nextTab = document.querySelector(`.intro.${selectedTabValue}`);
  nextTab.classList.add("-active");
};

document.addEventListener("DOMContentLoaded", () => {
  const $radios = document.querySelectorAll(".feature-control");

  $radios.forEach((element) => {
    element.addEventListener("click", checkRadio);
  });

  const $form = document.getElementById("contact-form");
  const $emailInput = document.getElementById("email");
  const $divWrapper = document.getElementById("input-email-wrapper");

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValidEmail = $emailInput.value.match(mailformat);

    if (!isValidEmail) {
      $divWrapper.classList.add("-show-error");
    } else {
      $divWrapper.classList.remove("-show-error");
    }
  });
});
