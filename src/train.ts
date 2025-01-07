
function removeDuplicate(str: string): string {
    let result = '';
    for (let char of str) {
      if (!result.includes(char)) {
        result += char;
      }
    }
  
    return result;
  }

  console.log(removeDuplicate('stringg')); // Natija: 'string'
  


// function changeNumberInArray(index: number, arr: number[], newNumber: number): number[] {

//     if (index >= 0 && index < arr.length) {
//       arr[index] = newNumber;
//     }
//     return arr;
//   }
  

//   const updatedArray = changeNumberInArray(1, [1, 3, 7, 2], 2);
//   console.log(updatedArray); // [1, 2, 7, 2]
  






// function celsiusToFahrenheit(celsius: number): number {
//     return (celsius * 9 / 5) + 32;
// }

// console.log(celsiusToFahrenheit(0));  // 32
// console.log(celsiusToFahrenheit(10)); // 50






// function randomBetween(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomNum = randomBetween(30, 50);
// console.log(randomNum); // 30 va 50 orasidagi tasodifiy sonni qaytaradi








// type Person = { age: number };

// function sortByAge(arr: Person[]): Person[] {
//     return arr.sort((a, b) => a.age - b.age);
// }


// const sortedArray = sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]);
// console.log(sortedArray); 






// function sumEvens(numbers: number[]): number {
//     return numbers
//       .filter(num => num % 2 === 0) 
//       .reduce((sum, num) => sum + num, 0);  
//   }
  
 
//   console.log(sumEvens([1, 2, 3]));  // 2
//   console.log(sumEvens([1, 2, 3, 2]));  // 4
  










// function findIntersection(arr1: number[], arr2: number[]): number[] {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);

//     const intersection = [...set1].filter(value => set2.has(value));

//     return intersection;
// }
// console.log(findIntersection([1, 2, 3], [3, 2, 0]));  // return [2, 3]




// function countOccurrences(obj: Record<string, any>, keyToCount: string): number {
//     let count = 0;
  
//     for (const key in obj) {
//       if (key === keyToCount) {
//         count++;
//       }
//       if (typeof obj[key] === 'object' && obj[key] !== null) {
//         count += countOccurrences(obj[key], keyToCount);
//       }
//     }
  
//     return count;
//   }
//   const data = { model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } };
//   console.log(countOccurrences(data, 'model')); // Natija: 2
  






// function chunkArray(arr: number[], size: number): number[][] {
//     const result: number[][] = [];
    
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));  
//     }
    
//     return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// // Natija: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]








// function countChars(s: string): { [key: string]: number } {
//     const result: { [key: string]: number } = {};
    
//     for (let char of s) {
//         if (result[char]) {
//             result[char] += 1;  
//         } else {
//             result[char] = 1;   
//         }
//     }
//     return result;
// }
// console.log(countChars("hello"));  // { h: 1, e: 1, l: 2, o: 1 }





// function sumOdds(number: number): number {
//     let count = 0;

//     for (let i = 1; i < number; i += 2) {
//         count++;
//     }

//     return count;
// }

// console.log(sumOdds(9));  // 4
// console.log(sumOdds(11)); // 5







// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     const mergedArray = arr1.concat(arr2);
//     mergedArray.sort((a, b) => a - b);
//     return mergedArray;
// }


// const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// console.log(result); // [0, 3, 4, 4, 6, 30, 31]










// function missingNumber(nums: number[]): number {
//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== i) {
//             return i; 
//         }
//     }
//     return nums.length;
// }


// console.log(missingNumber([3, 0, 1])); // 2


















// function calculate(expression: string): number {

//     const numbers: string[] = expression.split("+").map(num => num.trim());

//     const sum: number = numbers.reduce((acc, curr) => acc + parseFloat(curr), 0);
    
//     return sum;
// }

// console.log(calculate("1 + 3")); // 4





















// function hasProperty<T extends object>(obj: T, key: string): boolean {
//     return key in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false















// function objectToArray<T>(obj: Record<string, T>): [string, T][] {
//     return Object.entries(obj) as [string, T][];
// }

// const result = objectToArray({ a: 10, b: 20 });
// console.log(result); // [['a', 10], ['b', 20]] 













// function calculateSumOfNumbers(values: any[]): number {
//     let sum = 0;
//     for (const value of values) {
//         if (typeof value === 'number') {
//             sum += value;
//         }
//     }

//     return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); // 45












// function palindromCheck(word: string): boolean {

//     const cleanedWord = word.toLowerCase().replace(/\s+/g, '');

//     const reversedWord = cleanedWord.split('').reverse().join('');
    
//     return cleanedWord === reversedWord;
// }


// console.log(palindromCheck("non")); // true
// console.log(palindromCheck("sut")); // false








// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//     return numbers.map(num => ({
//         number: num,
//         square: num * num
//     }));
// }


// console.log(getSquareNumbers([1, 2, 3])); 

// Natija: [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }]








// function reverseSentence(gap: string): string {
 
//     const sozlar = gap.split(' ');

//     const reversedWords = sozlar.map(word => word.split('').reverse().join(''));

//     return reversedWords.join(' ');
// }

// console.log(reverseSentence("g'ayrat qilamiz MIT 18!")); // "tarya'g zimaliq TIM !81"








// function unliHarf(str: string): number {
//     return (str.match(/[aeiouAEIOU]/g) || []).length;
// }

// console.log(unliHarf("Parker")); // 2






// function UzunSoz(text: string): string {
//     const words = text.split(/\s+/);
//     let engUzun = '';
//     words.forEach(word => {
//         if (word.length > engUzun.length) {
//             engUzun  = word;
//         }
//     });

//     return engUzun ;
// }

// const text = "I came from Uzbekistan!";
// const result = UzunSoz(text);
// console.log(`Eng uzun so'z: "${result}"`);







// function kopQatnashgan(arr: number[]): number | null {
//     const countMap = new Map<number, number>();

//     arr.forEach(num => {
//         countMap.set(num, (countMap.get(num) || 0) + 1);
//     });

//     let kopQatnashgan: number | null = null;
//     let maxCount = 0;

//     countMap.forEach((count, num) => {
//         if (count > maxCount) {
//             maxCount = count;
//             kopQatnashgan = num;
//         }
//     });

//     return kopQatnashgan;
// }
// const arr = [1, 8, 3, 8, 5, 4, 8, 4];
// const result = kopQatnashgan(arr);
// console.log(`Eng ko'p takrorlangan raqam: ${result}`);






/** 
  project standarts
    - logging standarts
    - naming standarts
          function,method,variable => CAMEL
          class => PSACAL
          folder, file => KEBAB
          css => SNAKE
    - Error Handling      
 **/


/** 
 MIT 18 H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"
 **/

// function getDigits(a: string) {
//     let natija = ''; 
//     for (let i = 0; i < a.length; i++) {
//         const s = a[i];
//         if (s >= '0' && s <= '9') {
//             natija += s; 
//         }
//     }
//     return natija; 
// }

// console.log(getDigits("1c2vd3")); // Javob: "123"





/*
MIT 18 H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

*/ 

/*function musbatSon(arr:number[]) : string {
    const a = arr.filter(function (i) {
        return i > 0;
    })
    return a.join('');
};    

// Misol uchun:
console.log(musbatSon([-45, -3, -5, 7, -32])); */ // javob : 7




/*MIT 18 G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.*/


/*function highestIndex(arr: number[]): number {
    if (arr.length === 0) {
        return -1;
    }

    let max_index = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[max_index]) {
            max_index = i;
        }
    }

    return max_index;
}

// Misol uchun:
console.log(highestIndex([45, 3, 5, 7, 32])); // 0 */
