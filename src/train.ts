// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin 
// va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// Answer

// function getHighestIndex(intList : number[]) {
//     let maxNum = 0;
//     let maxIndex = 0;
    
//     for (let i = 0; i < intList.length; i++) {
//         if (intList[i] > maxNum) {
//             maxNum = intList[i];
//             maxIndex = i;
//         }
//     }
    
//     return maxIndex;
// }
// console.log(getHighestIndex([5, 21, 12, 21, 8])); 


////////////////////////////////////////////////////////////

// H-TASK: 
// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
// faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"


//Answer
// function getPositive(intList : number[]) {
//     let posInt = [];
//     let posStr = ''
    
//     for (let i = 0; i < intList.length; i++) {
//         if (intList[i] > 0) {
//             posInt.push(intList[i]);
//             posStr = posInt.join('')
            
//         }
//     }
    
//     return posStr;
// }
// console.log(getPositive([1, -4, 2])); 


////////////////////////////////////////////////////////////

// H2-TASK: 
// Shunday function tuzing, unga string argument pass bolsin. 
//Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"


//Answer
// function getDigits(inVal: string) {
   
//     let posStr : string [] =[];
//     let posDig: string ='';
//     for (let i = 0; i < inVal.length; i++) {
        
//         if (Number(parseInt(inVal[i]))) {
//             posStr.push(inVal[i]);
//             posDig = posStr.join('') 
//         }
            
//         }
    
    
//     return posDig;
// }
// console.log(getDigits('m18it1'));


////////////////////////////////////////////////////////////

/*Project standards
    -Logging standards
    -Naming standards
        function, method, variable => Camel case
        class =>  boshlangivh harf ham katta => pascal
        folder => kebab  chiziqcha bilan birlashtirish
        css =>snake case  === button_stayle
    -Error handling


*/ 

/*
Traditional API
Rest API
GraphQL API

.......

*/ 


// TASK I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.



//Answer

// function majorityElement(input: number[]) {
//     let maxNum = 0;
//     let maxCount = 0;
  
//     for (let i = 0; i < input.length; i++) {
//       let count = 0;
  
//       for (let k = 0; k < input.length; k++) {
//         if (input[i] === input[k]) {
//           count++;
//         }
//       }
  
//       if (count > maxCount) {
//         maxCount = count;
//         maxNum = input[i];
//       }
//     }console.log(`Maxnum is = ${maxNum} and it is repeated ${maxCount} times`);
//   }
  
//  majorityElement([1, 2, 3, 4, 2, 5, 4, 3, 2, 4]);


/* 
Traditional TD => BSSR  (Admin) => EJS 
Modern FD => SPA (User's application)  => REACT LIB /NOT FRAMEWORK
*/


// TASK J:

// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.

// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

//Answer

// function findLongestWord(sentence: string): string {
//     let words: string[] = sentence.split(" "); 
//     let longestWord: string = "";
//     let maxCount: number = 0;

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//             maxCount = words[i].length; 
//         }
//     }

//     console.log(`The longest word is "${longestWord}" with a length of ${maxCount} characters.`);
//     return longestWord;
// }

// findLongestWord("I am Oychehra  Kambaralieva,  I came from uzbekistan !");



// TASK K:

// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing

// MASALAN: countVowels("string"); return 1

// Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// bo'lganligi uchun '1'ni qaytarmoqda


//Answer

// function countVowels(input: string): number {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;
  
//     for (let i = 0; i < input.length; i++) {
//       const letter = input[i].toLowerCase(); 
//       if (vowels.includes(letter)) {
//         vowelCount++;
//       }
//     }
  
//     return vowelCount;
//   }
  

//   const result = countVowels("hello  MIT");
//   console.log(`The number of vowels is: ${result}`);

// TASK L:

// So'zlarni ketma - ketligini buzmasdan har bir so'zni
// alohida teskarisiga o'girib beradigan fucntion tuzing.
// Funtion yagona string qabul qilsin

// MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
// Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda

//Answer

// function reverseSentence(input: string): string {
//   const words: string[] = input.split(" ");
//   const reversedWords = words.map(word => word.split("").reverse().join(""));
//   return reversedWords.join(" ");
// }
// const result = reverseSentence("we like coding!");
// console.log(result); 



// TASK M:

// Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
// tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin

// MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }];


//Answer

// type NumberSquare = {
//   number: number;
//   square: number;
// };

// const getSquareNumbers = (numbers: number[]): NumberSquare[] => {
//   return numbers.map((num: number) => {
//       return {
//           number: num,
//           square: num * num
//       };
//   });
// };

// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);



// TASK N:

// Parametr sifatida yagona string qabul qiladigan function tuzing.
// Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
// 'true' yokida 'false' qaytarsin.

// MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
// Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
// Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)

// *Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
// bir xil ma'noni beradigan so'zga aytiladi

// Answer
// const palindromeCheck = (word: string): boolean => {
//   const reversedWord = word.split('').reverse().join('');
  
//   if (word === reversedWord) {
//       return true;
//   } else {
//       return false;
//   }
// };


// console.log(palindromeCheck("dad"));   
// console.log(palindromeCheck("number")); 


// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.


//Answer

// function calculateSumOfNumbers(arr: any[]): number {
//   return arr.reduce((sum, current) => {
//       if (typeof current === 'number') {
//           return sum + current;
//       }
//       return sum;
//   }, 0);
// }

// const result = calculateSumOfNumbers([10, "10", { number: 10 }, true, 35]);
// console.log(result);  


// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

//Answer
// function objectToArray(obj: Record<string, any>): [string, any][] {
//     return Object.entries(obj);
// }


// const result = objectToArray({ a: 10, b: 20 });
// console.log(result);  

// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
// Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
// propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.


//Answer
// function hasProperty(obj: Record<string, any>, prop: string): boolean {
//     if (prop in obj) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const result1 = hasProperty({ name: "BMW", model: "M3" }, "model");
// console.log(result1);  

// const result2 = hasProperty({ name: "BMW", model: "M3" }, "year");
// console.log(result2); 


// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.


//Answer

// function calculate(expression: string): number {
    
//     const sanitizedExpression = expression.replace(/\s+/g, '');
//     try {
        
//         const result = new Function(`return ${sanitizedExpression}`)();
//         return typeof result === 'number' ? result : NaN;  
//     } catch (error) {
//         console.error('Invalid expression:', error);
//         return NaN;
//     }
// }


// console.log(calculate("1 + 3"));  


// TASK S

// Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
// va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

// MASALAN: missingNumber([3, 0, 1]); return 2

// Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
// '2' soni tushib qolgan


//Answer

// function missingNumber(arr: number[]): number {
//     arr.sort((a, b) => a - b);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== i) {
//             return i;
//         }
//     }

//     return arr.length;
// }

// console.log(missingNumber([3, 0, 1]));


// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda


//Answer

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     const mergedArray = [...arr1, ...arr2];
    
//     mergedArray.sort((a, b) => a - b);
    
//     return mergedArray;
// }


// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 


// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.


//Answer

// function sumOdds(n: number): number {
//     let count = 0;

//     for (let i = 0; i <= n; i++) {
//         if (i % 2 !== 0) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(sumOdds(9));  // Output: 4
// console.log(sumOdds(11)); // Output: 5


// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
//   
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.


// function countChars(str: string): { [key: string]: number } {
//     const result: { [key: string]: number } = {};
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (char in result) {
//         result[char]++;
//       } 

//       else {
//         result[char] = 1;
//       }
//     }
  
//     return result;
//   }
  
//   console.log(countChars("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }


// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti

//Answer 
// function chunkArray(arr: number[], chunkSize: number): number[][] {
//   const result: number[][] = []; 

//   if (chunkSize <= 0) {
//       return result; 
//   }

//   for (let i = 0; i < arr.length; i += chunkSize) {
//       const chunk = arr.slice(i, i + chunkSize);
//       result.push(chunk); 
//   }

//   return result;
// }


// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(result);

// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda


//Answer

// function countOccurrences(obj: Record<string, any>, keyToFind: string): number {
//     let count = 0; 
  
//     for (const key in obj) {
//       if (key === keyToFind) {
//         count++; }
//       if (typeof obj[key] === 'object' && obj[key] !== null) {
//         count += countOccurrences(obj[key], keyToFind);}
//     }
//     return count; 
//   }
  
//   const testObject = {
//     model: 'Bugatti',
//     steer: {
//       model: 'HANKOOK',
//       size: 30,
//       details: {
//         model: 'Michelin'
//       }
//     }
//   };
  
//   console.log(countOccurrences(testObject, 'model')); 


// TASK Y

// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.

// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// Yuqoridagi misolda, argument sifatida berilayotgan array'larda
// o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
// joylab return qilmoqda

//Answer

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   const result: number[] = [];

//   for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];

   
//     if (arr2.includes(element) && !result.includes(element)) {
//       result.push(element);
//     }
//   }

//   return result;
// }


// console.log(findIntersection([1, 2, 3], [3, 2, 0])); 


// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda

//Answer

// function sumEvens(arr: number[]): number {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }

// console.log(sumEvens([1, 2, 3]));   
// console.log(sumEvens([1, 2, 3, 2]));


// TASK ZA

// Shunday function yozing, u array ichidagi objectlarni
// 'age' qiymati bo'yicha sortlab bersin.

// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// Yuqoridagi misolda, kichik raqamlar katta raqamlar tomon
// tartiblangan holatda return bo'lmoqda.

//Answer
// function sortByAge(arr: { age: number }[]): { age: number }[] {
//   const sortedArray = [...arr]; 

//   const n = sortedArray.length;
//   for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n - 1; j++) {
         
//           if (sortedArray[j].age > sortedArray[j + 1].age) {
              
//               const temp = sortedArray[j];
//               sortedArray[j] = sortedArray[j + 1];
//               sortedArray[j + 1] = temp;
//           }
//       }
//   }

//   return sortedArray;
// }


// const result = sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]);
// console.log(result); 



// TASK ZB

// Shunday function yozing, uni 2 ta number parametri bolsin
// va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

// Shunday function yozing, uni 2'ta number parametri bo'lsin.
// Va berilgan sonlar orasidan random raqam returnb qilsin.

// MASALAN: randomBetween(30, 50) return 45;

// Yuqoridagi misolda, argument sifatida ikkita raqam, '30' va '45'
// berilmoqda, function'ning vazifasi, shu ikkala son orasidan
// random raqamni topib qaytarmoqda.


//Answer
// function randomBetween(min: number, max: number): number {
//   if (min > max) {
//       throw new Error("Minimum should be less than or equal to maximum.");
//   }

//   const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//   return randomNum;
// }

// const result = randomBetween(30, 50);
// console.log(result); 


// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi

//Answer
// function celsiusToFahrenheit(celsius: number): number {
//   if (typeof celsius !== "number") {
//       throw new Error("Input must be a number.");
//   }


//   const fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// console.log(celsiusToFahrenheit(0)); 
// console.log(celsiusToFahrenheit(10)); 


// TASK ZD

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.

//Answer

// function changeNumberInArray(index: number, arr: number[], newValue: number): number[] {
//   if (index < 0 || index >= arr.length) {
//       throw new Error("Index is out of bounds.");
//   }

//   const updatedArray = [...arr];
//   updatedArray[index] = newValue;

//   return updatedArray;
// }


// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2)); 


// TASK ZE

// Shunday function yozing, uniygona string parametri mavjud bo'lsin.
// Bu function string tarkibidagi takrorlangan xarflarni olib tashlab qolgan
// qiymatni qaytarsin.

// MASALAN: removeDuplicate('stringg') return 'string'

// Yuqoridagi misolda, 'stringg' so'zi tarkibida 'g' harfi takrorlanmoqda
// funktsiyamiz shu bittadan ortiq takrorlangan harfni olib natijani
// qaytarmoqda.


//Answer

// function removeDuplicate(input: string): string {
//     let result = ""; 

//     for (let i = 0; i < input.length; i++) {
//         const char = input[i];
//         if (result.indexOf(char) === -1) {
//             result += char; 
//         }
//     }

//     return result; 
// }


// console.log(removeDuplicate("stringg")); 

// TASK ZG

// String sifatida berilgan string parametrni
// snake case'ga o'tkazib beradigan function yozing.

// MASALAN: convertToSnakeCase('name should be a string')
// return 'name_should_be_a_string'

//Answer

// function convertToSnakeCase(input: string): string {
//     let result = "";
    
//     for (let i = 0; i < input.length; i++) {
//       const char = input[i];
      
//       if (char === " ") {
//         result += "_";
//       } else {
//         result += char;
//       }
//     }
    
//     return result;
//   }
  
//   console.log(convertToSnakeCase("name should be a string")); 


// TASK ZH

// Shunday function yozing, u berilgan array parametri ichidagi
// raqamlar orasidan, tartib bo'yicha eng kichik raqamdan, eng katta raqamgacha
// tushirib qoldirilgan sonlarni o'zinigina topib bir array sifatida qaytarsin.
  
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]); return [2, 5, 6];

// Yuqoridagi misolda, eng katta raqam bu 7 va eng kichik raqam bu 1.
// Function'ning vazifasi berilgan sonlar ichidan tushirib qoldirilgan
// sonlarnigina topib qaytarmoqda
  

//Answer

// function findDisappearedNumbers(arr: number[]): number[] {
//   const missingNumbers: number[] = [];


//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }


//   for (let i = min; i <= max; i++) {
//     let found = false;


//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === i) {
//         found = true;
//         break;
//       }
//     }

   
//     if (!found) {
//       missingNumbers.push(i);
//     }
//   }

//   return missingNumbers;
// }

// // Example usage
// console.log(findDisappearedNumbers([1, 3, 4, 7])); // Output: [2, 5, 6]


// TASK ZI

// Shundan function yozing, bu function 3 soniydan so'ng
// "Hello World!" so'zini qaytarsin.

// MASALAN: delayHelloWorld("Hello World"); return "Hello World";



// Answer

// function delayHelloWorld(message: string): Promise<string> {
//   return new Promise((resolve) => {
//     let counter = 0;

//     // Simulate delay using a loop and setInterval
//     const interval = setInterval(() => {
//       counter++;

//       if (counter === 3) {
//         clearInterval(interval);
//         resolve(message); // Return the message after 3 seconds
//       }
//     }, 1000); // 1-second interval
//   });
// }

// // Example usage
// delayHelloWorld("Hello World!").then((result) => console.log(result));


// TASK ZJ:

// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda


//Answer

// function reduceNestedArray(arr: any[]): number {
//   let sum = 0;

//   const stack: any[] = [...arr]; 

//   while (stack.length > 0) {
//     const current = stack.pop();

//     if (Array.isArray(current)) {
//       stack.push(...current);
//     } else if (typeof current === "number") {
//       sum += current;
//     }
//   }

//   return sum;
// }

// console.log(reduceNestedArray([1, [1, 2, [4]]])); 

// TASK ZK:

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin
  
// MASALAN: printNumbers()

//Answer

function printNumbers(): void {
  let count = 1;

  const interval = setInterval(() => {
    console.log(count);
    count++;

  
    if (count > 5) {
      clearInterval(interval);
    }
  }, 1000); 
}


printNumbers();









  






