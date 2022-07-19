let select = document.querySelectorAll("[name='select']");
$("#alert").hide();
$("#alert2").hide();
fetch("https://api.frankfurter.app/currencies")
  .then((response) => response.json())
  .then((data) => {
    entries = Object.entries(data);
    for (let i = 0; i < entries.length; i++) {
      select[0].innerHTML += ` <option value="${entries[i][0]}">${entries[i][0]}: ${entries[i][1]}</option>`;
      select[1].innerHTML += ` <option value="${entries[i][0]}">${entries[i][0]}: ${entries[i][1]}</option>`;
    }
  });

 
  fetch('symbol.txt')
  .then(response => response.json())
  .then(data => {
    let symbol = Object.entries(data);
     dat = {};
    for (let i = 0; i < symbol.length; i++) {
     key = (symbol[i][0]);
     value = (symbol[i][1].symbol_native);
      // console.log(symbol[i][1].symbol_native);
      dat[key] = value
      
    }
    // console.log(dat);
    

  })




let convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener("click", () => {
  let currency1 = select[0].options[select[0].selectedIndex].value;
  let currency2 = select[1].options[select[1].selectedIndex].value;
  let value = document.getElementById("input").value;
  convert(currency1, currency2, value);
});

function convert(currency1, currency2, value) {
  let output = document.getElementById("output");

  if (currency1 == currency2) {
    setTimeout(() => {
      $("#alert").hide();
    }, 2000);
    $("#alert").show();
  } else if (input.value == "") {
    setTimeout(() => {
      $("#alert2").hide();
    }, 2000);
    $("#alert2").show();
  } else {
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        let val = Object.values(data.rates);

        output.value = val[0];
      

      });
  }
}
//  implement chart

// fetch('symbol.txt')
// .then(response => response.json())
// .then(symbol => {
//   let sym = Object.entries(symbol)[0][0]
//   console.log(sym)}
// )