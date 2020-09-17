/** 
 * 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
*/

/** 
 * 示例1:
 * 输入：
    [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]
    输出：
    [
        [1,0,1],
        [0,0,0],
        [1,0,1]
    ]
*/
/** 
 * 示例 2：
 * 输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
*/
let list = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]
/** 
 * 方法一：额外储存空间方法
 * 先遍历数组，记录0元素所在的位置，并保存
 * 再次遍历数组，如果该行/列在标记的位置，则将其设置为0
*/
var setZeroes = function (list) {
    let column = [] , row = []
    for (let i = 0; i < list.length; i++) {
        let item = list[i] 
        for (let j = 0; j < item.length; j++) {
            if (item[j] === 0) {
                row.push(i)
                column.push(j)
            }
        }
    }
    for (let i = 0; i < list.length; i++) {
        let item = list[i]
        for (let j = 0; j < item.length; j++) {
            if (row.includes(i) || column.includes(j)) {
                list[i][j] = 0   
            } 
        }
    }
    console.log(list)
}
setZeroes(list)
/**
 * 复杂度分析
 * 时间复杂度：O(M×N)，其中 MM 和 NN 分别对应行数和列数。
 * 空间复杂度：O(M+N)O(M+N)。
**/
// 官方给出了三种方法，第二种方法和第三种方法不怎么明白

