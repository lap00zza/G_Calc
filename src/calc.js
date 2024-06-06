if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => console.log("registered service worker!"));
}
// --- DO NOT TOUCH THE CODE ABOVE

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
var btnPi = document.getElementById("pi");
var btnGst = document.getElementById("gst");
var btnAdd = document.getElementById("add");
var btnSub = document.getElementById("sub");
var btnMult = document.getElementById("mult");
var btnDivi = document.getElementById("divi");
var io_area = document.getElementById("io_box");
var rstbtn = document.getElementById("rst");
var calc = document.getElementById("calc_btn");

// Variable to keep track of numbers and calculations
var input = [];

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

// Version 1
// btnAdd.addEventListener("click", function () {
//   var currentValue = io_area.innerText;
//   io_area.innerText = currentValue + "+";
// });

// Version 2
btnAdd.addEventListener("click", function () {
  var currentValue = Number(io_area.innerText);
  input.push(currentValue);
  input.push("add");
  io_area.innerText = "";
});

// btnSub.addEventListener("click", function () {
//   var currentValue = io_area.innerText;
//   io_area.innerText = currentValue + "-";
// });

btnSub.addEventListener("click", function () {
  var currentValue = Number(io_area.innerText);
  input.push(currentValue);
  input.push("sub");
  io_area.innerText = "";
});

// btnMult.addEventListener("click", function () {
//   var currentValue = io_area.innerText;
//   io_area.innerText = currentValue + "*";
// });

btnMult.addEventListener("click", function () {
  var currentValue = Number(io_area.innerText);
  input.push(currentValue);
  input.push("mult");
  io_area.innerText = "";
});

// btnDivi.addEventListener("click", function () {
//   var currentValue = io_area.innerText;
//   io_area.innerText = currentValue + "/";
// });

btnDivi.addEventListener("click", function () {
  var currentValue = Number(io_area.innerText);
  input.push(currentValue);
  input.push("divi");
  io_area.innerText = "";
});

rstbtn.addEventListener("click", function () {
  io_area.innerText = "";
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

function circumference(radius) {
  return 2 * Math.PI * radius;
}

btnPi.addEventListener("click", function () {
  var currentValue = io_area.innerText;
  io_area.innerText = circumference(currentValue);
});

// Version 1: Very safe
// calc.addEventListener("click", function () {
//   var currentValue = io_area.innerText;
//   io_area.innerText = eval(currentValue);
// });

// Version 2: Very Very Safe
calc.addEventListener("click", function () {
  var currentValue = Number(io_area.innerText);
  input.push(currentValue);

  // [2, "add", 3, "add", 4, "add", 5] <-- arr
  //  0    1    2    3    4    5    6
  // ------------------------------
  // start by looking at arr[1] = "add" -> arr[0] + arr[2]
  // look at arr[3] = "add" -> arr[2] + arr[4]

  for (var i = 1; i < input.length; i = i + 2) {
    // i = 5
    var index_n1 = i - 1; // 4
    var index_n2 = i + 1; // 7
    var number1 = input[index_n1]; // input[2] -> 6
    var number2 = input[index_n2]; // input[4] -> 6
    if (input[i] == "add") {
      input[index_n2] = number1 + number2;
      // input[4] = 6 + 6 = 12
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

// WORKING THEORY
// --------------
// START
// input = []
//
// AFTER I INPUT 1
// input = [1, "add"]
//
// AFTER I INPUT 2
// input = [1, "add", 2, "add"]
//
// AFTER I INPUT 3 and press =
// input = [1, "add", 2, "add", 3]
//          0    1    2   3     4
//
// i = 1
// input[i] = "add"
// input[i + 1] = input[i - 1] + input[i + 1]
//                 element 0      element 2
//
// i = 3
// input[i] = "add"
// input[i + 1] = input[i - 1] + input[i + 1]
//                 element 2       element 4
//
// i = 5 (LOOP WILL STOP RUNNING because 5 < input.length is FALSE)
//
// ANSWER is store in the last element of the array
// input[input.length - 1]
