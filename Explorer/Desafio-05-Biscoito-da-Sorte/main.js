const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const fortuneCookie = document.querySelector("#fortune-cookie");
const btnReset = document.querySelector("#btnReset");

function toggleHideScreens() {
  const screens = [screen1, screen2];
  screens.forEach((screen) => {
    let isHide = screen.classList.contains("hide");
    if (!isHide) {
      screen.classList.add("hide");
    } else {
      screen.classList.remove("hide");
    }
  });
}

fortuneCookie.addEventListener("click", toggleHideScreens);
btnReset.addEventListener("click", toggleHideScreens);
