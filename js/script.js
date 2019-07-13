function ThLoad() {
	var home = document.getElementById("kex-home");
	var goto = document.getElementById("kex-goto");
	var rawFile = new XMLHttpRequest();
	var yeet;
	rawFile.open("GET", "text.txt", false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				yeet = rawFile.responseText;
				console.log(yeet)
			}
		}
	}
	rawFile.send(null);

	var totaltheme = parseInt(yeet)
	var theme = document.getElementById("kex-theme");
	var avatar = document.getElementById("kex-avatar");
	var banner = document.getElementById("kex-banner");
	var bio = document.getElementById("kex-bio");
	var themetxt = "unknown";
	window.themenum = 0;
	var prev = document.getElementById("kex-prev");
	var next = document.getElementById("kex-nxt");
	var themenumber = document.getElementById("themenum");
	themenumber.innerHTML = "- / " + totaltheme
	banner.style.backgroundImage = "url('https://files.catbox.moe/azhubp.jpg')";
	avatar.src = "https://media1.tenor.com/images/72c9b849aa10b222371ebb99a6b1896a/tenor.gif";
	theme.innerHTML = "Welcome to my<br>theme collection!";
	bio.innerHTML = "Click on 'Next Theme' to view the themes!<br><br>Total themes: <b>" + totaltheme + "</b><br><em>Of course, this number is evergrowing.</em><br><br>Site made by <a href='https://anilist.co/user/Kex1016'>Kex1016</a> from the <a href='https://anilist.co/'>AniList</a> website.";
	prev.style.visibility = "hidden";
	next.style.visibility = "visible";
	goto.value = 0;
	home.innerHTML = "Home";
}

function ThPrev() {
	var goto = document.getElementById("kex-goto");
	var rawFile = new XMLHttpRequest();
	var yeet;
	rawFile.open("GET", "text.txt", false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				yeet = rawFile.responseText;
				console.log(yeet)
			}
		}
	}
	rawFile.send(null);

	var totaltheme = parseInt(yeet)
	var theme = document.getElementById("kex-theme");
	var themenumber = document.getElementById("themenum");
	var avatar = document.getElementById("kex-avatar");
	var banner = document.getElementById("kex-banner");
	var bio = document.getElementById("kex-bio");
	var themetxt = "unknown";
	var prev = document.getElementById("kex-prev");
	var next = document.getElementById("kex-nxt");
	prev.style.visibility = "hidden";
	window.themenum -= 1;
	if (themenum < 1) {
		themenum += 1;
		goto.value = themenum;
		themenumber.innerHTML = themenum + " / " + totaltheme
	} else {
		rawFile.open("GET", "/stuff/0" + themenum + "-bio.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var biotxt = rawFile.responseText;
					bio.innerHTML = biotxt;
				}
			}
		}
		rawFile.send(null);
		rawFile.open("GET", "/stuff/0" + themenum + "-avatar.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var avatartxt = rawFile.responseText;
					avatar.src = avatartxt;
				}
			}
		}
		rawFile.send(null);
		rawFile.open("GET", "/stuff/0" + themenum + "-banner.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var bannertxt = rawFile.responseText;
					banner.style.backgroundImage = "url('" + bannertxt + "')";
				}
			}
		}
		rawFile.send(null);
		rawFile.open("GET", "/stuff/0" + themenum + "-theme.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var themetxt = rawFile.responseText;
					theme.innerHTML = themetxt + "<br>Theme #" + themenum;
				}
			}
		}
		rawFile.send(null);
		goto.value = themenum;
		themenumber.innerHTML = themenum + " / " + totaltheme

		if (themenum > 1) {
			prev.style.visibility = "visible";
		} else {
			prev.style.visibility = "hidden";
		}
		if (themenum >= totaltheme) {
			next.style.visibility = "hidden";
		} else {
			next.style.visibility = "visible";
		}
	}
}

function ThNxt() {
	var goto = document.getElementById("kex-goto");
	var rawFile = new XMLHttpRequest();
	var yeet;
	rawFile.open("GET", "text.txt", false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				yeet = rawFile.responseText;
				console.log(yeet)
			}
		}
	}
	rawFile.send(null);

	var totaltheme = parseInt(yeet)
	var theme = document.getElementById("kex-theme");
	var themenumber = document.getElementById("themenum");
	var avatar = document.getElementById("kex-avatar");
	var banner = document.getElementById("kex-banner");
	var bio = document.getElementById("kex-bio");
	var themetxt = "unknown";
	var prev = document.getElementById("kex-prev");
	var next = document.getElementById("kex-nxt");
	window.themenum += 1;
	if (themenum > totaltheme) {
		themenum -= 1;
		goto.value = themenum;
		themenumber.innerHTML = themenum + " / " + totaltheme
	} else {
		rawFile.open("GET", "/stuff/0" + themenum + "-bio.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var biotxt = rawFile.responseText;
					bio.innerHTML = biotxt;
				}
			}
		}
		rawFile.send(null);
		rawFile.open("GET", "/stuff/0" + themenum + "-avatar.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var avatartxt = rawFile.responseText;
					avatar.src = avatartxt;
				}
			}
		}
		rawFile.send(null);
		rawFile.open("GET", "/stuff/0" + themenum + "-banner.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var bannertxt = rawFile.responseText;
					banner.style.backgroundImage = "url('" + bannertxt + "')";
				}
			}
		}
		rawFile.send(null);
		rawFile.open("GET", "/stuff/0" + themenum + "-theme.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var themetxt = rawFile.responseText;
					theme.innerHTML = themetxt + "<br>Theme #" + themenum;
				}
			}
		}
		rawFile.send(null);
		goto.value = themenum;
		themenumber.innerHTML = themenum + " / " + totaltheme
		if (themenum > 1) {
			prev.style.visibility = "visible";
		} else {
			prev.style.visibility = "hidden";
		}
		if (themenum >= totaltheme) {
			next.style.visibility = "hidden";
		} else {
			next.style.visibility = "visible";
		}
	}
}

function ThGoto(obj) {
	window.themenum = parseInt(obj.value);
	var rawFile = new XMLHttpRequest();
	var yeet;
	rawFile.open("GET", "text.txt", false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				yeet = rawFile.responseText;
				console.log(yeet)
			}
		}
	}
	rawFile.send(null);

	var totaltheme = parseInt(yeet)
	var theme = document.getElementById("kex-theme");
	var themenumber = document.getElementById("themenum");
	var avatar = document.getElementById("kex-avatar");
	var banner = document.getElementById("kex-banner");
	var bio = document.getElementById("kex-bio");
	var themetxt = "unknown";
	var prev = document.getElementById("kex-prev");
	var next = document.getElementById("kex-nxt");
	if (themenum > totaltheme) {
		alert("Not a valid number. Try again. Total available themes: " + totaltheme);
	} else {
		rawFile.open("GET", "/stuff/0" + themenum + "-bio.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var biotxt = rawFile.responseText;
					bio.innerHTML = biotxt;
				}
			}
		}
		rawFile.send(null);
		rawFile.open("GET", "/stuff/0" + themenum + "-avatar.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var avatartxt = rawFile.responseText;
					avatar.src = avatartxt;
				}
			}
		}
		rawFile.send(null);
		rawFile.open("GET", "/stuff/0" + themenum + "-banner.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var bannertxt = rawFile.responseText;
					banner.style.backgroundImage = "url('" + bannertxt + "')";
				}
			}
		}
		rawFile.send(null);
		rawFile.open("GET", "/stuff/0" + themenum + "-theme.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var themetxt = rawFile.responseText;
					theme.innerHTML = themetxt + "<br>Theme #" + themenum;
				}
			}
		}
		rawFile.send(null);
		themenumber.innerHTML = themenum + " / " + totaltheme
		if (themenum > 1) {
			prev.style.visibility = "visible";
		} else {
			prev.style.visibility = "hidden";
		}
		if (themenum >= totaltheme) {
			next.style.visibility = "hidden";
		} else {
			next.style.visibility = "visible";
		}
	}
}

