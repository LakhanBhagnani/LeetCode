/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//***********************Moore's Voting Algorithm *************/

/*                      Pseudo code 

        Initialize two variables: count and candidate. Set count to 0 and candidate to an arbitrary value.
        Iterate through the array nums:
            a. If count is 0, assign the current element as the new candidate and increment count by 1.
            b. If the current element is the same as the candidate, increment count by 1.
            c. If the current element is different from the candidate, decrement count by 1.
        After the iteration, the candidate variable will hold the majority element.
*/
let nums = [2,3,2,3,3,2,3]
let candidate = Infinity; count = 0
var majorityElement = function (nums) {

    for (let i = 0; i < nums.length; i++) {

        if (count == 0) candidate = nums[i]
        if (nums[i] == candidate)
            count++;
        else
            count--;
    }

    return candidate

};

console.log("Majority element is ", majorityElement(nums))