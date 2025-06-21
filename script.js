// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", theme);
});

// Voice Button
function readQuote() {
  const text = document.getElementById("quote").innerText;
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}

// Comments (localStorage)
const commentsKey = location.pathname + "_comments";
const input = document.getElementById("commentInput");
const list = document.getElementById("commentsList");

function loadComments() {
  const saved = JSON.parse(localStorage.getItem(commentsKey)) || [];
  list.innerHTML = "";
  saved.forEach(text => {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerText = text;
    list.appendChild(div);
  });
}

function postComment() {
  const text = input.value.trim();
  if (text) {
    const saved = JSON.parse(localStorage.getItem(commentsKey)) || [];
    saved.push(text);
    localStorage.setItem(commentsKey, JSON.stringify(saved));
    loadComments();
    input.value = "";
  }
}

loadComments();
