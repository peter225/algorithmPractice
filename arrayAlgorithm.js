//adjacent element producte
//I love this, it's an excellent solution of mine to 
// code signal's adjacent element product problem
function solution1(inputArray)
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
return Math.max.apply(null,answers);
	
}
console.log(solution1([1,16,7,8]));
/**
function solution(inputArray)
{
	var sortedArray = [];
	
	inputArray.sort(function(a,b){return a-b});
	sortedArray.push(...inputArray);
	return sortedArray;
	

}
**/
//n-interesting polygon

function areaOfNInterestingPolygon(n) {
    var area = 0;
    area = n*n + (n-1)*(n-1);
    return area;
    
}
console.log(areaOfNInterestingPolygon(5));

//binary gap
function greatestBinaryGap(n)
{
	var binaryEquivalent = n.toString(2);
	binaryEquivalent.toString();
	binaryEquivalent = binaryEquivalent.split("");
	if (binaryEquivalent.length<=2) 
	{
		return 0;
	}

	else
	{

		var arrayOfZeros = [];
		for (var i = 0; i < binaryEquivalent.length; i++) {
			arrayOfZeros.push(binaryEquivalent);
				//push the length of each binary gap to an array
				for (var j = 0; j < arrayOfZeros.length; j++) {
					if (binaryEquivalent[i]==1&&binaryEquivalent[i+j]==1) {
						
					}
				}
			
			
		}
		return arrayOfZeros;
	}
	//return binaryEquivalent;

	
}
console.log(greatestBinaryGap(9));

function solution(statues) {
    var sorted = statues.sort(function(a,b){return a-b});
    //return sorted[statues.length-1]-sorted[0];
    //return statues;
    var arrayLength = (sorted[statues.length-1]-sorted[0]);
    var newArray = [];
    if(sorted[0]==0)
    {
    	for (var i = sorted[0]; i <= sorted[0]+arrayLength; i++) {
    		newArray.push(i);
    	}
    }
    else
    {
    	for (var i = sorted[0]; i <= sorted[0]+arrayLength; i++) {
    		newArray.push(i);
    	}
    }
    
    return (newArray.length-statues.length);
}
var a = [6,2,3,8];
console.log(solution(a));

function solution2(sequence) {

    for(var i=0; i<sequence.length;i++){
        sequence.pop(i);
    }
    console.log(sequence);
    var newSequence = sequence.sort(function(a,b){return a-b})
    if(sequence==newSequence)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var s = [1,3,2];
solution2(s);


function solution3(n, a) {
    n = a.length;
    if(n>1)
    {
    	var b = [];
    
    	for(var j = 0; j<n; j++)
    	{
        	if((j-1)<0)
        	{
            	a[j-1]=0;
            	b.push(a[j-1]+a[j]+a[j+1]);
        	}
        	else if(j>n)
        	{	
        		a[j] = 0;
            	b.push(a[j-1]+a[j]+a[j+1]);
        	}
        	else if((j+1)>=n)
        	{	
        		a[j+1] = 0;
            	b.push(a[j-1]+a[j]+a[j+1]);
        	}
        	else
        	{
        		b.push(a[j-1]+a[j]+a[j+1]);
        	}
        
    	}
    	return b;
    }
    else
    {
    	return a;
    }
   	
}
var arr = [1,6];
console.log(solution3(2,arr));

/**
Javascript array helper functions include push, slice, splice, pop
**/
//FIND TWO ARRAY ELEMENTS IN AN ARRAY THAT ADD UP TO A NUMBER
function findSum(arr1, weight) {
 for (var i=0; i<arr1.length; i++){
    for (var j=i+1; j<arr1.length; j++) {
        if (arr1[i]+arr1[j]==weight){
            return [arr1[i],arr1[j]];
        }
    }
 }
 return -1;
}
var test1 = [1,2,3,4];
console.log("Find elements that sum to the given weight")
console.log(findSum(test1,6));


//optimizing findSum() to O(n)
function findSumBetter(arr, weight) {
 var hashtable = {};

 for (var i=0, arrLength=arr.length; i<arrLength; i++) {
    var currentElement = arr[i],
    difference = weight - currentElement;

    // check the right one already exists
    if (hashtable[currentElement] != undefined) {
        return [arr[i], hashtable[currentElement]];
    } else {
        // store index
        hashtable[difference] = arr[i];
    }
 }
 return -1;
}
var a = [2,3,4,5,6];
console.log(findSumBetter(a,9))
var returnStudents = ()=>{
var students = ['peter','john','emmanuel','maryam'];
students.forEach((element,index)=>{
	console.log(element);
});
}
returnStudents();

function miniMaxSum(arr) {
    // Write your code here
    var arraySum = [];
    //var a = 0;
    
    for(var i=0; i<arr.length; i++)
    {
        var a =0;
        if(i==0)
        {
            a=arr[i+1]+arr[i+2]+arr[i+3]+arr[i+4]
            arraySum.push(a)
        }
        else if(i==1)
        {
            a=arr[i-1]+arr[i+1]+arr[i+2]+arr[i+3]
            arraySum.push(a)
        }
            
        else if(i==2)
        {
            a=arr[i-1]+arr[i-2]+arr[i+1]+arr[i+2]
            arraySum.push(a)
        }
            
        else if(i==3)
        {
            a=arr[i-1]+arr[i-2]+arr[i-3]+arr[i+1]
            arraySum.push(a)
        }
            
        else if(i==4)
        {
            a=arr[i-1]+arr[i-2]+arr[i-3]+arr[i-4]
            arraySum.push(a)
        }
    }
    //console.log(arraySum)
    console.log(Math.min.apply(null, arraySum) + ' ' + Math.max.apply(null, arraySum))
    //console.log(Math.max.apply(null, arraySum))

}
var test = [1,2,3,4,5]
miniMaxSum(test)


function almostIncreasingSequence(sequence) {
    let flag = 0;
    for (let i = 0; i < sequence.length; i++) { 
      if (sequence[i] >= sequence[i+1]){
          flag++; 
          if(i !== 0 && sequence[i] >= sequence[i+2]){
              if(sequence[i-1] >= sequence[i+1])
                  return false;
          }
      }
  } 
  return flag < 2;
}

function matchingStrings(strings, queries) {
    // Write your code here
    var countArray = [];
    for(var i=0; i<queries.length; i++)
    {
        
        var count=0;
        //var a = queries[i];
        for(var j in strings)
        {
            if(queries[i]==strings[j])
                count++
                
        }
        countArray.push(count);
        
        
    }
    return countArray;

}

function lonelyinteger(a) {
    // Write your code here
    var count = {};
    for(var element of a)
    {
        if(count[element])
        {
            count[element]+=1;
        }
        else
        {
            count[element] =1
        }
    }
    for(var i in count)
    {
        if(count[i]==1)
            return i;
        
        
    }

}
var t = [0,0,5,5,1,6,1];
lonelyinteger(t)

function lonelyinteger1(a) {
    var res = 0;
    for (let i=0; i < a.length; i++){
        res = res ^ a[i]
        console.log(res)
    }
    return res;
}

function lonelyinteger2(a) {
let unique = a.filter (value => { 
return a.indexOf(value) === a.lastIndexOf(value) 
})
return unique[0]
}


function arraySlice(arr, beginIndex, endIndex) {
    if(!beginIndex && ! endIndex)
    {
        return arr;
    }
    
    else if(beginIndex && !endIndex)
    {
        endIndex = arr.length;
        var sliced = [];
        for (var i = beginIndex; i < endIndex; i++) {
            
                sliced.push(arr[i]);
            
        }
        return sliced;
    }
    else
    {
        
        var sliced = [];
        for (var i = beginIndex; i < endIndex; i++) {
            
                sliced.push(arr[i]);
            
        }
        return sliced;
    }
}
t = [2,3,4,5];
console.log(arraySlice(t,0,1))

//find the median of two sorted arrays of the same size

function medianOfArray(arr)
{
  arr.sort();
  for(var i = 0; i < arr.length; i++) {
    if(arr.length%2==0)
    {
        var mid = arr[Math.floor((arr.length-1)/2)];
        var mid1 = arr[Math.floor((arr.length-1)/2) +1];
        return(mid+mid1)/2;
    }
    else
    {
        return arr[(arr.length-1)/2];
    }
  }
}


console.log(medianOfArray([1,2,3,4,5]))
//FIND COMMON ELEMENTS IN K-SORTED ARRAYS
function commonElement(kArray)
{
    var hashmap = {};
    var answer = [];
    var last;
    for (var i = 0; i < kArray.length; i++) {
        last = null;
        for (var j = 0; j < kArray[i].length; j++) {
            //kArray[i][j]
            if (last!==kArray[i][j]) {
                if (!hashmap[kArray[i][j]]) {
                    hashmap[kArray[i][j]]=1;
                }
                else{
                    hashmap[kArray[i][j]]++
                }
            }
            last = kArray[i][j];
        }
    }
    //console.log(hashmap);
    for (var prop in hashmap) {
        if (hashmap[prop]==kArray.length) {
            answer.push(parseInt(prop));
        }
    }
    console.table(answer)
}
commonElement([1,2,3],[1,2]);


//Javascript uses jagged array
//a jagged array is an array whose element is an array

function Matrix(rows, columns) {
 var jaggedarray = new Array(rows);
 for (var i=0; i < columns; i +=1) {
    jaggedarray[i]=new Array(rows);
 }
 return jaggedarray;
}
console.log(Matrix(3,3));


function diagonalDifference(arr) {
    // Write your code here
    var primaryDiagonal = [];
    var secondaryDiagonal = [];
    for(var i=0; i<arr.length; i++)
    {
        for(var j=0; j<arr[i].length; j++)
        {
            if(i==j)
            {
                primaryDiagonal.push(arr[i][j]);
            }
            
        }
        for(var k=arr[i].length-1; k>=0; k--)
        {
            if((k+i) == arr.length-1)
            secondaryDiagonal.push(arr[i][k]);
        }
        
    }
    //summing and taking difference
    var sum_p = 0;
    for(var p=0; p<primaryDiagonal.length; p++)
    {
        sum_p+=primaryDiagonal[p];
    }
    sum_p;
    
    var sum_s = 0;
    for(var s=0; s<secondaryDiagonal.length; s++)
    {
        sum_s+=secondaryDiagonal[s];
    }
    sum_s;
    return Math.abs(sum_p - sum_s);
}
console.log(diagonalDifference([[1,2,3],[3,4,5],[6,7,8]]))

function diagonalDifference1(arr) {
    var diag1 = 0;
    var diag2 = 0;
    
    for (var i = 0; i < arr.length; i++)
    {
        diag1 += arr[i][i];
        diag2 += arr[arr.length - i - 1][i];
    }
    
    return Math.abs(diag1 - diag2);
}

//Tic-tac toe 
//To do this, check all three rows using a for loop, check all columns using a for loop, and
//check diagonals.
function checkRow(rowArr, letter)
{
    for(var i=0; i<3; i++)
    {
        if(rowArr[i]!=letter)
            return false;
    }
    return true;
}
function checkColumn(gameBoardMatrix, columnIndex, letter) 
{
    for(var i=0; i<3; i++)
    {
        if (gameBoardMatrix[i][columnIndex]!=letter)
            return false;
    }
    return true;
}
function ticTacToeWinner(gameBoardMatrix, letter)
{
    //check rows
    var rowWin =checkRow(gameBoardMatrix[0], letter)||
                checkRow(gameBoardMatrix[1], letter)||
                checkRow(gameBoardMatrix[2], letter)
    //check column
    var colWin =checkColumn(gameBoardMatrix, 0, letter)||
                checkColumn(gameBoardMatrix, 1, letter)||
                checkColumn(gameBoardMatrix, 2, letter)

    //check diagonal
    var diagonalWinLeftToRight = (gameBoardMatrix[0][0]==letter) && 
                              (gameBoardMatrix[1][1] == letter) &&
                              (gameBoardMatrix[2][2] == letter)

    var diagonalWinRightToLeft = (gameBoardMatrix[0][2]==letter) && 
                              (gameBoardMatrix[1][1] == letter) &&
                              (gameBoardMatrix[2][0] == letter)



    return rowWin || colWin || diagonalWinLeftToRight ||
            diagonalWinRightToLeft;


}


console.log(ticTacToeWinner([['O','-','X'],['-','O','-'],['-','X','O']],'O'))

//matrix rotation
function rotateMatrix90Right(mat)
{
    var N = mat.length;
    for(var i=0; i<N; i++)
    {
        for(var j=i; j<mat[i].length; j++)
        {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
            
        }
    }
    for(var i=0; i<N; i++)
    {
        mat[i].reverse()
    }
    return mat;
    
    
}
console.log(rotateMatrix90Right([[1,2,3],
                                 [4,5,6],
                                 [7,8,9]]))


//matrix rotation
function rotateMatrix90Left(mat)
{
    var N = mat.length;
    for(var i=0; i<N; i++)
    {
        for(var j=i; j<mat[i].length; j++)
        {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
            
        }
    }
    var rotated = [];
    for(var i=N-1; i>=0; i--)
    {
        rotated.push(mat[i])
    }
    return rotated;
    
    
}
console.log(rotateMatrix90Left([[1,2,3],
                                 [4,5,6],
                                 [7,8,9]]))

console.log(rotateMatrix90Left([[1,0,1],
                                 [0,0,1],
                                 [1,0,1]]))


function sockMerchant(n, ar) {
    // Write your code here
    //var count = 0
    var colors = {}
    for(var i=0; i<n; i++)
    {
        if(colors[ar[i]])
        {
            
            colors[ar[i]]++
        }
        else
        {
            colors[ar[i]]=1
        }
    }
    //return colors;
    var sum = 0;
    for(var i in colors)
    {
        sum+=Math.floor(colors[i]/2);
    }
    return sum;
    
}
console.log(sockMerchant(9,[10,20,20,10,10,30,50,10,20]))

//2D array hour-glass code challenge


//New year chaos
Array.prototype.swap = function(a,b){
    let init = Number(this[a])
    this[a] = this[b]
    this[b] = init
}

function minimumBribes(q){
    let bribes = 0
    for(let i=q.length-1; i>=0; i--){
        if(q[i]==i+1)
        {
           continue; 
        }
            
        if((i-1>=0) && (q[i-1]==i+1))
        {
            bribes++
            q.swap(i,i-1)
        }
        else if((i-2)>=0 && (q[i-2]==i+1))
        {
            bribes+=2
            q.swap(i-2,i-1)
            q.swap(i-1,i)
            q[i]=i+1
        }
        else
        {
            console.log('Too chaotic')
            return
        }
    }
    console.log(bribes)
}

//Minimum swaps
/*
7 2 1 1 1 1
1 1 2 2 2 2
3 3 3 3 3 3
2 7 7 4 4 4
4 4 4 7 5 5
5 5 5 5 7 6
6 6 6 6 6 7
*/

function minimumSwaps(arr){
    let swaps = 0
    var min
    for(let i=0; i<arr.length; i++){
        min = i
        for(let j=i+1; j<=arr.length; j++){
            
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(i!=min){
            arr.swap(i,j)
            swap++
        }
        
    }
    console.log(swaps)
}

function minimumSwaps(arr){
    let swaps = 0
    //var min
    for(let i=0; i<arr.length; i++){
      if(arr[i]!=i+1){
          arr.swap(i, arr[i]-1)
          i--
          swaps++
      }  
        
        
    }
    return swaps
}