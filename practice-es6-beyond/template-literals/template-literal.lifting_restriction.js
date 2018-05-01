const esth = 8;
helper`ES ${esth} is `;
function helper(strs, ...keys) {
	const str1 = strs[0]; // ES
	const str2 = strs[1]; // is
	let additionalPart = '';
	if (keys[0] == 8) { // 8
		additionalPart = 'awesome';
	}
	else {
		additionalPart = 'good';
	}

	return `${str1} ${keys[0]} ${str2} ${additionalPart}.`;
}