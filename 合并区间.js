/** 
 * 合并区间
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 示例1：
 * 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 示例 2：
 * 输入: intervals = [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var intervals =  [[1,4],[4,5]] //[[1,3],[2,6],[8,10],[15,18]]
var merge = function (intervals) {
    let result = []
    if (intervals.length <= 1) {
        return intervals
    }
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i+1]) {
            if (intervals[i+1][0] <= intervals[i][1]) {
                result.push([intervals[i][0],intervals[i+1][1]])
                i += 1
            } else {
                result.push(intervals[i])
            }
        } else {
            let lastItem = result[result.length-1]
            if (lastItem[1] >= intervals[i][0]) {
                result[result.length-1] = [lastItem[0],intervals[i][1]]
            } else {
                result.push(intervals[i])
            }
        }
    }
    return result
}