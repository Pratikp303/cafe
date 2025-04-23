
function navigateTo(page) {
  window.location.href = page;
}

function placeOrder() {
  const beverageSelect = document.querySelectorAll('#item')[0];
  const pastrySelect = document.querySelectorAll('#item')[1];
  const beverageQuantity = document.querySelectorAll('#quantity')[0].value;
  const pastryQuantity = document.querySelectorAll('#quantity')[1].value;

  const beverage = beverageSelect.value;
  const pastry = pastrySelect.value;


  if (!beverage || !pastry || beverageQuantity <= 0 && pastryQuantity <= 0) {
      document.getElementById('orderMessage').textContent =
          'Please select valid items and quantities.';
      document.getElementById('orderMessage').style.color = 'red';
      return;
  }

  const message = `Thank you for your order! You ordered:
  ${beverageQuantity} ${beverage}(s) and ${pastryQuantity} ${pastry}(s).`;
  document.getElementById('orderMessage').textContent = message;
  document.getElementById('orderMessage').style.color = 'green';
}
