const executeIfFunction = f =>
	typeof f === 'function' ? f() : f

export const switchcase = cases => defaultCase => key =>
	cases.hasOwnProperty(key) ? cases[key] : defaultCase

export const switchcaseF = cases => defaultCase => key =>
	executeIfFunction(switchcase(cases)(defaultCase)(key))