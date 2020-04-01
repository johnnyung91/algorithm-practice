function shapeArea(n) {
    // n = 1, area = 1 --- 1 + 0
    // n = 2, area = 5 --- 4 + 1
    // n = 3, area = 13  --- 9 + 4
    // n = 4, area = 25 --- 16 + 9
    return (n * n) + [(n-1) * (n-1)]
}
