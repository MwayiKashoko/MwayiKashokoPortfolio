window.onload = function() {
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

	const scrollBarAnimation = (translateX) => {
		const animation = `@keyframes translate`;
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

	menuDiv.onclick = () => {
		setTimeout(() => {
			const loc = location.href;

			names.forEach((elem, i) => {
				if (loc.indexOf(elem) > -1) {
					let offset = scale*i;
					scrollBarDiv.animate([{ 
						transform: `translateX(${scrollBarOffset}vw)`
					}, { 
						transform: `translateX(${offset}vw)`
					}], {
						duration: 1000,
						easing: "ease-in-out",
						fill: "forwards"
					});

					scrollBarOffset = offset;
				}
			});
		}, 100);
	}
}
