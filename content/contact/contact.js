var form = document.getElementById("my-form");

async function handleSubmit(event) {
	event.preventDefault();
	var status = document.getElementById("formSuccessMessage");
	var data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => {
			if (response.ok) {
				status.innerHTML = "Thanks for your submission!";
				status.style.display = "block"; // Show the success message
				form.reset(); // This will clear all the fields
				setTimeout(function () {
					status.style.display = "none"; // Hide the success message after 4 seconds
				}, 4000);
			} else {
				response.json().then((data) => {
					if (Object.hasOwn(data, "errors")) {
						status.innerHTML = data["errors"]
							.map((error) => error["message"])
							.join(", ");
					} else {
						status.innerHTML = "Oops! There was a problem submitting your form";
					}
				});
			}
		})
		.catch((error) => {
			status.innerHTML = "Oops! There was a problem submitting your form";
		});
}
form.addEventListener("submit", handleSubmit);
