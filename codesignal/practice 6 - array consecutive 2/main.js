function makeArrayConsecutive2(statues) {
    var counter = 0;
    let sorted = statues.sort((a,b) => a - b)
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i+1] - sorted[i] !== 1) {
            counter += (sorted[i+1] - sorted[i] - 1);
        }
    }
    return counter;
}
