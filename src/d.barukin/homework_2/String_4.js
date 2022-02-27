function isIsogram (string) {
    return !string.match(/([a-z]).*\1/i);
}
isIsogram ("Dermatoglyphics")
isIsogram ("aba")
isIsogram ("moOse")
isIsogram (" ")