# Mr. Roboger's Neighborhood

#### By Joseph McMahon

#### Application that allows user to submit a number and will return a list of values starting from 0 going to the inputted number with substitutions made for any number containing the digits 1, 2, 3. 

## Technologies Used

* HTML
* CSS
* JS
* Web API
* Git Hub


## Description

This website allows user to input a number and, on submission, will show a list of all numbers (starting from 0) up to the inputted number with the following substitutions made: If the number has 1, return "beep". If the number has 2, return "boop". If the number has 3, return "won't you be my neighbor?". If the number returned has a combination of substituted numbers there will be a hierarchy of substitution, meaning the first substitution will return unless the second does and the second substitution will return unless the third does. 

## Setup/Installation Requirements

1. Clone the repository to your local machine: 
Git Clone
2. Navigate to the topmost directory Portfolio:
cd mr-robogers-neighborhood
3. Open the files in Virtual studio:
code .
4. Open index.html file with live server

Or access application in web browser at: 
https://github.com/jmcmahon01/Mr.-Roboger-s-Neighborhood.git

## Tests
Describe: isNumber()
Test: "It will check if user input is a real number"
code: isNumber("green")
Expected Output: "please enter a real number"

Describe: countToNumber()
Test: "It should return an array of numbers from 0 to the user's inputted number"
code: countToNumber(5)
Expected Output: [0, 1, 2, 3, 4, 5] 

Test: "It should replace numbers that contain a 1 with 'Beep'"
code: countToNumber(1)
Expected Output: [0, "beep"] 









## Known Bugs

* No known bugs currently


## License
Copyright © Joseph McMahon 2023
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
