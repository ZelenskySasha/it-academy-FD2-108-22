function highestAndLowest(string) {
    string = string.split(" ");
    return Math.max.apply(null, string) + " " +  Math.min.apply(null, string)
  }
  highestAndLowest('-1 2 3 4 5 -6');