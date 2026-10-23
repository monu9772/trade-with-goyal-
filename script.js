const notices = [
  {
    title: "Trade With Goyal",
    text: "Welcome to our Telegram community!"
  },
  {
    title: "Market Updates",
    text: "Educational market content available."
  },
  {
    title: "Free Telegram Channel",
    text: "Tap JOIN to visit our channel."
  },
  {
    title: "Trading Education",
    text: "Learn about research and risk management."
  }
];

const notice = document.getElementById("notice");
const noticeTitle = document.getElementById("notice-title");
const noticeText = document.getElementById("notice-text");

let index = 0;

function showNotice() {
  noticeTitle.textContent = notices[index].title;
  noticeText.textContent = notices[index].text;

  notice.classList.add("show");

  index = (index + 1) % notices.length;

  setTimeout(() => {
    notice.classList.remove("show");
  }, 4000);
}

setTimeout(() => {
  showNotice();
  setInterval(showNotice, 6000);
}, 1500);
