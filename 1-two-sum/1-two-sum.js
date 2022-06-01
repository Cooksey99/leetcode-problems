/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
func twoSum(nums []int, target int) []int {

    mapVal := make(map[int]int)
	result := []int{}

    for index, num := range nums {
        if ele, mapping := mapVal[target - num]; mapping {
            result = []int{ele,index}
        }

        mapVal[num] = index
    }
    return result
}