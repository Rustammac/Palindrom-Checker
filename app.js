const input = document.getElementById("input");
const result = document.querySelector(".result");

result.innerHTML = `this word is ${reverse}`;
function reverseString(str) {
  return str.split("").reverse().join("");
}
function check() {
  const value = input.value;
  const reverse = reverseString(value);
  if (value === reverse) {
    result.textContent = "P A L I N D R O M E";
  } else {
    result.textContent = "N O T  P A L I N D R O M E";
  }
}
