document.addEventListener("DOMContentLoaded", () => {
	const getNumberValue = (id) => parseFloat(document.getElementById(id)?.value);
	const setTextContent = (id, text) => {
		const element = document.getElementById(id);
		if (element) element.textContent = text;
	};

	// Function for percentage calculation
	document
		.getElementById("percentageCalcButton")
		?.addEventListener("click", () => {
			const number = getNumberValue("number");
			const percentage = getNumberValue("percentage");
			if (isNaN(number) || isNaN(percentage)) {
				setTextContent("percentageResult", "Please enter valid numbers.");
			} else {
				const result = (number * percentage) / 100;
				setTextContent("percentageResult", result.toFixed(2));
			}
		});

	// Function for ordering a drink
	document.getElementById("drinkOrderButton")?.addEventListener("click", () => {
		const size = document.getElementById("size")?.value;
		const drink = document.getElementById("drink")?.value;
		if (!size || !drink) {
			setTextContent("drinkResult", "Please select both size and drink.");
		} else {
			setTextContent("drinkResult", `You have ordered a ${size} of ${drink}`);
		}
	});

	// Function for basic calculator operations
	document
		.getElementById("calculationButton")
		?.addEventListener("click", () => {
			const number1 = getNumberValue("number1");
			const number2 = getNumberValue("number2");
			const operator = document.getElementById("operator")?.value;

			if (isNaN(number1) || isNaN(number2)) {
				setTextContent(
					"calculationResult",
					"Please enter valid numbers for calculation."
				);
				return;
			}

			let calculationResult;
			switch (operator) {
				case "+":
					calculationResult = number1 + number2;
					break;
				case "-":
					calculationResult = number1 - number2;
					break;
				case "*":
					calculationResult = number1 * number2;
					break;
				case "/":
					calculationResult =
						number2 !== 0 ? number1 / number2 : "Cannot divide by zero.";
					break;
				case "%":
					calculationResult = number1 % number2;
					break;
				default:
					calculationResult = "Invalid operator";
			}

			setTextContent(
				"calculationResult",
				isNaN(calculationResult)
					? calculationResult
					: `${number1} ${operator} ${number2} = ${calculationResult}`
			);
		});
});
