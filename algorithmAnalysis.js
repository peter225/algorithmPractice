function a(n){
 var count =0;
 for (var i=0;i<n;i++){
 	count+=1;
 }
 for (var i=0;i<5*n;i++){
 	count+=1;
 }
 	return count;
 }
 //30+6 = 36
 //The loop above demonstrate the sum rule of the Big-O
 //notation
console.log(a(6));

function b(n){
 var count =0;
 for (var i=0;i<n;i++){
 	count+=1;
 		for (var i=0;i<5*n;i++){
 			count+=1;
 		}
}
 return count;
}
//51
//The rule above demonstrates the product rule of the
//Big-O notation
/**
In this example, f(n) = 5n*n because line 22 runs 5n 
times for a total of n iterations.
Therefore, this results in a total of 5n^2 operations. 
Applying the coefficient rule, the result
is that O(n)=n^2.

**/
console.log(b(10));

function someFunction(n) {

 for (var i=0;i<n;i*2) {
 	console.log(n);
 }

}
//someFunction(1);

function isEquivalent(a, b) {
 // arrays of property names
 var aProps = Object.getOwnPropertyNames(a);
 var bProps = Object.getOwnPropertyNames(b);

 // If their property lengths are different, they're different objects
 if (aProps.length != bProps.length) {
 	return false;
 }

 for (var i = 0; i < aProps.length; i++) {
 	var propName = aProps[i];

 	// If the values of the property are different, not equal
 	if (a[propName] !== b[propName]) {
 		return false;
 	}
 }

 	// If everything matched, correct
 	return true;
 }
 console.log(isEquivalent({'hi':12},{'hi':12})); // returns true
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

/**
-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_
SAFE_IN- TEGER < Number.MAX_VALUE < Infinity


**/








