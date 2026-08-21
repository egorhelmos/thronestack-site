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
    button.textContent = "Join the founding waitlist";
    button.href = "#waitlist";
  }
});

const roadmapLinks = document.querySelectorAll("[data-roadmap-action]");
roadmapLinks.forEach((link) => {
  if (config.roadmapUrl) {
    link.href = config.roadmapUrl;
  } else {
    link.href = "#waitlist";
  }
});

const form = document.querySelector("[data-waitlist-form]");
const formStatus = document.querySelector("[data-form-status]");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!config.waitlistEndpoint) {
      formStatus.textContent =
        "The secure waitlist connection is being finished. Please check back shortly.";
      return;
    }

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Joining…";
    formStatus.textContent = "";

    try {
      const response = await fetch(config.waitlistEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });

      if (!response.ok) throw new Error("Waitlist request failed");

      form.reset();
      formStatus.textContent = "You’re on the founding list.";
    } catch {
      formStatus.textContent =
        "The signup did not go through. Please try again in a moment.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Join the waitlist";
    }
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

