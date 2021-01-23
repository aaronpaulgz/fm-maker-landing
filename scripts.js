let $mobInput = document.getElementById("mob-input");
let $mobBtn = document.getElementById("mob-button");
let $mobWarn = document.getElementById("mob-warn");

const validateMob = () => {
  let $mobInput = document.getElementById("mob-input");
  if ($mobInput.value <= 6) {
    $mobWarn.style.visibility = "visible";
    $mobBtn.style.margin = "8px 0 0 0";
    $mobInput.style.border = "solid 2px var(--red)";
  } else {
  }
};
