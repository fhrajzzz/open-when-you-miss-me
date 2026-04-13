function unlock() {
  const pass = document.getElementById("pass").value;

  if (pass === "missyou") {
    document.querySelector(".card").style.display = "none";
    document.getElementById("letter").style.display = "block";
  } else {
    alert("wrong password 💔 try again");
  }
}

function closeLetter() {
  document.getElementById("letter").style.display = "none";
  document.querySelector(".card").style.display = "inline-block";
}
