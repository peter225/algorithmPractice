// function to calculate the 
//greatest product of pairs in an array of integers
function solution(inputArray)
{
	//inputArray = [];
	var answers = [];
	for (var i = 0; i <=inputArray.length; i++) {
		
			
		if (i+1<inputArray.length) {
			var answer = 0;
			answer = inputArray[i]*inputArray[i+1];
			answers.push(answer);
		}
		
		
	}
return Math.max.apply(null, answers);
	
}
console.log(solution([1,16,7,8]));
/**
function solution(inputArray)
{
	var sortedArray = [];
	
	inputArray.sort(function(a,b){return a-b});
	sortedArray.push(...inputArray);
	return sortedArray;
	

}
**/
