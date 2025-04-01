console.log("app.js is loaded");

if (window.location.hostname !== "localhost") {
  const todos = document.querySelectorAll(".todo");
  todos.forEach((element) => (element.style.display = "none"));
}
