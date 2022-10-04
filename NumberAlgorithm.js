function isPrime(n)
{
	if(n<=1){
		return false;
	}

	for (var i = 2; i < n; i++) {
		if(n%i==0)
		{
			return false;
		}
	}
	return true;
}
console.log(isPrime(3));

//algorithm optimization
function isPrime2(n)
{
	if(n<=1){
		return false;
	}
	if(n<=3){
		return true;
	}
	if(n%2==0||n%3==0)
	{
		return false;
	}
	for (var i = 5; i*i <=n; i+=6) {
		if(n%i==0 || n%(i+2)==0){
			return false;
		}
	}
	return true;
}

console.log(isPrime2(11));

//Prime Factorization
function primeFactors(n)
{
	while(n%2==0)
	{
		console.log(2);
		n=n/2;
	}
	for (var i = 3; i < n; i+=2) {
		while(n%i==0)
		{
			console.log(i);
			n=n/i;
		}
	}
	if(n>2){
		console.log(n);
	}
}

primeFactors(7);

function modularExponentiation(base, exponent, modulus){
	return (base**exponent)%modulus;
}
console.log(modularExponentiation(16,85,16));

//modular exponentiation optimization
function modularExponentiation2(base, exponent, modulus) {
	if(modulus==1) return 0;
	var value = 1;
	for (var i = 0; i < exponent; i++) {
		value = (value*base)%modulus;
	}
	return value;
}
console.log(modularExponentiation2(16,850,51));

//Print all prime less than n
function allPrimesLessThanN(n) {
	for (var i = 0; i < n; i++) {
		if(isPrime2(i))
		console.log(i);	
	}
}
allPrimesLessThanN(15);

//ugly numbers
/**
To do this, divide the number by the divisors (2, 3, 5) until it
cannot be divided without a remainder. If the number can be
divided by all the divisors, it should be 1 after dividing everything.

**/
function maxDivide(number, divisor)
{
	while(number%divisor==0)
	{
		number=number/divisor;
	}
	return number;
}
function isUgly(number){
	 number = maxDivide(number,2);
	 number = maxDivide(number,3);
	 number = maxDivide(number,5);
	 return number===1;
}
console.log(isUgly(12));

function arrayNUglyNumbers(n)
{
	var counter = 0, currentNumber = 1, uglyNumbers = [];

	while(counter!=n)
	{
		if(isUgly(currentNumber))
			counter++;
		{
			uglyNumbers.push(currentNumber);
		}
		currentNumber++
	}
	return uglyNumbers;

}
console.log(arrayNUglyNumbers(10));
// my concise solution to codility's problem on the number of prime 
// a number has. It's working fine, but it's time and space complexity can
// improved upon.
function printFactorofN(n)
{
	var factors = [];
	for (var i = 1; i <= n; i++) {
		if(n%i==0)
		{
			//n=n/i;
			factors.push(i);
			//console.log(i);
		}
	}
	console.log(factors.length);
}
printFactorofN(483);
//100, 1900
// function to print the century of a year.
// I love this beautiful solution to code signal's algorithm challenge
function solution(year)
{	
	if(year<=100){
		for (var i = 1; i <= 100; i++) {
			return 1;
		}
	}
	else{
		for (var j = 101; j <=year; j++) {
			if(year%100>0)
			{
				return Math.ceil(year/100);
			}
			else if(year%100==0)
			{
				return year/100;
			}
		}
 	}
}
console.log(solution(1900));



