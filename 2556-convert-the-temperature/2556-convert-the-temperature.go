func convertTemperature(celsius float64) []float64 {
    var k = celsius + 273.15
    var f = celsius * 1.8 + 32

    return []float64{k, f}
}