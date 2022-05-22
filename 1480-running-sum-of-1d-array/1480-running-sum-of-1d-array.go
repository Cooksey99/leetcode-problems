func runningSum(nums []int) []int {
    
    var array []int
    
    for i, _ := range nums {
        
        sum := 0
        j := 0
        for j <= i {
            sum += nums[j]
            j += 1
        }
        
        array = append(array, sum)
    }
    
    return array
}