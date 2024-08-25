const romanToDecimal = (roman) => {
    const romanDecimalMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000  
    }
    const romanToDecimalArray = roman.split("").map(romanNumeral => romanDecimalMap[romanNumeral]);
    return romanToDecimalArray.reduce((result, currentValue, index, array) =>
    {
        if (currentValue < array[index + 1]) return result - currentValue;
        else return result + currentValue;
    }, 0)
}
