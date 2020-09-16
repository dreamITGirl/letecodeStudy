/**给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。
 * 请你设计一种算法，将图像旋转 90 度。
 * 不占用额外内存空间能否做到？
**/
/** 
 * 示例一
 * 给定 matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ],
原地旋转输入矩阵，使其变为:[
                            [7,4,1],
                            [8,5,2],
                            [9,6,3]
                        ]
*/
/** 
 * 思路：
 * 看示例发现，最终的结果是原来的数组先反转后，得到的是
 * [
        [7,8,9],
        [4,5,6],   
        [1,2,3] 
    ]
    然后再由反转后的数组从行变成列
    也可以不反转，原来的数组从后向前遍历（这种就要考虑一下i的值）
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
    let result = []
    matrix = matrix.reverse()
    for (let i = 0; i <matrix.length; i++) {
        let item = matrix[i] 
        for (let j = 0; j < item.length; j++) {
            if (result.length < matrix.length) {
                result[j] = [item[j]]
            } else {
                result[j].push(item[j])
            }
        }
    }
    return result
}

var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
rotate(matrix)
 matrix = [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
]
rotate(matrix)