func twoSum(nums []int, target int) []int {
    
    obj := make(map[int]int)

    for i, val := range nums {
       var check int = target - val

        if _, ok := obj[check]; ok {

            return []int{obj[check], i}
        } else {
            obj[val] = i
        }
    }
    return []int{}
}