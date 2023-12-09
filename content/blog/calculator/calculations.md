---
layout: layouts/base.njk
title: Calculations
---

<h1 class="title">Calculations</h1>

<!-- Percentage Calculator -->
<div id="percentageCalculator" class="calculation-section">
  <h2>Percentage Calculator</h2>
  <input type="number" id="number" class="calculation-form" placeholder="Enter number">
  <input type="number" id="percentage" class="calculation-form" placeholder="Enter percentage">
  <button id="percentageCalcButton" class="btn-calculate">Calculate</button>
  <p id="percentageResult" class="result-display"></p>
</div>

<!-- Drink Order -->
<div id="drinkOrder" class="calculation-section">
  <h2>Drink Order</h2>
  <select id="size" class="calculation-form">
    <option value="Small">Small</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
  </select>
  <select id="drink" class="calculation-form">
    <option value="cola">Cola</option>
    <option value="lemon">Lemonade</option>
    <option value="orange">Orangeade</option>
  </select>
  <button id="drinkOrderButton" class="btn-order">Order</button>
  <p id="drinkResult" class="result-display"></p>
</div>

<!-- Calculator -->
<div id="calculator" class="calculation-section">
  <h2>Calculator</h2>
  <input type="number" id="number1" class="calculation-form" placeholder="Enter first number">
  <input type="number" id="number2" class="calculation-form" placeholder="Enter second number">
  <select id="operator" class="calculation-form">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
    <option value="%">%</option>
  </select>
  <button id="calculationButton" class="btn-calculate">Calculate</button>
  <p id="calculationResult" class="result-display"></p>
</div>
