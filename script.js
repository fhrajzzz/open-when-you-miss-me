function unlock() {
  let pass = document.getElementById("pass").value;

  if (pass === "missyou") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("menu").style.display = "block";
  } else {
    alert("wrong password 💔");
  }
}

function openLetter(type) {
  const text = document.getElementById("text");

  const messages = {
    miss: `hey you 💌<br><br>
    i miss you too... more than i say.<br>
    you're always on my mind 🌿`,

    sad: `hey… it’s okay to feel like this 💔<br><br>
    you don’t have to be strong all the time.<br>
    i’m here for you.`,

    tired: `you’ve been doing your best 😴<br><br>
    rest. breathe. slow down.<br>
    you deserve it 💚`,

    happy: `i’m so happy you’re smiling 🎉<br><br>
    you deserve this moment 💚`,

    proud: `i’m so proud of you 🌿<br><br>
    even if you don’t see it yet.`,

    alone: `you’re not alone 🌙<br><br>
    i’m always here, even quietly.`
  };

  text.innerHTML = messages[type];
  document.getElementById("letter").style.display = "block";
  document.getElementById("menu").style.display = "none";
}

function openSecret() {
  document.getElementById("text").innerHTML = `you found the hidden letter 💌<br><br>
  this one is just for you.<br>
  i care about you more than you know 💚`;
  
  document.getElementById("letter").style.display = "block";
  document.getElementById("menu").style.display = "none";
}

function closeLetter() {
  document.getElementById("letter").style.display = "none";
  document.getElementById("menu").style.display = "block";
}
