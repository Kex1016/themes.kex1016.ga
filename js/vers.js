function ThOne() {
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
	
	bio.innerHTML="<center><img src='https://files.catbox.moe/t6amjm.png'><br><img src='https://files.catbox.moe/rdaarq.png'><br><img src='https://files.catbox.moe/va02md.png'><br><img src='https://files.catbox.moe/266sgs.png'><br><img src='https://files.catbox.moe/w406ju.png'><br><img src='https://files.catbox.moe/ce0hwm.png'><br><img src='https://files.catbox.moe/i8eb0q.png'><br><img src='https://files.catbox.moe/5ptkun.png'><br><img src='https://files.catbox.moe/gb63m7.png'><br><img src='https://files.catbox.moe/va02md.png'><br><img src='https://files.catbox.moe/kb2add.png'><br><img width='25%' src='https://files.catbox.moe/bse3si.png'><img width='25%' src='https://files.catbox.moe/nwm1dq.png'><img width='25%' src='https://files.catbox.moe/02gbyo.png'><img width='25%' src='https://files.catbox.moe/83cjdt.png'></center>"
	
	themenumber.innerHTML = "- / " + totaltheme
	banner.style.backgroundImage = "url('https://files.catbox.moe/vw3rs4.png')";
	avatar.src = "https://files.catbox.moe/x28qla.png";
	theme.innerHTML = "Profile v1<br>No particular theme";
	prev.style.visibility = "hidden";
	next.style.visibility = "hidden";
	goto.value = 0;
	home.innerHTML = "Reset";
}

function ThTwo() {
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
	
	bio.innerHTML="<center><img src='https://files.catbox.moe/6z3g5a.png'><br><img src='https://files.catbox.moe/e2qfsn.png'><br><img src='https://files.catbox.moe/noiezf.png'></center>"
	
	themenumber.innerHTML = "- / " + totaltheme
	banner.style.backgroundImage = "url('https://files.catbox.moe/78bysd.png')";
	avatar.src = "https://files.catbox.moe/t6ibzf.png";
	theme.innerHTML = "Profile v2<br>No particular theme";
	prev.style.visibility = "hidden";
	next.style.visibility = "hidden";
	goto.value = 0;
	home.innerHTML = "Reset";
}

function ThThree() {
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
	
	rawFile.open("GET", "/stuff/vers/v3-bio.txt", false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				yeet = rawFile.responseText;
				bio.innerHTML = yeet;
			}
		}
	}
	rawFile.send(null);
	
	themenumber.innerHTML = "- / " + totaltheme
	banner.style.backgroundImage = "url('https://files.catbox.moe/5ia0kd.png')";
	avatar.src = "https://files.catbox.moe/aj84nk.png";
	theme.innerHTML = "Profile v3<br><em>Just Because (Anime)</em>";
	prev.style.visibility = "hidden";
	next.style.visibility = "hidden";
	goto.value = 0;
	home.innerHTML = "Reset";
}
