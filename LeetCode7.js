/**
 * KEYBOARD ROW
 *  Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
 * @param {string[]} words
 * @return {string[]}
 */

var getrowNumber= function(eachCharacter){
    
    let s=["qwertyuiop","asdfghjkl","zxcvbnm"]
    for(let i=0;i<3;i++){
       // console.log(eachCharacter)
        if(s[i].indexOf(eachCharacter)!=-1){
           return i+1
        }
    }
 }
var findWords = function(words) {

    let WordsTypesInARow=[];
    words.forEach(word=>{
        let isTypedinaRow=true;
        let row_no=getrowNumber(word[0].toLowerCase()) 
        for(let i=1;i<word.length;i++){
            let curr_row=getrowNumber(word[i].toLowerCase())
            if(row_no!=curr_row){
                isTypedinaRow=false;
                break;
            }
            else{
                row_no=curr_row;
            }
            
        }
        if(isTypedinaRow) WordsTypesInARow.push(word)
    })

    return WordsTypesInARow;
}

console.log(findWords(["Hello","Alaska","Dad","Peace"]));