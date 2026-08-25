const config = window.THRONESTACK_CONFIG || {};

document.querySelectorAll("[data-launch-date]").forEach((element) => {
  element.textContent = config.launchDate || "August 28, 2026";
});

const primaryButtons = document.querySelectorAll("[data-primary-action]");
primaryButtons.forEach((button) => {
  if (config.salesOpen && config.checkoutUrl) {
    button.textContent = "Get the founding edition — $19";
    button.href = config.checkoutUrl;
  } else {
    button.textContent = "Try the product demo";
    button.href = "demo.html";
  }
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
