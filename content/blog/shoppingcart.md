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
<div id="myModalType" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Select discount type:</p>
    <select id="modalSelect">
      <option value="food">Food</option>
      <option value="clothing">Clothing</option>
      <option value="educational">Educational</option>
      <option value="any">Any</option>
    </select>
    <button class='modalSubmit' id="modalSubmitType">Submit</button>
  </div>
</div>

<!-- The Modal for Discount Amount -->
<div id="myModalAmount" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Enter discount amount (without % sign):</p>
    <input type="number" id="modalInputAmount" placeholder="Enter value">
    <button class='modalSubmit' id="modalSubmitAmount">Submit</button>
  </div>
</div>
