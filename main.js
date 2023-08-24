
// Code for the "About Me" section: Expands a list with description using a button
const skillsButton = document.getElementById("skills-button");
const skillsDots = document.getElementById("skills-dots");
const skillsMoreText = document.getElementById("skills-more");

skillsButton.addEventListener('click', () => {
  const isDotsHidden = skillsDots.style.display === "none";
  
  skillsDots.style.display = isDotsHidden ? "inline" : "none";
  skillsButton.innerHTML = isDotsHidden ? "Read more" : "Read less";
  skillsMoreText.style.display = isDotsHidden ? "none" : "inline";
});