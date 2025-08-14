function checkEmail() {
    let email = document.querySelector("#emailField").value;
    if(!email.includes("@")) alert ("@!");
    else if(!email.includes(".")) alert (".!");
    else alert("Well done!")
}


function getRectangleString(w, h) {
  const rn = "\r\n";
  const tb = "*".repeat(w) + rn ;
  const center =(w > 1) ? ("*" + " ".repeat(w - 2) + "*" + rn).repeat(h - 2) : "" ;
  return h > 1 ? (tb + center + tb) : tb.repeat(h);
}

console.log(getRectangleString(9, 5))

const burger = document.getElementById("burger");
const nav = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});