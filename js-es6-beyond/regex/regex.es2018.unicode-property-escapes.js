/^\p{ASCII}+$/u.test('abc') //✅
/^\p{ASCII}+$/u.test('ABC@') //✅
/^\p{ASCII}+$/u.test('ABC🙃') //❌


/^\p{ASCII_Hex_Digit}+$/u.test('0123456789ABCDEF') //✅
/^\p{ASCII_Hex_Digit}+$/u.test('h') //❌


/^\p{Lowercase}$/u.test('h') //✅
/^\p{Uppercase}$/u.test('H') //✅

/^\p{Emoji}+$/u.test('H') //❌
/^\p{Emoji}+$/u.test('🙃🙃') //✅


/^\p{Script=Greek}+$/u.test('ελληνικά') //✅
/^\p{Script=Latin}+$/u.test('hey') //✅
