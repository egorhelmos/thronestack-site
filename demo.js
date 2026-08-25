const runButton = document.querySelector("#run-demo");
const output = document.querySelector("#demo-output");
const activity = document.querySelector("#activity-log");
const request = document.querySelector("#demo-request");

function addEvent(label, message) {
  const item = document.createElement("li");
  const eventLabel = document.createElement("span");
  const eventMessage = document.createElement("strong");
  eventLabel.textContent = label;
  eventMessage.textContent = message;
  item.append(eventLabel, eventMessage);
  activity.append(item);
}

runButton?.addEventListener("click", () => {
  if (!request.value.trim()) return;
  output.hidden = false;
  activity.replaceChildren();
  addEvent("Received", "Local request created");
  addEvent("Routed", "Communication specialist selected");
  addEvent("Drafted", "External action remains blocked");
  addEvent("Paused", "Waiting for human decision");
  runButton.disabled = true;
});

document.querySelectorAll("[data-decision]").forEach((button) => {
  button.addEventListener("click", () => {
    const decision = button.dataset.decision;
    addEvent("Decision", decision === "approved" ? "Draft approved—not sent" : "Draft rejected");
    document.querySelector("#decision-panel").innerHTML = `<p><strong>${decision === "approved" ? "Approved" : "Rejected"}.</strong> The decision was recorded. No message was sent.</p>`;
  });
});
