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
	window.themenum = 0;
	var prev = document.getElementById("kex-prev");
	var next = document.getElementById("kex-nxt");
	var themenumber = document.getElementById("themenum");
	var bg = document.getElementById("goodgood");
	themenumber.innerHTML = "- / " + totaltheme
	banner.style.backgroundImage = "url('https://files.catbox.moe/azhubp.jpg')";
	avatar.src = "https://media1.tenor.com/images/72c9b849aa10b222371ebb99a6b1896a/tenor.gif";
	theme.innerHTML = "Welcome to my<br>theme collection!";
	bio.innerHTML = "Click on 'Next Theme' to view the themes!<br><br>Total themes: <b>" + totaltheme + "</b><br><em>Of course, this number is evergrowing.</em><br><br>Site made by <a href='https://anilist.co/user/Kex1016'>Kex1016</a> from the <a href='https://anilist.co/'>AniList</a> website.";
	prev.style.color = "#616161";
	prev.style.cursor = "default";
	next.style.color = "rgb(var(--color-text-lighter))";
	next.style.cursor = "pointer";
	prev.style.visibility = "visible";
	next.style.visibility = "visible";
	goto.value = 0;
	home.innerHTML = "Home";
	next.innerHTML = "First Theme";
	bg.style.background = "rgb(var(--color-background)";
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
	var prev = document.getElementById("kex-prev");
	var next = document.getElementById("kex-nxt");
	var bg = document.getElementById("goodgood");
	prev.style.color = "#616161";
	prev.style.cursor = "default";
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
		rawFile.open("GET", "/stuff/0" + themenum + "-bg.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var bgtxt = rawFile.responseText;
					bg.style.background = bgtxt
				}
			}
		}
		rawFile.send(null);
		goto.value = themenum;
		themenumber.innerHTML = themenum + " / " + totaltheme

		if (themenum > 1) {
			prev.style.color = "rgb(var(--color-text-lighter))";
			prev.style.cursor = "pointer";
		} else {
			prev.style.color = "#616161";
			prev.style.cursor = "default";
		}
		if (themenum >= totaltheme) {
			next.style.color = "#616161";
			next.style.cursor = "default";
		} else {
			next.style.color = "rgb(var(--color-text-lighter))";
			next.style.cursor = "pointer";
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
	var prev = document.getElementById("kex-prev");
	var next = document.getElementById("kex-nxt");
	var bg = document.getElementById("goodgood");
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
		rawFile.open("GET", "/stuff/0" + themenum + "-bg.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var bgtxt = rawFile.responseText;
					bg.style.background = bgtxt
				}
			}
		}
		rawFile.send(null);
		goto.value = themenum;
		themenumber.innerHTML = themenum + " / " + totaltheme
		if (themenum > 1) {
			prev.style.color = "rgb(var(--color-text-lighter))";
			prev.style.cursor = "pointer";
		} else {
			prev.style.color = "#616161";
			prev.style.cursor = "default";
		}
		if (themenum >= totaltheme) {
			next.style.color = "#616161";
			next.style.cursor = "default";
		} else {
			next.style.color = "rgb(var(--color-text-lighter))";
			next.style.cursor = "pointer";
		}
	}
	next.innerHTML = "Next Theme";
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
	var prev = document.getElementById("kex-prev");
	var next = document.getElementById("kex-nxt");
	var bg = document.getElementById("goodgood");
	if (themenum > totaltheme) {
		alert("Not a valid number. Try again. Total available themes: " + totaltheme);
		ThLoad();
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
		rawFile.open("GET", "/stuff/0" + themenum + "-bg.txt", false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var bgtxt = rawFile.responseText;
					bg.style.background = bgtxt;
				}
			}
		}
		rawFile.send(null);
		themenumber.innerHTML = themenum + " / " + totaltheme
		if (themenum > 1) {
			prev.style.color = "rgb(var(--color-text-lighter))";
			prev.style.cursor = "pointer";
		} else {
			prev.style.color = "#616161";
			prev.style.cursor = "default";
		}
		if (themenum >= totaltheme) {
			next.style.color = "#616161";
			next.style.cursor = "default";
		} else {
			next.style.color = "rgb(var(--color-text-lighter))";
			next.style.cursor = "pointer";
		}
		next.innerHTML = "Next Theme";
	}
}

