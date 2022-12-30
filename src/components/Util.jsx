export default function capitalize(lowerCase) {
    const words = lowerCase && lowerCase.split("-")
    // words && console.log(words)
    for (let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
    }
    return words.join('-')
}