document.addEventListener("DOMContentLoaded", () => {
  const status = document.querySelector("[data-status]");
  const buttons = document.querySelectorAll("[data-message]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (status) {
        status.textContent = button.dataset.message || "Action completed.";
      }
    });
  });
});
