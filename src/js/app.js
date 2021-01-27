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
});
