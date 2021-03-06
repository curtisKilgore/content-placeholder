const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

// Show placeholder animation for 2 seconds before card content
setTimeout(getData, 2000);

// Define data to insert
function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1657&q=80" alt="macbook"/>';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla.";
  profile_img.innerHTML =
    '    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="random person"/>';
  name.innerHTML = "John Doe";
  date.innerHTML = "Apr 9th, 2021";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
