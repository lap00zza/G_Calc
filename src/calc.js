// Select the elements
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
var btnPerc = document.getElementById("perc");
var btnGst = document.getElementById("gst");
var btnAdd = document.getElementById("add");
var btnSub = document.getElementById("sub");
var btnMult = document.getElementById("mult");
var btnDivi = document.getElementById("divi");
var io_area = document.getElementById("io_box");
var rstbtn = document.getElementById("rst");
var calc = document.getElementById("calc_btn");

// Event Listeners
// Please refer to https://github.com/lap00zza/Gayatris_JS_Lessons/blob/391a6497dfc6e365bce17c8ffeff1d730822db98/src/gst_calculations.js#L20
// for more info.
btn1.addEventListener("click", function () {
  // element.innerText can be used to "both" set and get
  // the value of the current element (that is not an input element)
  // for input elements, we use "element.value" instead
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

btnPerc.addEventListener("click", function () {
  io_area.innerText = "%";
});

btnAdd.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "+";
});

btnSub.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "-";
});

btnMult.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "*";
});

btnDivi.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = currentValue + "/";
});

rstbtn.addEventListener("click", function () {
  io_area.innerText = "";
});

calc.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  // WARNING: eval() is a very dangerous function
  io_area.innerText = eval(currentValue);
});

function gst(n1) {
  n1 = Number(n1);
  var gst_rate = 0.18;
  var r = n1 * gst_rate + n1;
  return r;
}

btnGst.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = gst(currentValue);
});
