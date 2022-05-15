import "strconv"

func isPalindrome(x int) bool {
    str := strconv.Itoa(x)
    
    for i, _ := range str {
        if str[i] != str[len(str) - 1 - i] {
            return false
        }
    } 
    return true
}