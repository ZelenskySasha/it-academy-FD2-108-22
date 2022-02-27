function countPositivesSumNegatives (array) {
    const answer = []
    let positiveCount = 0
    let negativeSum = 0

    if (array && array.length) {
      for (let i = 0; i < array.length; i++) {
        if (array [i] > 0) {
            positiveCount += 1
        } else {
            negativeSum += array [i]
        }
      }
      answer.push(positiveCount)
      answer.push(negativeSum)
    }
    return answer
}

countPositivesSumNegatives ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])