## 每日两题 LeetCode

### 最大子序和 - 53

 给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**示例:**

```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

```javascript
var maxSubArray = function(nums) {
    var max = nums[0];
    var add = nums[0];
    for(var i=1;i<nums.length;i++){
        if(add < 0){
            // 记录当前的数小于0 那么抛弃之前的 重新开始从 nums[i]开始
            add = nums[i]
        }else{
            add += nums[i];
        }
        max = Math.max(max, add);
    }
    return max;  
};
```

### 两数之和 - 1

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那 **两个** 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例:**

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

```javascript
var twoSum = function(nums, target) {
  for (let i = 0; i <= nums.length -1; i++){
    const m = nums.indexOf(target - nums[i]);
    if (m !== -1 && m !== i)
      return [i, m]
  }
};
```

