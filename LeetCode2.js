//Add two numbers
/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807
*/

function generateNumber(arr){
    let len=arr.length;
    let num=0;
    for(let i=len-1;i>=0;i--){
        num=num+(arr[i]*Math.pow(10,i)) //to make a number 342 ==> 3*100(10 to the power 2) + 4*10(10 to the power 1)+ 2*1(10 to the power 0) = its postition in array
    }
    return num
}

function disIntegrateNumber(num){
    let str=num.toString();
    str = str.split(''); //Creates an array of strings 
    num_array=[];
    for(let i=str.length-1;i>=0;i--){
       num_array.push(parseInt((str.pop()))); // from the array above popping the last element and convert that string to number and pushing them in the new array
    }
    return num_array

}

var l1 = [2,4,3], l2 = [5,6,4]
var addTwoNumbers = function(l1, l2) {
    let sum = generateNumber(l1)+generateNumber(l2);
    let sumarray= disIntegrateNumber(sum);
    return sumarray;
};

addTwoNumbers(l1,l2);
