//Roman to Integer
var s = ['XIX','LVIII','MCMXCIV'];                  //INPUT

var romanToInt = function (s) {
    let romans = {                                  //MAP 
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let number = 0;
    //console.log(s.length);
    for (let i = s.length - 1; i >= 0; i--) {

        let curr = s[i];                            //fetch current character

        if (curr == 'I') {                          // 'I' can be placed before V (5) and X (10) to make 4 and 9. 
            let nextCurr = s[i + 1];
            if (nextCurr == 'V' || nextCurr == 'X')
                number -= romans[curr]
            else
                number += romans[curr]

        } else if (curr == 'X') {                   // 'X' can be placed before L (50) and C (100) to make 40 and 90. 

            let nextCurr = s[i + 1];
            if (nextCurr == 'L' || nextCurr == 'C')
                number -= romans[curr]
            else
                number += romans[curr]

        }else if (curr == 'C') {                    // 'C' can be placed before D (500) and M (1000) to make 400 and 900.
            let nextCurr = s[i + 1];
            if (nextCurr == 'D' || nextCurr == 'M')
                number -= romans[curr]
            else
                number += romans[curr]

        }  else {
            number += romans[s[i]];                 //Otherwise just add the place value of it.
        }
        //console.log("i",i+1,"num", number)
    }
    return number;

};

s.forEach(e=> console.log(romanToInt(e)));          //ITERATE through all the strings in the inputs
