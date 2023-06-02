/** main4.js */
//함수
//function name() {  }
//function name(val, val2,...) {  }
//function name() { return value; }

//화살표 함수
// ( ) => { }   vs    function() {   }

//const doubleArrow = (x) => {
//	return x * 5
//}

//const doubleArrow = (x) => { return  x * 5 }
const doubleArrow = (x) =>  x * 5 

console.log('doubleArrow : ' , doubleArrow(3) )


//function double() { //함수정의부
//	console.log( xy * 2 );
//}

const double = ( ) => { 	console.log( xy * 2 );  }

const double2 =  x  => {
//const double2 = ( x ) => {
//const double2 = function(x, y) {
	//return x * 2;
	return x * y ;
}

//const double4 =  x, y => {  X
const double4 = (x, y) => {
	//return x * 2;
	return x * y ;
}

const double5 = (x, y) => {  x * y ; }



const double3 = (x) => { return x * 2 };

//const double2 = function( x ) {
//const double2 = function(x, y) {
	//return x * 2;
	//return x * y ;
//}
console.log( 'double2 : ', double2(6, 7) )
console.log( 'double2 : ', double2(5) )




//즉시실행함수 1) ( x )( ) ,   2) ( x() )
const xy = 7
//function double() { //함수정의부
//	console.log( xy * 2 );
//}

double() // 함수호출
console.log('*------------------------------------');
(function square(x){
	console.log(x * x);
} ( 2 ) );
console.log('*------------------------------------');

(function(){
	console.log( xy * 2 );
}());
console.log('*------------------------------------');

//변수 유효범위
// var - 함수레벨
// let, const - 블럭레벨

//var y = 789;
function scope() { //함수 정의부
	if( true ) {
		//console.log( y )  //
		//var y = 123;
		let y = 456;
		console.log( y )
	}
	
	//console.log( y ) //  var  vs let 
} // func end

scope();
console.log('*-=-=-=-=-=-=-=-=-=-=-')

//형변환
// 참 : true, {}, [], 1,2, 'false', -12, '3.45', 12.34,....
// 거짓 : false, ' ', null, undefined, 0, -0, NaN

if( true ){ //if( 'false' ) { //if( !0 ){  
	console.log(1235);
}

const a = 1;
const b = 1;
console.log(a == b)













