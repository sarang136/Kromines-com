// Get the first <h1> element
const titleElement = document.querySelector("h1");

// Split text into individual characters wrapped in <span> for animation
const titleText = titleElement.innerText
  .split("")
  .map((char) =>
    char !== " " ? `<span class="char">${char}</span>` : `<span class="space">&nbsp;</span>`
  )
  .join("");

titleElement.innerHTML = titleText;

// Function to generate random positions
function randomPos(index) {
  let val = Math.random() * 1000 * (index + 1);
  val *= Math.random() < 0.5 ? -1 : 1; // Randomly decide direction
  return val;
}

// Animate characters individually
document.querySelectorAll(".char").forEach((char, index) => {
  let randomX = randomPos(index);
  let randomY = randomPos(index);

  char.style.opacity = "0";
  char.style.transform = `translate(${randomX}px, ${randomY}px) scale(5) rotate(-1080deg)`;
  char.style.transition = `transform 1s ease-out ${index * 100}ms, opacity 1s ease-out ${index * 100}ms`;

  setTimeout(() => {
    char.style.opacity = "1";
    char.style.transform = `translate(0, 0) scale(1) rotate(0deg)`;
  }, 50);
});

// Animate horizontal lines
document.querySelectorAll(".horizontal").forEach((line, index) => {
  let direction = index % 2 === 0 ? 2000 : -2000;

  line.style.transform = `translateX(${direction}px)`;
  line.style.transition = `transform 1s ease-out 1.25s`;

  setTimeout(() => {
    line.style.transform = `translateX(0)`;
  }, 1250);
});

// Animate vertical lines
document.querySelectorAll(".vertical").forEach((line, index) => {
  let direction = index % 2 === 0 ? -2000 : 2000;

  line.style.transform = `translateY(${direction}px)`;
  line.style.transition = `transform 1s ease-out 1.35s`;

  setTimeout(() => {
    line.style.transform = `translateY(0)`;
  }, 1350);
});
