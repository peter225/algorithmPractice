// function to check palindrome
function isPalindrome(inputString)
{
	if(inputString == reverseString(inputString))
	{
		return true;
	}
	else
	{
		return false;
	}
	function reverseString(inputString)
	{
		var reversed = "";
		for (var i = inputString.length -1; i >=0; i--) {
			reversed+=inputString.charAt(i);
		}
		return reversed;
	}
}
console.log(isPalindrome('aba'));


//function to count occurrence of a certain letter in a string

function numberOfOccurrence(character)
{
	//let character="";
	typeof(character) == "string";
	var str = "He's my king from this day until his last day";
	var count = 0;
	var position = str.indexOf(character);
	while(position!== -1)
	{
		count++;
		position+=str.indexOf(character, position++);
	}
	return count;

}
//console.log(numberOfOccurrence("a"));