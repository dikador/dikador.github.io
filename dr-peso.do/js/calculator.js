var domain = window.location.host;
var array_new_template = ["doctorpeso.do"];
let URL = "https://def.doctorpeso.do/";
// if (array_new_template.indexOf(domain) != -1) {
//    URL = "https://def.doctorpeso.do/";
// }

// ======== noUiSlider
$("#enter-lk, #enter-lk-button").attr("href", URL + "web/home");
const sumSlider = document.getElementById("slider_sum");
const daySlider = document.getElementById("slider_day");
let termMin = 0;
let termMax = 0;
function getXmlHttp() {
   var xmlhttp;
   try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
   } catch (e) {
      try {
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (E) {
         xmlhttp = false;
      }
   }
   if (!xmlhttp && typeof XMLHttpRequest != "undefined") {
      xmlhttp = new XMLHttpRequest();
   }
   return xmlhttp;
}

function pdlParams() {
   return new Promise(function (succeed, fail) {
      var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
      xmlhttp.open("GET", URL + "api/commonApi/pdlParams", true); // Открываем асинхронное соединение
      if (!xmlhttp) {
         // Complain early, instead of nesting deeply
         //alert('Unable to set up the XHR object.');
         return;
      }
      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4) {
            // only if "OK"
            if (xmlhttp.status == 200) {
               succeed(xmlhttp);
            } else if (xmlhttp.status < 405) {
               console.log(xmlhttp.status);
               succeed(xmlhttp);
            } else {
            }
         }
      };
      xmlhttp.send();
   });
}

function pdlSendParams(Amount) {
   const p1 = new Promise((succeed, fail) => {
      var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
      xmlhttp.open("POST", URL + "api/commonApi/pdlParams", false); // Открываем асинхронное соединение
      xmlhttp.setRequestHeader("Content-type", "application/json; charset=utf-8"); // Отправляем кодировку
      if (!xmlhttp) {
         // Complain early, instead of nesting deeply
         alert("Unable to set up the XHR object.");
         return;
      }
      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4) {
            // only if "OK"
            if (xmlhttp.status == 200) {
               succeed(xmlhttp);
            } else if (xmlhttp.status < 405) {
               console.log(xmlhttp.status);
               succeed(xmlhttp);
            } else {
               succeed(xmlhttp);
            }
         }
      };
      xmlhttp.send(JSON.stringify({ "Amount": parseFloat(Amount), "Term": termMin, "Source": "mirror" }));
   });

   const p2 = new Promise((succeed, fail) => {
      var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
      xmlhttp.open("POST", URL + "api/commonApi/pdlParams", false); // Открываем асинхронное соединение
      xmlhttp.setRequestHeader("Content-type", "application/json; charset=utf-8"); // Отправляем кодировку
      if (!xmlhttp) {
         // Complain early, instead of nesting deeply
         alert("Unable to set up the XHR object.");
         return;
      }
      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4) {
            // only if "OK"
            if (xmlhttp.status == 200) {
               succeed(xmlhttp);
            } else if (xmlhttp.status < 405) {
               console.log(xmlhttp.status);
               succeed(xmlhttp);
            } else {
               succeed(xmlhttp);
            }
         }
      };
      xmlhttp.send(JSON.stringify({ "Amount": parseFloat(Amount), "Term": termMax, "Source": "mirror" }));
   });
   return Promise.all([p1, p2]);
}

function preOrder(Amount) {
   return new Promise(function (succeed, fail) {
      var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
      xmlhttp.open("POST", URL + "api/commonApi/preOrder", true); // Открываем асинхронное соединение
      xmlhttp.setRequestHeader("Content-type", "application/json; charset=utf-8"); // Отправляем кодировку
      if (!xmlhttp) {
         // Complain early, instead of nesting deeply
         alert("Unable to set up the XHR object.");
         return;
      }
      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4) {
            // only if "OK"
            if (xmlhttp.status == 200) {
               succeed(xmlhttp);
            } else if (xmlhttp.status < 405) {
               console.log(xmlhttp.status);
               succeed(xmlhttp);
            } else {
            }
         }
      };
      console.log('send')
      xmlhttp.send(JSON.stringify({ "Amount": parseFloat(Amount), 'SourceUrl': document.location.href, "Source": "mirror" }));
   });
}

function getAllCalculation() {
   $(".calculator__sum").addClass("blocked");
   $(".amount-detalis, .button-amount").toggle();
   $(".preloader-box").toggle();
   $("#calc-error").removeClass("active");
   let Amount = $("#calculator__sum span").html();
   Amount = Amount.replace(/,/g, "");

   pdlSendParams(Amount).then(function (responce) {
      $(".preloader-box").toggle();
      $(".calculator__sum").removeClass("blocked");
      if (responce.length == 2) {
         let resultMin = JSON.parse(responce[0].responseText).TotalToPay.toLocaleString("es-MX");
         let resultMax = JSON.parse(responce[1].responseText).TotalToPay.toLocaleString("es-MX");

         document.querySelector("#total-pay-min-term").innerHTML = `$ ${resultMin}`;
         document.querySelector("#total-pay-max-term").innerHTML = `$ ${resultMax}`;
      } else {
         document.querySelector("#TotalToPay").innerHTML = `$ ----`;
         let resultNew = JSON.parse(responce.responseText);

         $("#calc-error").addClass("active");
         $("#calc-error p").html(resultNew.Message);
      }
   });
}

$(document).ready(function () {
   $(".click-information-toggle").on("click", function (event) {
      let toggle = $(this).attr("data-toggle");
      if (toggle == "open") {
         $(".toggle-information, .toggle-information-bg").addClass("show");
      } else if (toggle == "close") {
         $(".toggle-information, .toggle-information-bg").removeClass("show");
      }
   });

   $(".modal-bg").on("click", function (event) {
      $(".toggle-information, .modal-bg").removeClass("show");
   });

   pdlParams().then(function (responce) {
      if (responce.status == 200) {
         let changed = 0;
         let resultNew = JSON.parse(responce.responseText);
         document.querySelector("#calculator__sum-pip-left").innerHTML = `$ <span>3,000</span>`;
         document.querySelector("#calculator__sum-pip-right").innerHTML = `$ <span>${resultNew.Amounts.MaxSum.toLocaleString(
            "es-MX"
         )}</span>`;

         let count_elem = 8;
         let steps = { "min": 3000, "max": parseInt(resultNew.Amounts.MaxSum) };
         // console.log(count_elem);
         let persent_step = 100 / (count_elem - 1);


         persent_step_obj = persent_step;
         for (let k = 4, per = 1; k < count_elem, per < count_elem - 1; k++, per++) {
            persent_step_obj = persent_step * per;
            steps[`${persent_step_obj}%`] = k * parseInt(resultNew.AmountStep);
         }

         // ======== noUiSlider PRICE
         noUiSlider.create(sumSlider, {
            start: parseInt(resultNew.DefaultAmount),
            tooltips: false,
            snap: true,
            connect: [true, false],
            step: parseInt(resultNew.AmountStep),
            range: steps,
            format: {
               to: function (value) {
                  return parseInt(value);
               },
               from: function (value) {
                  return parseInt(value);
               },
            },
         });

         sumSlider.noUiSlider.on("update", (values, handle) => {
            document.querySelector("#calculator__sum span").innerHTML = `${values.toLocaleString("es-MX")}`;
         });
         sumSlider.noUiSlider.on("set", (values, handle) => {
            getAllCalculation();
            changed++;
         });

         termMin = resultNew.Terms.MinTerm;
         termMax = resultNew.Terms.MaxTerm;

         if (!changed) {
            getAllCalculation();
         }
      }
   });
});

let sendOrder = function () {
   let Amount = $("#calculator__sum span").html();
   Amount = Amount.replace(/,/g, "");
   //let Term = $('#calculator__day span').html();
   // $('.amount-detalis, .button-amount').toggle();
   $(".preloader-box").toggle();
   preOrder(Amount).then(function (responce) {
      if (responce.status == 200) {
         var resultNew = JSON.parse(responce.responseText);
         setTimeout($(location).prop("href", resultNew.Link), 35000);
      } else {
         let resultNew = JSON.parse(responce.responseText);
         $("#calc-error").addClass("active");
         $("#calc-error p").html(resultNew.Message);
         //$('.amount-detalis, .button-amount').toggle();
         $(".preloader-box").toggle();
      }
   });
};
