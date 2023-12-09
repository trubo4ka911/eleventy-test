export async function shoppingCartCalculations() {
	let cart = [
		{ name: "apple", type: "food", price: 1, quantity: 3 },
		{ name: "shirt", type: "clothing", price: 20, quantity: 1 },
		{ name: "book", type: "educational", price: 15, quantity: 2 },
	];

	const calculateTotalPrice = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const calculateDiscountedTotalPrice = (discountAmount, type) => {
		return cart.reduce((total, item) => {
			const discount =
				type === "any" || item.type === type ? (100 - discountAmount) / 100 : 1;
			return total + item.price * item.quantity * discount;
		}, 0);
	};

	const filterItemsByPrice = (lowPrice, highPrice) => {
		return cart.filter(
			(item) => item.price >= lowPrice && item.price <= highPrice
		);
	};

	document.getElementById("calculateTotal").addEventListener("click", () => {
		document.getElementById("totalPriceOutput").textContent =
			calculateTotalPrice().toFixed(2);
	});

	document
		.getElementById("calculateDiscountedTotal")
		.addEventListener("click", async () => {
			const discountType = await showModal(
				"Enter discount type (e.g., food, any):"
			);
			const discountAmountValue = await showModal(
				"Enter discount amount (without % sign):"
			);
			const discountAmount = parseFloat(discountAmountValue);
			if (!isNaN(discountAmount)) {
				const discountedTotal = calculateDiscountedTotalPrice(
					discountAmount,
					discountType
				);
				document.getElementById("discountedTotalPriceOutput").textContent =
					discountedTotal.toFixed(2);
			} else {
				alert("Please enter a valid discount amount.");
			}
		});

	document
		.getElementById("filterByPrice")
		.addEventListener("click", async () => {
			const lowPriceValue = await showModal("Enter low price:");
			const highPriceValue = await showModal("Enter high price:");
			const lowPrice = parseFloat(lowPriceValue);
			const highPrice = parseFloat(highPriceValue);
			document.getElementById("filteredItemsOutput").textContent =
				JSON.stringify(filterItemsByPrice(lowPrice, highPrice), null, 2);
		});

	renderCartItems(cart);
}

function renderCartItems(cart) {
	const cartItemsContainer = document.getElementById("cartItems");
	cartItemsContainer.innerHTML = cart
		.map((item) => {
			return `<div>${item.name} - ${item.type}, $${item.price} x ${item.quantity}</div>`;
		})
		.join("");
}

function showModal(question) {
	return new Promise((resolve) => {
		const modal = document.getElementById("myModal");
		const modalText = document.querySelector(".modal-content p");
		const modalInput = document.getElementById("modalInput");
		const modalSubmit = document.getElementById("modalSubmit");
		const closeSpan = document.querySelector(".close");

		modalText.textContent = question;
		modal.style.display = "block";
		modalInput.value = "";
		modalInput.focus();

		closeSpan.onclick = () => {
			modal.style.display = "none";
			resolve(null);
		};

		modalSubmit.onclick = () => {
			modal.style.display = "none";
			resolve(modalInput.value);
		};

		window.onclick = (event) => {
			if (event.target == modal) {
				modal.style.display = "none";
				resolve(null);
			}
		};
	});
}

// Assuming the HTML already includes <div id="myModal">...</div>
shoppingCartCalculations();
