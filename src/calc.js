if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => console.log("registered service worker!"));
}

// --------------

var btn1 = document.getElementById("n1");
var btn2 = document.getElementById("n2");
var btn3 = document.getElementById("n3");
var btn4 = document.getElementById("n4");
var btn5 = document.getElementById("n5");
var btn6 = document.getElementById("n6");
var btn7 = document.getElementById("n7");
var btn8 = document.getElementById("n8");
var btn9 = document.getElementById("n9");
var btn0 = document.getElementById("n0");
var btnPi = document.getElementById("pi");
var btnGst = document.getElementById("gst");
var btnAdd = document.getElementById("add");
var btnSub = document.getElementById("sub");
var btnMult = document.getElementById("mult");
var btnDivi = document.getElementById("divi");
var io_area = document.getElementById("io_box");
var rstbtn = document.getElementById("rst");
var calc = document.getElementById("calc_btn");

var input = [];

function circumference(radius) {
  return 2 * Math.PI * radius;
}

function gst(n1) {
  n1 = Number(n1);
  var gst_rate = 0.18;
  var r = n1 * gst_rate + n1;
  return r;
}

btn1.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "1";
});

btn2.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "2";
});

btn3.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "3";
});

btn4.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "4";
});

btn5.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "5";
});

btn6.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "6";
});

btn7.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "7";
});

btn8.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "8";
});

btn9.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "9";
});

btn0.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "0";
});

btnAdd.addEventListener("click", function () {
  var currentValue = Number(io_area.innerText);
  input.push(currentValue);
  input.push("add");
  io_area.innerText = "";
});

btnSub.addEventListener("click", function () {
  var currentValue = Number(io_area.innerText);
  input.push(currentValue);
  input.push("sub");
  io_area.innerText = "";
});

btnMult.addEventListener("click", function () {
  var currentValue = Number(io_area.innerText);
  input.push(currentValue);
  input.push("mult");
  io_area.innerText = "";
});

btnDivi.addEventListener("click", function () {
  var currentValue = Number(io_area.innerText);
  input.push(currentValue);
  input.push("divi");
  io_area.innerText = "";
});

rstbtn.addEventListener("click", function () {
  io_area.innerText = "";
});

btnGst.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = gst(currentValue);
});

btnPi.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = circumference(currentValue);
});

calc.addEventListener("click", function () {
  var currentValue = Number(io_area.innerText);
  input.push(currentValue);

  for (var i = 1; i < input.length; i = i + 2) {
    var index_n1 = i - 1;
    var index_n2 = i + 1;
    var number1 = input[index_n1];
    var number2 = input[index_n2];
    if (input[i] == "add") {
      input[index_n2] = number1 + number2;
    } else if (input[i] == "sub") {
      input[index_n2] = number1 - number2;
    } else if (input[i] == "mult") {
      input[index_n2] = number1 * number2;
    } else if (input[i] == "divi") {
      input[index_n2] = number1 / number2;
    }
  }
  io_area.innerText = input[input.length - 1];
});
