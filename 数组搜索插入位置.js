/** 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
*/

var searchInsert = function (list,target) {
    let targetIndex = list.findIndex(x => x == target)
    let startindex = list.length / 2
    if (targetIndex && targetIndex != -1) {
        return targetIndex
    } 
    
    // 走到这里，说明数组中没有找到那个值
    // 接下来需要做的是 找到target应该放在数组中的哪个位置
    let middleVal = list[list.length /2]
    
    if (target > middleVal) { //说明target的值在右边。
        for (let i = startindex; i < list.length; i++) {
            if (list[i + 1]) {
                if (list[i] <= target && list[i+1] > target) {
                    list.splice(i+1,0,target)
                    return i+1
                } 
            } else {
                list.push(target)
                return list.length -1
            }
        }
    } else { //说明target的值在左边
        for (let i = 0; i < startindex; i++) {
            if (list[i+1]) {
                if (list[i] < target && target <list[i+1]) {
                    list.splice(i+1,0,target)
                    return i+1
                } else if (list[i] > target) {
                    list.splice(i,0,target)
                    return i
                }
            }
        }
    }
}
var list = [1,3,5,6]

// console.log(searchInsert(list,5)) // 2

// console.log(searchInsert(list,2)) // 1 

// console.log(searchInsert(list,7)) // 4

// console.log(searchInsert(list,0)) // 0

// console.log(searchInsert(list,-4)) //0
