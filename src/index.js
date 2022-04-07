// console.log("Hello");
const heading = document.createElement("h2");
heading.innerText = "Create a new note";

const input = document.createElement("textarea");

input.rows = 20;
input.cols = 50;

const button = document.createElement("button");

button.textContent = "Show note";

button.style.display = "block";

const p = document.createElement("p");

p.innerText = "Just chill and code";

// Show note as a paragraph on DOM;

const showNote = () => {
  //   console.log("clicked");
  const finalNote = document.createElement("p");
  const inputText = input.value;
  finalNote.innerText = inputText;

  document.getElementById("root").append(finalNote);
};

button.addEventListener("click", showNote);
// document.getElementById("root").appendChild(heading);
// document.getElementById("root").appendChild(input);
// document.getElementById("root").appendChild(button);

document.getElementById("root").append(heading, input, button);
