func finalValueAfterOperations(operations []string) int {
    count := 0;
    
    for _, word := range operations {
        if word == "--X" || word == "X--" {
            count = count - 1;
        } else if word == "++X" || word == "X++" {
            count = count + 1;
        }
    }
    
    return count
}