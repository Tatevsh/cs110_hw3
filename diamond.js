const spaces = function (x) {
	let space = "";
	for (let i = 1; i <= x; i++) {
		space += " ";
	};
	return space;
};

const stars = function (x) {
	let star = "";
	for (let j = 1; i < x; i++) {
		star += "*";
	};
	return star;
};

const diamond = function (n) {
	if (n % 2 === 0) {
		n += 1
	};
	for (let i = (n - 1) / 2, j = 1; i >= 0; i--, j += 2) {
		console.log( spaces(i) + stars(j));
	}
	for (let i = 1, j = n - 2; j > 0; i++, j -= 2) {
		console.log(spaces(i) + stars(j));
	}
}

diamond(9);
