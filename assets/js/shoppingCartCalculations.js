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
			const discountType = await showModalType("Select discount type:", [
				"food",
				"clothing",
				"educational",
				"any",
			]);
			if (discountType !== null) {
				const discountAmountValue = await showModalAmount(
					"Enter discount amount (without % sign):"
				);
				if (discountAmountValue !== null) {
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
				}
			}
		});

	document
		.getElementById("filterByPrice")
		.addEventListener("click", async () => {
			const lowPriceValue = await showModalAmount("Enter low price:");
			const highPriceValue = await showModalAmount("Enter high price:");
			if (lowPriceValue !== null && highPriceValue !== null) {
				const lowPrice = parseFloat(lowPriceValue);
				const highPrice = parseFloat(highPriceValue);
				if (!isNaN(lowPrice) && !isNaN(highPrice)) {
					const filteredItems = filterItemsByPrice(lowPrice, highPrice);
					renderFilteredItems(filteredItems); // Update to use the new rendering function
				} else {
					alert("Please enter valid numbers for prices.");
				}
			}
		});
	// Function to render filtered items as a list
	function renderFilteredItems(items) {
		const container = document.getElementById("filteredItemsOutput");
		if (items.length === 0) {
			container.innerHTML = "No items found.";
		} else {
			const list = items
				.map(
					(item) =>
						`<div>${item.name} - ${item.type}, $${item.price} - ${item.quantity}pcs.</div>`
				)
				.join("");
			container.innerHTML = list;
		}
	}

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
function showModalType(question, options) {
	return new Promise((resolve) => {
		const modal = document.getElementById("myModalType");
		const modalText = modal.querySelector("p");
		const modalSelect = modal.querySelector("select");
		const modalSubmit = modal.querySelector("button");
		const closeSpan = modal.querySelector(".close");

		// Populate the select element with options
		modalSelect.innerHTML = options
			.map(
				(option) =>
					`<option value="${option}">${
						option.charAt(0).toUpperCase() + option.slice(1)
					}</option>`
			)
			.join("");

		modalText.textContent = question;
		modal.style.display = "block";

		closeSpan.onclick = () => {
			modal.style.display = "none";
			resolve(null);
		};

		modalSubmit.onclick = () => {
			modal.style.display = "none";
			resolve(modalSelect.value);
		};

		window.onclick = (event) => {
			if (event.target == modal) {
				modal.style.display = "none";
				resolve(null);
			}
		};
	});
}

function showModalAmount(question) {
	return new Promise((resolve) => {
		const modal = document.getElementById("myModalAmount");
		const modalText = modal.querySelector("p");
		const modalInput = modal.querySelector("input");
		const modalSubmit = modal.querySelector("button");
		const closeSpan = modal.querySelector(".close");

		modalText.textContent = question;
		modalInput.value = "";
		modal.style.display = "block";
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
