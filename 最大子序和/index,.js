var maxSubArray = function (nums) {
    var max = nums[0];
    var add = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (add < 0) {
            // 记录当前的数小于0 那么抛弃之前的 重新开始从 nums[i]开始
            add = nums[i]
        } else {
            add += nums[i];
        }
        max = Math.max(max, add);
    }
    return max;
};
var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length - 1; i++) {
        const m = nums.indexOf(target - nums[i]);
        if (m !== -1 && m !== i)
            return [i, m]
    }
};