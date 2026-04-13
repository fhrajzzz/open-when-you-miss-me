body {
  margin: 0;
  font-family: 'Patrick Hand', cursive;
  background: #e8efe6;
  overflow-x: hidden;
}

/* soft background */
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #f4f8f2, #dbe7d7);
  animation: glow 6s infinite;
}

@keyframes glow {
  50% { filter: brightness(1.08); }
}

/* layout */
.container {
  position: relative;
  text-align: center;
  padding: 20px;
  margin-top: 15vh;
}

.title {
  color: #3b4b3b;
}

/* card */
.card {
  background: #f4f8f2;
  display: inline-block;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

input {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #bbb;
  font-family: inherit;
}

button {
  margin-top: 10px;
  padding: 10px 14px;
  border: none;
  border-radius: 12px;
  background: #5f7a5f;
  color: white;
  cursor: pointer;
  font-family: inherit;
}

/* menu */
.menu {
  display: none;
  margin-top: 20px;
}

.menu button {
  display: block;
  margin: 8px auto;
  width: 200px;
}

/* secret */
.secret {
  opacity: 0.3;
}

/* letter */
.letter {
  display: none;
  margin: 20px auto;
  background: #f4f8f2;
  padding: 25px;
  border-radius: 20px;
  width: 90%;
  max-width: 350px;
  min-height: 200px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  font-size: 18px;
  line-height: 1.6;
  animation: fade 0.5s ease;
}

@keyframes fade {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* hearts */
.hearts span {
  position: absolute;
  bottom: -50px;
  font-size: 20px;
  animation: float 7s infinite linear;
}

.hearts span:nth-child(1){ left: 10%; }
.hearts span:nth-child(2){ left: 30%; animation-delay: 2s; }
.hearts span:nth-child(3){ left: 50%; animation-delay: 1s; }
.hearts span:nth-child(4){ left: 70%; animation-delay: 3s; }
.hearts span:nth-child(5){ left: 90%; animation-delay: 4s; }

@keyframes float {
  0% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-900px); opacity: 0; }
}
