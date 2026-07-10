const message = `PAG-AARAL NG KASAYSAYAN AT LIPUNAN NG PILIPINAS: \n\ Pakikilahok Taan, Ma. Angela P.    11 - Cayley`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.getElementById("h3").style.opacity = 0;
  document.getElementById("stamp").style.opacity = 100;
  document.getElementById("chips").style.opacity = 100;
  document.getElementById("stamp3").style.opacity = 100;
  document.getElementById("stamp2").style.opacity = 100;
  document.getElementById("stamp1").style.opacity = 100;
  document.querySelector(".btn").style.display = "none";
  document.querySelector(".movingBtn").style.display = "none";
  alert("HALA! Mukhang nalimot ko po ulit idikit ang aking mga chips. Maaari niyo po ba akong tulungan? Salamat po.")
  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

const button = document.getElementById("movingBtn");

button.addEventListener("mousemove", (e) => {
    const x = button.offsetLeft;
    const y = button.offsetTop;

    if (e.offsetX < button.offsetWidth / 2) {
        button.style.left = (x + 80) + "px";
    } else {
        button.style.left = (x - 80) + "px";
    }

    if (e.offsetY < button.offsetHeight / 2) {
        button.style.top = (y + 80) + "px";
    } else {
        button.style.top = (y - 80) + "px";
    }
});

const stamp = document.getElementById("stamp");
const letter = document.getElementById("letterBox");
let dragging = false;
let offsetX = 0;
let offsetY = 0;

stamp.addEventListener("mousedown", (e) => {
    dragging = true;

    const rect = stamp.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    stamp.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    let letterRect;

    if (letter.style.display == "") {
        letterRect = {left: 0, top: 0, right: screen.width, bottom: screen.height};
    } else {
        letterRect = letter.getBoundingClientRect();
    }

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Keep stamp inside the letter
    x = Math.max(letterRect.left, Math.min(x, letterRect.right - stamp.offsetWidth));
    y = Math.max(letterRect.top, Math.min(y, letterRect.bottom - stamp.offsetHeight));

    stamp.style.left = x + "px";
    stamp.style.top = y + "px";
});
document.addEventListener("mouseup", () => {
    dragging = false;
    stamp.style.cursor = "grab";
});

{
const chips = document.getElementById("chips");
const letter = document.getElementById("letterBox");
let dragging = false;
let offsetX = 0;
let offsetY = 0;

chips.addEventListener("mousedown", (e) => {
    dragging = true;

    const rect = chips.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    chips.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    let letterRect;

    if (letter.style.display == "") {
        letterRect = {left: 0, top: 0, right: screen.width, bottom: screen.height};
    } else {
        letterRect = letter.getBoundingClientRect();
    }

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Keep chips inside the letter
    x = Math.max(letterRect.left, Math.min(x, letterRect.right - chips.offsetWidth));
    y = Math.max(letterRect.top, Math.min(y, letterRect.bottom - chips.offsetHeight));

    chips.style.left = x + "px";
    chips.style.top = y + "px";
});
document.addEventListener("mouseup", () => {
    dragging = false;
    chips.style.cursor = "grab";
});
}

{{
const stamp3 = document.getElementById("stamp3");
const letter = document.getElementById("letterBox");
let dragging = false;
let offsetX = 0;
let offsetY = 0;

stamp3.addEventListener("mousedown", (e) => {
    dragging = true;

    const rect = stamp3.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    stamp3.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    let letterRect;

    if (letter.style.display == "") {
        letterRect = {left: 0, top: 0, right: screen.width, bottom: screen.height};
    } else {
        letterRect = letter.getBoundingClientRect();
    }

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Keep stamp3 inside the letter
    x = Math.max(letterRect.left, Math.min(x, letterRect.right - stamp3.offsetWidth));
    y = Math.max(letterRect.top, Math.min(y, letterRect.bottom - stamp3.offsetHeight));

    stamp3.style.left = x + "px";
    stamp3.style.top = y + "px";
});
document.addEventListener("mouseup", () => {
    dragging = false;
    stamp3.style.cursor = "grab";
});
}}

{{{
const stamp2 = document.getElementById("stamp2");
const letter = document.getElementById("letterBox");
let dragging = false;
let offsetX = 0;
let offsetY = 0;

stamp2.addEventListener("mousedown", (e) => {
    dragging = true;

    const rect = stamp2.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    stamp2.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    let letterRect;

    if (letter.style.display == "") {
        letterRect = {left: 0, top: 0, right: screen.width, bottom: screen.height};
    } else {
        letterRect = letter.getBoundingClientRect();
    }

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Keep stamp2 inside the letter
    x = Math.max(letterRect.left, Math.min(x, letterRect.right - stamp2.offsetWidth));
    y = Math.max(letterRect.top, Math.min(y, letterRect.bottom - stamp2.offsetHeight));

    stamp2.style.left = x + "px";
    stamp2.style.top = y + "px";
});
document.addEventListener("mouseup", () => {
    dragging = false;
    stamp2.style.cursor = "grab";
});
}}}

{{{
const stamp1 = document.getElementById("stamp1");
const letter = document.getElementById("letterBox");
let dragging = false;
let offsetX = 0;
let offsetY = 0;

stamp1.addEventListener("mousedown", (e) => {
    dragging = true;

    const rect = stamp1.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    stamp1.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    let letterRect;

    if (letter.style.display == "") {
        letterRect = {left: 0, top: 0, right: screen.width, bottom: screen.height};
    } else {
        letterRect = letter.getBoundingClientRect();
    }

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Keep stamp1 inside the letter
    x = Math.max(letterRect.left, Math.min(x, letterRect.right - stamp1.offsetWidth));
    y = Math.max(letterRect.top, Math.min(y, letterRect.bottom - stamp1.offsetHeight));

    stamp1.style.left = x + "px";
    stamp1.style.top = y + "px";
});
document.addEventListener("mouseup", () => {
    dragging = false;
    stamp1.style.cursor = "grab";
});
}}}