/** 
 * 中心索引：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和
 * 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 * 输入：
    nums = [1, 7, 3, 6, 5, 6]
    输出：3
    解释：
    索引 3 (nums[3] = 6) 的左侧数之和 (1 + 7 + 3 = 11)，与右侧数之和 (5 + 6 = 11) 相等。
    同时, 3 也是第一个符合要求的中心索引。
*/

/** 
 * 思路：
 * S 是数组的和，当索引 i 是中心索引时，位于 i 左边数组元素的和 leftsum 满足 S - nums[i] - leftsum。
 * 我们只需要判断当前索引 i 是否满足 leftsum==S-nums[i]-leftsum 并动态计算 leftsum 的值。
*/
var list = [1, 2, 3] //[1, 7, 3, 6, 5, 6]
var provitIndex = function (list) {
    let  sum = list.reduce((a,b) => a+b) 
    let leftSum = 0
    for(let i=0;i<list.length;i++){
        if (sum - list [i] - leftSum == leftSum) {
            return i
        } else {
            leftSum += list[i]
        }
    }
    if (leftSum == sum) {
        return -1
    }
}
console.log(provitIndex(list))