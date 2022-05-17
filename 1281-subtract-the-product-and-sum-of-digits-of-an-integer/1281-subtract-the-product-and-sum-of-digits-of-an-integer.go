func subtractProductAndSum(n int) int {
    sum := 0
    product := 1
    
    var temp int
    
    for n > 0 {
        temp = n % 10;
        sum = sum + temp
        product = product * temp
    
        n = n / 10
    }
    
    
    return product - sum
    
}