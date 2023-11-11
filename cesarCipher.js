let a = [];
function stringToNum(string){
    for(let i = 0; i<string.length; i++){
        a.push(string.charCodeAt(i));
        
    }
    return a;
}

let test = [];

function shift(string, key){
    stringToNum(string).forEach((num) => {
        let index = num + key;
        if(index > 122){
            index = index - 26;
            test.push(index);
        }
        else{
            test.push(index);
        }
    })
    return test;
}

let final = [];

function cipher(string, key){
    shift(string, key).forEach((number) => {
        if(number < 97){
            final.push(" ");
        }
        else{
            let x = String.fromCharCode(number);
            final.push(x);
        }
        
    });
    console.log()
    return final.join("");
}

module.exports = cipher;