func shuffle(nums []int, n int) []int {
    var temp []int
    
    for i := 0; i < n; i++ {
        temp = append(temp, nums[i])
        temp = append(temp, nums[i + n])
    }
    return temp
}