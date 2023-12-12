$(document).ready(function() {
  var quantity = $('.quantity');
  var listCards = getLocalStorage();

  function getLocalStorage() {
    const storedData = localStorage.getItem('cartdata');
    return storedData ? JSON.parse(storedData) : [];
  }

  function reloadCard() {
    let count = 0;
    $.each(listCards, function(key, value) {
      if (value) {
        count += value.quantity;
      }
    });
    quantity.text(count);
  }

  reloadCard();
});
