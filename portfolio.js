window.onload = function() {
	const random = (min, max) => {
		return Math.floor(Math.random() * (max-min+1))+min;
	}

	const galaxyImage = document.getElementById("galaxy");
	const imageSources = ["Images/BubbleNebula.jpeg", "Images/Messier106.jpeg", "Images/NGC1300.jpeg", "Images/NGC2008.jpeg", "Images/NGC2841.jpeg", "Images/NGC3717.jpeg", "Images/NGC4826.jpeg", "Images/NGC7049.jpeg", "Images/Ngc1792.jpeg", "Images/SombreroGalaxy.jpeg", "Images/StellarForge.jpeg", "Images/WhirpoolGalaxy.jpeg"];

	let randomImage = imageSources[random(0, imageSources.length-1)];

	galaxyImage.style.backgroundImage = `url(${randomImage})`;

	const menuDiv = document.getElementById("menu");
	const scrollBarDiv = document.getElementById("scrollBar");
	let scrollBarOffset = "0vw";

	const scrollBarAnimation = (translateX) => {
		const animation = `@keyframes translate`;
	}

	const findScrollBar = () => {
		const loc = location.href;

		if (loc.indexOf("aboutMe") > -1) {
			scrollBarDiv.style.transform = "translateX(22.25vw)";
			scrollBarOffset = "22.25vw";
		} else if (loc.indexOf("skills") > -1) {
			scrollBarDiv.style.transform = "translateX(44.55vw)";
			scrollBarOffset = "44.55vw";
		} else if (loc.indexOf("projects") > -1) {
			scrollBarDiv.style.transform = "translateX(66.79vw)";
			scrollBarOffset = "66.79vw";
		}
	}

	findScrollBar();

	menuDiv.onclick = () => {
		setTimeout(() => {
			const loc = location.href;

			if (loc.indexOf("home") > -1) {
				scrollBarDiv.animate([{ 
					transform: `translateX(${scrollBarOffset})`
				}, { 
	  				transform: "translateX(0)"
	  			}], {
	  				duration: 1000,
	  				easing: "ease-in-out",
	  				fill: "forwards"
				});

				scrollBarOffset = "0vw";
			} else if (loc.indexOf("aboutMe") > -1) {
				scrollBarDiv.animate([{ 
					transform: `translateX(${scrollBarOffset})`
				}, { 
	  				transform: "translateX(22.25vw)"
	  			}], {
	  				duration: 1000,
	  				easing: "ease-in-out",
	  				fill: "forwards"
				});

				scrollBarOffset = "22.25vw";
			} else if (loc.indexOf("skills") > -1) {
				scrollBarDiv.animate([{ 
					transform: `translateX(${scrollBarOffset})`
				}, { 
	  				transform: "translateX(44.55vw)"
	  			}], {
	  				duration: 1000,
	  				easing: "ease-in-out",
	  				fill: "forwards"
				});

				scrollBarOffset = "44.55vw";
			} else if (loc.indexOf("projects") > -1) {
				scrollBarDiv.animate([{ 
					transform: `translateX(${scrollBarOffset})`
				}, { 
	  				transform: "translateX(66.79vw)"
	  			}], {
	  				duration: 1000,
	  				easing: "ease-in-out",
	  				fill: "forwards"
				});

				scrollBarOffset = "66.79vw";
			}
		}, 100);
	}
}