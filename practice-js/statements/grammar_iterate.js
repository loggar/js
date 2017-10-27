/**
 * javascript 의 지역변수 scope 는 function 단위이다. for 구문 안에서 선언되었더라도 해당 function 의 내부에서 for 문 종료후에도 유효하다. 선언 이전에는 undefined 이다.
 * 
 * @param count
 * @returns
 */
function iterate_for(count) {
	// console.log(i); // undefined

	count = count || 5;
	for (var i = 0; i < count; i++) {
		console.log("counting " + i);
	}

	return i;
}

/**
 * for statement 를 이용한 간단한 배열 초기화 예제.
 * 
 * @param arr
 * @returns
 */
function iterate_for_02(arr) {
	arr = arr || new Array(5);
	for (var i = 0; i < arr.length; arr[i++] = i)
		;
	return arr;
}

function iterate_for_in(obj_or_arr) {
	var str = "{";
	for ( var prop_or_index in obj_or_arr) {
		str += (prop_or_index + ":" + obj_or_arr[prop_or_index] + ", ");
	}
	return str.substring(0, str.length - 2) + "}";
}

/**
 * for in -> array 의 경우 prop 은 index 가, object 의 경우 prop 은 property name 이 된다.
 * 
 * @returns
 */
function iterate_for_in_test() {
	console.log(iterate_for_in(iterate_for_02()));

	var myObj = {
		p1 : "value_01",
		p2 : "value_02"
	};
	console.log(iterate_for_in(myObj));
}

/* test code */

// console.log(iterate_for());
// console.log(iterate_for_02());
iterate_for_in_test();
