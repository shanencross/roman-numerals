function romanNumeral(number) {
	if (number >= 1 && number <= 4) {
		result = ""
    for (let i=0; i < number; i+=1) {
			result += "I";
		}
		return result;
	} else if (number === 5) {
    return "V";
  } else if (number === 10) {
		return "X";
	} else if (number === 50) {
		return "L";
	} else if (number === 100) {
		return "C";
	} else if (number === 500) {
		return "D";
	} else if (number === 1000) {
		return "M";
	}
}


console.log(romanNumeral(5));
