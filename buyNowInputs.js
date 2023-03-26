// BuyNow inputs
function increaseValue() {
  var value = parseFloat(document.getElementById("number").value, 10) + 0.345;
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value.toFixed(3);
}

function decreaseValue() {
  var value = parseFloat(document.getElementById("number").value, 10) - 0.345;
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value.toFixed(3);
}
