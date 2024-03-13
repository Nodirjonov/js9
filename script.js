
let arrays = ["Apple","Non","uzum","Aziza","Aka","level"]
let palindrom = [];
let nonpalindrom = [];



for(let word of arrays) {
    let lower = word.toLowerCase();
    let method = lower.split("").reverse().join("");
    if(lower === method){
        palindrom.push(word)
    }else{
        nonpalindrom.push(word)
    }
}

console.log(palindrom);

console.log(nonpalindrom);