function reverseString(string) {
    let newString = "";
    const str = string.split("").reduce((prev, current) =>
        current + prev,"")


    // for (let i = string.length - 1; i >=0; i--){
    //     newString = newString + string[i];
    // }
    // return newString;
    return str;
}

module.exports = reverseString;