func numberOfSteps(num int) int {
    steps := 0
    
    for num > 0 {
        if num % 2 == 0 {
            num = num / 2
        } else {
            num = num - 1
        }
        steps = steps + 1
    }
    return steps
}