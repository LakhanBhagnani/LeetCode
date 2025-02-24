/*Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
*/
let nums=[3,2,2,3,2,3,1,3,6];
let value_remove=3
// var removeElement = function (nums, val) {

//WAY 1
//    let new_arr= nums.filter(e => {return e!=val})
//      nums=[];
//      nums=new_arr;
//     console.log("In function", nums);
//      return nums;
// }

//WAY2
// var removeElement = function (nums, val) {
//     nums = (this.nums).map(ele=>{return ele!=val})
// }

//WAY 3
let i,j
var removeElement = function (nums, val) {
    for(i=0,j=nums.length-1;i<nums.length;i++){
        if(i<j){
        if(nums[j]==val){ j--;}
        if(nums[i]==val){
            let a=nums[i];
            nums[i]=nums[j];
            nums[j]=a

        }}
        else break;
    }
    nums.splice(i);
};


removeElement(nums,value_remove)

console.log(nums);