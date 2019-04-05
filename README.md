## 每日两题 LeetCode

### LeetCode 题序

> 53, 1, 15，

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

### 三数之和 - 15

给定一个包含 *n* 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 *a，b，c ，*使得 *a + b + c =* 0 ？找出所有满足条件且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

```
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

> 数组放进二维数组前通过可以通过 Object 来判断是否有相同的数组

```javascript
let obj = {}
let twoArr = [];
let arr = [1,2,3]
if(!obj[arr]){
    twoArr.push(arr);
    obj[arr] = true;
}
// 那么再次添加 [1,2,3] 就应为 obj[arr] == true 所以添加不进去。
```

```javascript
var threeSum = function(nums) {
    var result = new Array();
    var len = nums.length;
    var flag = 0;
    var hash = {};
    // 排成正序
    nums.sort((a, b) => {
        return a-b;
    });
    if(nums[0] > 0 || nums[len - 1] < 0) return result;
    for(var i = 0; i < len; i++){
        if(nums[i] === nums[i-1]) continue;
        flag = 0 - nums[i];
        // 通过两个指针来选取元素
        var start = i + 1, end = len - 1;
        while(start < end){
            var middle = new Array();
            if(nums[start] + nums[end] < flag){
                start ++;
            } else if(nums[start] + nums[end] > flag){
                end--;
            } else {
                middle.push(nums[i]);
                middle.push(nums[start]);
                middle.push(nums[end]);
                if(!hash[middle]){
                    hash[middle] = true;
                    result.push(middle);
                }
                start += 1;
                end -= 1;
                // 相同元素 。 那么指针再移动
                while(start < end && nums[start] === nums[start - 1]){
                    start += 1;
                }
                while(start < end && nums[end] === nums[end + 1]){
                    end -= 1;
                }
            }
        }
    }
    return result;
   
    
};
```

### 下一个排序 - 31

实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须**原地**修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
`1,2,3` → `1,3,2`
`3,2,1` → `1,2,3`
`1,1,5` → `1,5,1`

```javascript
var nextPermutation = function(nums) {
    for (var i = nums.length-1; i > 0; i--) {
        if (nums[i] > nums[i-1]) {
            var j = i;
            while (nums[j] > nums[i-1] && j <= nums.length-1) {
                j++;
            }
            swap(j-1, i-1);
            reserve(i);
            return
        }
    }
    if (i == 0) {
        reserve(i)
    }
    function reserve(start){
        var i = start, j = nums.length-1;
        while (i <=j) {
            var temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
            j--;
        }
        return nums
    }
    function swap(i, j) {
        var temp = nums[j]
        nums[j] =nums[i];
        nums[i] = temp;   
    }
};
```

