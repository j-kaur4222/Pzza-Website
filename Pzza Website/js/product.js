var listCard = $('.myProd');
var quantity = $('.quantity');
var listCards = getLocalStorage();

var products = [{"id":0,
  "name":"Margherita Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-1.jpg",
  "category":"veg",
  "price":9.99},
  {"id":1,
  "name":"Pepperoni Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-2.jpg",
  "category":"veg",
  "price":14.99},
  {"id":2,
  "name":"Vegetarian Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-3.jpg",
  "category":"veg",
  "price":9.99},
  {"id":3,
  "name":"BBQ Chicken Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-4.jpg",
  "category":"nonveg",
  "price":7.99},
  {"id":4,
  "name":"Hawaiian Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-5.jpg",
  "category":"nonveg",
  "price":30.99},
  {"id":5,
  "name":"Meat Lovers Pizza",
  "description":"Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
  "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur officia repellendus quibusdam? Eum dolor quibusdam veritatis provident officiis nisi error molestiae mollitia tempora quae.",
  "imageUrl":"images/pizza-6.jpg",
  "category":"nonveg",
  "price":23.99}];

function getLocalStorage() {
  const storedData = localStorage.getItem('cartdata');
  return storedData ? JSON.parse(storedData) : [];
}

function saveToLocalStorage(cart) {
  localStorage.setItem('cartdata', JSON.stringify(cart));
}

function loadDesc() {
  listCard.empty();
  var count = 0;

  // Retrieve product from local storage
  var storedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

  // Populate HTML elements with product details
  $('.product-image').attr('src', storedProduct.imageUrl);
  $('.product-name').text(storedProduct.name);
  $('.product-description-text').text(storedProduct.description + storedProduct.details);
  $('.product-price').text(`Price: $${storedProduct.price.toLocaleString()}`);
  $('.add-to-cart-btn').attr('onclick', `addToCard(${storedProduct.id})`);

  reloadCard();
}

function addToCard(key) {
    if (listCards[key] == null) {
      listCards[key] = $.extend(true, {}, products[key]);
      listCards[key].quantity = 1;
    } else {
      listCards[key].quantity = listCards[key].quantity + 1;
    }
    reloadCard();
  }

  function reloadCard() {
    var count = 0;
    $.each(listCards, function(key, value) {
      if (value) {
        count = count + value.quantity;
      }
    });
    quantity.text(count);
    saveToLocalStorage(listCards);
  }

  // Create Custom Plugin
  (function ($) {
    $.fn.customizePizza = function () {
      // Plugin
      return this.each(function () {
        var $form = $(this);
        var $customizeButton = $form.find('#customize-pizza');

        $customizeButton.on('click', function () {
          // Customization
          var size = $form.find('#pizza-size').val();
          var toppings = $form.find('input[name="topping"]:checked')
            .map(function () {
              return this.value;
            })
            .get();

          alert('Customize Pizza\nSize: ' + size + '\nToppings: ' + toppings.join(', '));
        });
      });
    };
  })(jQuery);

$(document).ready(function() {
    loadDesc();
    $('#pizza-order-form').customizePizza();
});
