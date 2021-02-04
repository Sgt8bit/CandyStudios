var storedMail = document.cookie;
var inputMail = document.getElementById("gmail");

var storedPassword;
var inputPassword = document.getElementById("pass");
document.getElementById("submitbutton").onclick = function()
{
  savAcc();
}

document.getElementById("loginbutton").onclick = function()
{
  readAcc();
}

function savAcc()
{
  storedMail = inputMail.value;
  console.log(storedMail);
  storedPassword = inputPassword.value;
  console.log(storedPassword);
  localStorage.setItem("gm", storedMail);
  localStorage.setItem("pass", storedPassword);
}

function readAcc()
{
  var securedmail = localStorage.getItem("gm");
  var securedPass = localStorage.getItem("pass");

  console.log(securedmail);
  console.log(securedPass);
}

document.getElementById("btn1").onclick = function()
{
  gamedevyt();
}
function gamedevyt()
{
  window.location.assign("https://www.youtube.com/channel/UCAi_A5jkHBxg0II2CStiLZA");
}
document.getElementById("btn2").onclick = function()
{
  mohyt();
}
function mohyt()
{
  window.location.assign("https://www.youtube.com/channel/UCS7trAOGChIVnD0gcAzfyHw");
}
document.getElementById("btn3").onclick = function()
{
  meyt();
}
function meyt()
{
  window.location.assign("https://www.youtube.com/channel/UC2j8aEs5mZRWvGDzq2eiFxw");
}
