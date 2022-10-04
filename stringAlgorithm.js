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


	//let character="";
	//typeof(character) == "string";
	function numberOfOccurrence(character){
		var str = "He is my king from this day until his last day";
		var count = 0;
	 	var pos = str.indexOf(character);
	 	while (pos !== -1) {
	 		count++;
	 		pos = str.indexOf(character, pos + 1);
	 	}
	 	console.log(count);
	}

numberOfOccurrence('a');

//string algorithm for encryption
//precisely shortening algorithm of a given integer


var dictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" .split('');

function encodeId(num)
{
	var base = dictionary.length;
	var encoded = "";

	if (num === 0) {
		return dictionary[0];
	}
	else{
		while(num>0)
		{
			encoded+=dictionary[num%base];
			num = Math.floor(num/base);
		}
	}
	return reverseWord(encoded);
}
function reverseWord(inputString)
{
	var reversed = "";
	for (var i = inputString.length -1; i >=0; i--) {
		reversed+=inputString.charAt(i);
	}
	return reversed;
}
function decodeId(id)
{
	var base = dictionary.length;
	var decoded = 0;

	for (var i = 0; i < id.split('').length; i++) {
		decoded = decoded*base+dictionary.indexOf(id.charAt(i));
	}
	return decoded;

}
console.log(encodeId(11231230));
console.log(decodeId('VhU2'));

function timeConversion(s) {
    // Write your code here
    if(s.substring(8,10)=='PM'&& parseInt(s.substring(0,2))==12)
    {
        var change = s;
        return change.replace('PM', '');
    }
    
    else if(s.substring(8,10)=='AM'&& parseInt(s.substring(0,2))==12)
    {
        var change1 =parseInt(s.substring(0,2))-12;
        var a = '0';
        var formatted =a+change1.toString(); 
        for(var i=2;i<s.length;i++)
        {
        	
            formatted+=s.charAt(i);
        }
        return formatted.replace('AM','');
    }
    else if(s.substring(8,10)=='PM'&& parseInt(s.substring(0,2))>=1)
    {
        var change2 =parseInt(s.substring(0,2))+12;
        change2.toString(); 
        for(var i=2;i<s.length;i++)
        {
        
            change2+=s.charAt(i);
        }
        return change2.replace('PM', '');
    }
    else if(s.substring(8,10)=='AM' && parseInt(s.substring(0,2))>=1)
    {
        var change3 = s;
        return change3.replace('AM', '');
    }
    
    
}
var test = "12:58:00PM"
console.log(timeConversion(test))

function flippingBits(n) {
    // Write your code here
    var bin = n.toString(2);
    //console.log(bin)
    function addLeadingZeros(num, totalLength) {
        return num.padStart(totalLength, '0');
    }
    var changed = addLeadingZeros(bin, 32);
    console.log(changed.length)
    var flipped = "";
    for(var i=0; i<changed.length; i++)
    {
        if(changed.charAt(i)==0)
        {
            flipped+=changed.charAt(i).replace("0", "1");
        }
        else
        {
         	flipped+=changed.charAt(i).replace("1", "0");
        }
    }
    return parseInt(flipped,2);
}

function processData(input) {
    var inputs = input.split('\n');
    inputs.shift();
    inputs.forEach(function(i){
        console.log(~parseInt(i,10)>>>0);
    });
}

function pangrams(s) {
    // Write your code here
    
    
    var s_split = s.toLowerCase()
                    .replace(/\s/g,'')
                        .split('')
    
    var l_set = new Set(s_split);
    
    for(var i=0; i<10**3; i++)
    {
       if(l_set.size==26)
        {
            return "pangram"
        }
        else
        {
            return "not pangram"
        }
    }
}
