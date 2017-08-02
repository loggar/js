/** module logger */ var logger={fn_logging_tool:null,prefix_debug:"[DEBUG] ",prefix_err:"[ERROR] ",typeof_logTarget:"",debug:function(c){this.typeof_logTarget=typeof c||"";this.str_debug=""+this.prefix_debug;this.str_debug=this.str_debug+this.typeof_logTarget+" "+c;if(this.typeof_logTarget=="object")this.str_debug+=" "+function(a){var b="{";for(prop_or_index in a)b+=(prop_or_index+":"+a[prop_or_index]+", ");return b.substring(0,b.length-2)+"}"}(c);this.fn_logging_tool(this.str_debug);return},error:function(e){this.fn_logging_tool(this.prefix_err+e);return}};logger.fn_logging_tool=logger.fn_logging_tool||console.log;

/*
 * 변수 체인은 하위함수로부터 시작된다(우선된다)
 * 정의된 변수 x가 사용되는 가장 하위 함수에서 x의 스코프는 살아있다.(반환후 참조되고 있는 한)
 * 그래서, outer() 함수가 계속해서 호출되더라도 outer 함수는 계속해서 하위함수 스코프에서 반환한 x 변수 참조를 사용하게 된다.
 * 
 * x 변수의 선언은 outer 함수가 했지만, 그 생존여부는 outer 함수의 능력 밖이다. 하위함수가 반환한 x 의 참조가 사라져야만 제거된다.
 * 
 * [1] 함수의 호출이 종료되더라도 그 함수의 지역변수 및 지역변수 체인관계를 유지할 수 있는구조를 클로저라한다.
 * [2] 함수 인스턴스를 만들어내는 함수(반환값이 function 인스턴스인 함수) 가 클로저이다.
 * [3] 위 함수의 호출은 클로저환경을 만든다, 이때 클로저환경은 그 함수의 능력을 벗어난다. 클로저의 종료는 함수 내부의 변수를 참조하는 외부환경에 의해 결정된다.
 * [4] Function 생성자로 만들어진 함수는 클로저를 만들지 못한다.
 * [5] 왜 클로저라 하는가? 해당 환경은 마치 outer 를 참조하는 변수가 정의될 때마다 outer의 인스턴스가 새로 할당되는 환경을 구성하게된다. 즉, 변수스코프를 각 참조에 폐쇄한다.
 * [6] 이때 각각의 참조는 다른 참조의 변수에 접근하지 못한다. 각각의 참조가 닫혀진 공간을 소유하게 된다.
 * 
 */
function outer() {
	var x = 0;
	
	return function () { return ++x;};
}

var x=-1;

logger.debug(outer());
logger.debug(outer());
logger.debug(outer());

var f = outer();
logger.debug(f());
logger.debug(f());
logger.debug(f());

var f2 = outer();

logger.debug(f2());
logger.debug(f2());

logger.debug(f());
logger.debug(f());

