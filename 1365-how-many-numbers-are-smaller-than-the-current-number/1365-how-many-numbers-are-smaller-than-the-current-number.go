func smallerNumbersThanCurrent(nums []int) []int {
    
    var list []int
    
    for _, num := range nums {
        count := 0
        
        for i, _ := range nums {
            if nums[i] < num {
                count = count + 1
            }
        }
        
        list = append(list, count)
    }
    
    return list
}