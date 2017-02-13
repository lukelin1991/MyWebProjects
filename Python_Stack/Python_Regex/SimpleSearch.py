import re
def get_matching_words(regex):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
    matches = []
    for word in words:
        if re.search(regex,word):
     	      matches.append(word)
    return matches
# 1. All words that contain a "v"
print get_matching_words(r"v")
# 2. All word sthat contain a double-"s"
print get_matching_words(r"s{2}")
# 3. All words that end with an "e"
print get_matching_words(r"e$")
# 4. All words that contain a "b", any character, then another "b"
print get_matching_words(r"b.b")
# 5. All words that contain a "b", at least one character, then another "b"
print get_matching_words(r"b+[a-z]+b")
# 6. All words that contain a "b", any number of characters (including zero), then another "b"
print get_matching_words(r'b[a-z]*b')
# 7. All words that include all five vowels in order
print get_matching_words(r'a[a-d, f-h, j-n, p-t, v-z]*e[a-d, f-h, j-n, p-t, v-z]*i[a-d, f-h, j-n, p-t, v-z]*o[a-d, f-h, j-n, p-t, v-z]*u')
# 8. All words that only use the letters in "regular expression" (each letter can appear any number of times)
print get_matching_words(r'^[regularexpression]+$')
# 9. All words that contain a double letter
print get_matching_words(r'([a-z])(\1)')
