---
layout: layouts/base.njk
title: Shopping Cart Calculations
---

<h1>{{ title }}</h1>

<div id="shoppingCartApp">
  <h2>Shopping Cart</h2>
  <div id="cartItems">
    <!-- Cart items will be rendered here by JavaScript -->
  </div>
  <button id="calculateTotal">Calculate Total</button>
  <button id="calculateDiscountedTotal">Calculate Discounted Total</button>
  <button id="filterByPrice">Filter Items By Price</button>

  <h3>Results:</h3>
  <p>Total Price: <span id="totalPriceOutput"></span></p>
  <p>Discounted Total Price: <span id="discountedTotalPriceOutput"></span></p>
  <p>Filtered Items: <span id="filteredItemsOutput"></span></p>
</div>

<!-- The Modal for Discount Type -->
<div id="myModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
    <input type="text" id="modalInput" placeholder="Enter value">
    <button id="modalSubmit">Submit</button>
  </div>
</div>