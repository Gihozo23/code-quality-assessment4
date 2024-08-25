function solution (roman) {
    const romanNumbers = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000  
    }
    const romanArray = roman.split("");
    let result = 0;
    for (let i = romanArray.length - 1; i >= 0; i -= 2) {
        let currentValue = romanArray[i] ;
        result += romanNumbers[currentValue];
        console.log(romanNumbers[romanArray[i - 1]])
        if (romanNumbers[romanArray[i + 1]]) {
            if (romanNumbers[currentValue] < romanNumbers[romanArray[i + 1]]) result -= romanNumbers[currentValue] * 2;
        }
        if(romanNumbers[romanArray[i - 1]])
        if (romanNumbers[currentValue] > romanNumbers[romanArray[i - 1]] ) { result -= romanNumbers[romanArray[i - 1]] }
        else result += romanNumbers[romanArray[i - 1]];
    }
        return result;
}
console.log(solution('IV') )//, 4));
console.log(solution('MMVIII') )//, 2008));
console.log(solution('MDCLXVI') )//, 1666));
console.log(solution('XXI') )//, 21));
console.log(solution('MCDLXXVI') )//, 1));