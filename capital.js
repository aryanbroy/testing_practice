function capitalize(string) {
    let firstString = string.charAt(0);
    const newString = string.replace(firstString, firstString.toUpperCase()) ;
    return newString;
}

module.exports = capitalize;