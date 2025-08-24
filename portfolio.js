onload = function() {
	const random = (min, max) => {
		return Math.floor(Math.random() * (max-min+1))+min;
	}

	const names = ["home", "aboutMe", "experience", "skills", "projects"];
	const scale = 16.65;
	const galaxyImage = document.getElementById("galaxy");
	const imageSources = ["Images/BubbleNebula.jpeg", "Images/Messier106.jpeg", "Images/NGC1300.jpeg", "Images/NGC2008.jpeg", "Images/NGC2841.jpeg", "Images/NGC3717.jpeg", "Images/NGC4826.jpeg", "Images/NGC7049.jpeg", "Images/Ngc1792.jpeg", "Images/SombreroGalaxy.jpeg", "Images/StellarForge.jpeg", "Images/WhirpoolGalaxy.jpeg"];
	let randomImage = imageSources[random(0, imageSources.length-1)];

	galaxyImage.style.backgroundImage = `url(${randomImage})`;

	const menuDiv = document.getElementById("menu");
	const scrollBarDiv = document.getElementById("scrollBar");
	let scrollBarOffset = 0;

	const homeLink = document.getElementById("homeLink");

	const sections = names.map(name => document.getElementById(name));
	let isAnimating = false;

	const vhToPx = (vh) => {
		return (vh / 100) * innerHeight;
	}

	homeLink.onclick = () => {
		if (!location.href.includes("home") && Math.ceil(scrollY+vhToPx(6.32)) >= innerHeight) {
			const h1 = document.getElementById("onImageH1");
			const h3 = document.getElementById("onImageH3");

			// Remove the animation by setting it to 'none'
			h1.style.animation = "none";
			h3.style.animation = "none";

			// Trigger a reflow to allow the animation reset
			void h1.offsetWidth;
			void h3.offsetWidth;

			// Re-add the animation
			h1.style.animation = "slideInLeft 1.5s";
			h3.style.animation = "slideInRight 1.5s";
		}
	}

	(() => {
		const loc = location.href;

		names.forEach((elem, i) => {
			if (loc.indexOf(elem) > -1) {
				scrollBarDiv.style.transform = `translateX(${scale*i}vw)`;
				scrollBarOffset = scale*i;
			}
		});
	})();

	// Smooth scroll on link click (Snap to section with smooth animation)
	menuDiv.addEventListener("click", (e) => {
		if (e.target.classList.contains("links")) {
			e.preventDefault();

			const href = e.target.getAttribute("href").replace("#", "");
			const targetSection = document.getElementById(href);
			const i = names.indexOf(href);

			if (targetSection && i !== -1) {
				// Disable scroll event temporarily while animating
				isAnimating = true;

				// Scroll to the target section smoothly
				targetSection.scrollIntoView({ behavior: "smooth" });

				// Calculate the snap offset based on the section index
				let offset = scale * i;

				// Snap scrollbar to the exact section position
				scrollBarDiv.style.transition = "transform 0.5s ease-in-out"; // Snap transition
				scrollBarDiv.style.transform = `translateX(${offset}vw)`;

				scrollBarOffset = offset;
			}
		}
	});

	let belowHome = false;

	// Smooth scroll on scroll event (Snap to nearest section)
	window.addEventListener("scroll", (e) => {
		if (isAnimating) return; // Ignore scroll event during animation

		let current = 0;

		// Find the section closest to the current scroll position
		sections.forEach((section, i) => {
			const sectionTop = section.offsetTop;
			const sectionBottom = sectionTop + section.offsetHeight;

			// If scrollY is within the current section's bounds, snap to that section
			if (scrollY >= sectionTop - window.innerHeight / 2 && scrollY < sectionBottom - window.innerHeight / 2) {
				current = i;
			}
		});

		// Snap to the nearest section by rounding the offset
		let offset = Math.round(scale * current);

		// Smoothly animate the scrollbar to snap to that section
		scrollBarDiv.style.transition = "transform 0.5s ease-in-out";
		scrollBarDiv.style.transform = `translateX(${offset}vw)`;
		scrollBarOffset = offset;

		if (belowHome && Math.ceil(scrollY+vhToPx(6.32)) < innerHeight) {
			randomImage = imageSources[random(0, imageSources.length - 1)];
			galaxyImage.style.backgroundImage = `url(${randomImage})`;

			const h1 = document.getElementById("onImageH1");
			const h3 = document.getElementById("onImageH3");

			// Remove the animation by setting it to 'none'
			h1.style.animation = "none";
			h3.style.animation = "none";

			// Trigger a reflow to allow the animation reset
			void h1.offsetWidth;
			void h3.offsetWidth;

			// Re-add the animation
			h1.style.animation = "slideInLeft 1.5s";
			h3.style.animation = "slideInRight 1.5s";
		}

		belowHome = Math.ceil(scrollY+vhToPx(6.32)) >= innerHeight;
	});

	// Reset the animation flag after the transition ends
	scrollBarDiv.addEventListener("transitionend", () => {
		isAnimating = false;
	});

	// Update scrollbar position on page load (Snap to correct position)
	const updateScrollBarOnLoad = () => {
		const loc = location.href;
		names.forEach((elem, i) => {
			if (loc.indexOf(elem) > -1) {
				let offset = scale * i;
				scrollBarDiv.style.transform = `translateX(${offset}vw)`;
				scrollBarOffset = offset;
			}
		});
	}

	window.addEventListener("load", updateScrollBarOnLoad);
	window.addEventListener("resize", updateScrollBarOnLoad);
}
