let toggle = document.getElementById("toggle"),
  toggleIcon = document.getElementById("toggle-icon"),
  span = document.querySelectorAll("span"),
  inp = document.querySelector(".text"),
  operation = document.getElementById("operation"),
  allBtn = document.getElementsByClassName("all-btn"),
  equal = document.getElementById("equal");

let bgColor = ["white", "#17062a", "#3b4664"];
let i = 0;

// Add Themes Color
toggle.addEventListener("click", () => {
  if (i < 1) {
    for (let x = 0; x < span.length; x++) {
      span[x].style.color = "black";
      document.querySelector("h4").style.color = "black";
    }
    document.body.style.backgroundColor = bgColor[i];
    toggleIcon.style.left = "17px";
    i++;
  } else if (i > 0 && i < 2) {
    for (let x = 0; x < span.length; x++) {
      span[x].style.color = "#ffe43f";
      document.querySelector("h4").style.color = "#ffe43f";
      inp.style.color = "#ffe43f";
    }

    for (let x = 0; x < allBtn.length; x++) {
      allBtn[x].classList.add("pink");
    }

    equal.style.backgroundColor = "#94fff9";
    equal.style.color = "black";

    document.body.style.backgroundColor = bgColor[i];
    toggleIcon.style.left = "30px";
    i++;
  } else {
    for (let x = 0; x < span.length; x++) {
      span[x].style.color = "white";
      document.querySelector("h4").style.color = "white";
      inp.style.color = "white";
    }
    i = 0;
    document.body.style.backgroundColor = "#3b4664";
    toggleIcon.style.left = "2px";
    equal.style.backgroundColor = "#f96c5b";
    equal.style.color = "white";

    for (let x = 0; x < allBtn.length; x++) {
      allBtn[x].classList.remove("pink");
    }
  }
});

function numbers(num) {
  inp.innerHTML += num;
}

function del() {
  inp.innerHTML = inp.innerHTML.slice(0, -1);
}

function reset() {
  inp.innerHTML = "";
}

function calc() {
  try {
    inp.innerHTML = eval(inp.innerHTML);
  } catch {
    inp.innerHTML = "Error!";
  }
}
