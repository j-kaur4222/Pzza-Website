var list = $('.list');
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

function goToDesc(key) {
  var selectedProduct = products[key];

  // Save the selected product to local storage
  localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

  window.location.href="product.html";
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

function allPizzas() {
  getData("all");
}

function veg() {
  getData("veg");
}

function nonveg() {
  getData("nonveg");
}

function getData(cat) {
  list.empty();
  console.log(cat);
  products.forEach(function(value, key) {
    if(value.category == cat) {
          var newDiv = $(`<div class="item"></div>`).html(`
          <div class="menu-6-item bg-white">
            <div class="cont hover-overlay">
              <img class="menu-6-img img-fluid" onclick="goToDesc(${key});" src="${value.imageUrl}" alt="${value.name}">
            </div>
            <div class="item-details">
              <h5 class="h5-sm" onclick="goToDesc(${key});">${value.name}</h5>
              <p class="grey-color" onclick="goToDesc(${key});">${value.description}</p>
              <div class="price" onclick="goToDesc(${key});">$ ${value.price.toLocaleString()}</div>
              <button onclick="addToCard(${key})">Add To Cart</button>
            </div>
          </div>
        `);
    
        if (list.length > 0) {
          list.append(newDiv);
        }
      }else if (cat == "all"){
        var newDiv = $(`<div class="item"></div>`).html(`
          <div class="menu-6-item bg-white">
            <div class="cont hover-overlay">
              <img class="menu-6-img img-fluid" onclick="goToDesc(${key});" src="${value.imageUrl}" alt="${value.name}">
            </div>
            <div class="item-details">
              <h5 class="h5-sm" onclick="goToDesc(${key});">${value.name}</h5>
              <p class="grey-color" onclick="goToDesc(${key});">${value.description}</p>
              <div class="price" onclick="goToDesc(${key});">$ ${value.price.toLocaleString()}</div>
              <button onclick="addToCard(${key})">Add To Cart</button>
            </div>
          </div>
        `);
    
        if (list.length > 0) {
          list.append(newDiv);
        }
      }
  });
}

function initApp() {
  getData("all");
}

$(document).ready(function() {
  reloadCard();
  initApp();  
});
