# Roman Numerals

#### Application that will convert numbers into roman numerals

#### By Marni Sucher, Shanen Cross, and Shannon Lee

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* jQuery

## Description

Learning application created for Epicodus coding school. Will convert numbers into roman numerals. Made to practice arrays, looping, and test-driven development.

## Setup/Installation Requirements

To use locally:

* Install git
* Use git to clone this repository to a local directory
* Open _index.html_ in a web browser

## Behaviors

* Convert a given number to roman numeral form
* The values of the roman numeral symbols should add up to equal the original number
* There may not be more than three of the same roman numeral characters in a row -- instead, switch to subtraction notation, i.e. IV = 5 - 1 = 4
* Ones, tens, hundreds, and thousands must be seperated (e.g. 99 is XCIX, not IC)
* You cannot count higher than 3,999 in Roman numerals.

## Tests
Describe: romanNumeral();
Test: "Will convert the integer 1 to I"
Expect(romanNumeral(1)).toEqual("I");

Test: "Will convert the integer 5 to V"
Expect(romanNumeral((5)).toEqual("V"));

Test: "Will convert the integer 10 to X"
Expect(romanNumeral((10)).toEqual("X"));

Test: "Will convert the integer 50 to L"
Expect(romanNumeral((50)).toEqual("L"));

Test: "Will convert the integer 100 to C"
Expect(romanNumeral((100)).toEqual("C"));

Test: "Will convert the integer 500 to D"
Expect(romanNumeral((500)).toEqual("D"));

Test: "Will convert the integer 1000 to M"
Expect(romanNumeral((1000)).toEqual(M"));

Test: "If given integer ranging from 1 to 4, symbols will add up to equal the number"
Expect(romanNumeral((3)).toEqual("III"));

Test: "Switch to subtraction notation if there are more than three of the same roman numeral symbols in a row"
Expect(romanNumeral((4)).toEqual("IV"));

Test: "Will convert the integer 2 to II
Expect(romanNumeral(2)).toEqual("II");

Test: "Will convert the integer 3 to III
Expect(romanNumeral(3)).toEqual("III");



## Known Bugs

None.

## License

Available under GPL Licensing
Copyright (c) 2021 Marni Sucher Shanen Cross Shannon Lee