/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let low = 0, high = nums.length-1;
    let n = nums.length-1;
    let a = [-1,-1];
    while(low<=high) {
        let mid = low + parseInt((high-low)/2);
        if(nums[mid] === target) {
            if(nums[low]===target && nums[high]===target) {
                a[0] = low;
                a[1] = high;
                return a;
            } else if(nums[low]===target) {
                a[0] = low;
                high -= 1;
            } else if(nums[high]===target) {
                a[1] = high;
                low += 1;
            } else if(mid+1<=n && mid-1>=0 && nums[mid+1]===target && nums[mid-1]===target)             {
                low += 1;
                high -= 1;
            } else if(mid+1<=n && nums[mid+1]!==target) {
                a[1] = mid;
                high = mid;
            } else if(mid-1>=0 && nums[mid-1]!==target) {
                a[0] = low;
                low = mid;
            }
        } else if(nums[mid] < target) {
            low = mid + 1;
        } else if(nums[mid] > target) {
            high = mid - 1;
        }
    }
    return a;
};
