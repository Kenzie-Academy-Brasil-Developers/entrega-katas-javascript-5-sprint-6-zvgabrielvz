
//------ KATAS 1 ----//


function testeReverseString1() {
    let result = reverseString("Gabriel");
    let expected = "leirbaG";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testeReverseString2() {
    let result = reverseString("Joao");
    let expected = "oaoJ";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 

 function reverseString(string) {
    let splitstring = string.split("");
    splitstring.reverse();
    let result = splitstring.join("");
    return result
 }

 testeReverseString1();
 testeReverseString2();

 //------ KATAS 2 ----//

 function testReverseSentence1() {
   let result = reverseSentence("bob likes dogs");
   let expected = "dogs likes bob";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseSentence2() {
   let result = reverseSentence("joana likes animals");
   let expected = "animals likes joana";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



function reverseSentence(string) {
   let splitfrase = string.split(" ");
   splitfrase.reverse();function testReverseSentence1() {
      let result = reverseSentence("bob likes dogs");
      let expected = "dogs likes bob";
      console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
   }
   
   function testReverseSentence2() {
      let result = reverseSentence("joana likes animals");
      let expected = "animals likes joana";
      console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
   }
   
   
   
   function reverseSentence(string) {
      let splitfrase = string.split(" ");
      splitfrase.reverse();
      let result = splitfrase.join(" ");
      return result
   }
   
   testeReverseString1();
   testReverseSentence2();
   
   function testReverseSentence1() {
      let result = reverseSentence("bob likes dogs");
      let expected = "dogs likes bob";
      console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
   }
   
   function testReverseSentence2() {
      let result = reverseSentence("joana likes animals");
      let expected = "animals likes joana";
      console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
   }
   
   
   
   function reverseSentence(string) {
      let splitfrase = string.split(" ");
      splitfrase.reverse();
      let result = splitfrase.join(" ");
      return result
   }
   
   testeReverseString1();
   testReverseSentence2();
   
   function testReverseSentence1() {
      let result = reverseSentence("bob likes dogs");
      let expected = "dogs likes bob";
      console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
   }
   
   function testReverseSentence2() {
      let result = reverseSentence("joana likes animals");
      let expected = "animals likes joana";
      console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
   }
   
   
   
   function reverseSentence(string) {
      let splitfrase = string.split(" ");
      splitfrase.reverse();
      let result = splitfrase.join(" ");
      return result
   }
   
   testeReverseString1();
   testReverseSentence2();
   
   let result = splitfrase.join(" ");
   return result
}

testeReverseString1();
testReverseSentence2();

//------ KATAS 3 ----//

function testMinimumValue1() {
   let result = minimumValue([10,50,80,90,78,56,5,4]);
   let expected = 4;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2() {
   let result = minimumValue([10,50,150,4,78,56,5,3]);
   let expected = 3;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



function minimumValue(x) {
   x.sort((a, b) => a-b);
   let result = x[0];
   return result
}


testMinimumValue1();
testMinimumValue2();

//------ KATAS 4 ----//

function testMaximumValue1() {
   let result = maximumValue([4,8,125,6,3,7,8,10]);
   let expected = 125;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2() {
   let result = maximumValue([4,8,125,120,240,215,50,89]);
   let expected = 240;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



function maximumValue(x) {
   x.sort((a, b) => a-b);
   let endnumber = x.length-1
   let result = x[endnumber];
   return result
}

testMaximumValue1();
testMaximumValue2();

//------ KATAS 5 ----//

function testCalculateRemainder1() {
   let result = calculateRemainder(8, 3);
   let expected = 2;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2() {
   let result = calculateRemainder(10,5);
   let expected = 0;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



function calculateRemainder(a, b) {
   let result = a % b
   return result
}

testCalculateRemainder1();
testCalculateRemainder2();

//------ KATAS 6 ----//

function testDistinctValues1() {
   let result = distinctValues("1 2 5 1 9 8 2 1");
   let expected = "1 2 5 9 8";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2() {
   let result = distinctValues("10 20 30 50 20 10 100");
   let expected = "10 20 30 50 100";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


let result = "";
function distinctValues(x) {
   let xsplit = x.split("");
   for(let i = 0; i < xsplit.length; i+=2){
      
      if(xsplit[i] !== xsplit[i+2]){
         
         result = result + xsplit[i]
         console.log(result);
      }

   }

return result;
   
}
distinctValues("1 5 8 4 1 5 6 2 4")
testDistinctValues1();
testDistinctValues2();
