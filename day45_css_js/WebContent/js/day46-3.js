/**day46-3.js */

//반복문
// for(시작값 ; 조건 ;  증감식) {    }

for(let i = 1; i <= 100; i+=2) {
	console.log(i);
}
console.log('----------------------------------');

for(let i = 1; i <= 100; i++) {
	if( i % 3 == 0 ) console.log(i);
}