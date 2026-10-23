document.addEventListener("DOMContentLoaded", function () {
  const telegramButton = document.querySelector(".join");

  if (telegramButton) {
    telegramButton.addEventListener("click", function () {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead");
        window.fbq("trackCustom", "TelegramJoinClick");
      }
    });
  }
});
