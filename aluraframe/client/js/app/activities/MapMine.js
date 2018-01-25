class MapMine {

     constructor () {
         let numbers = [3, 2, 11, 20, 8, 7];
         let doubledValues = [];

         var index = 0;
         numbers.forEach(item => {

             if (item % 2 != 0) {
                 doubledValues.push(item * 2);
             } else {
                 doubledValues.push(item);
             }

             index++;
         });
         console.log(numbers);
         console.log(doubledValues);

         let doubledValuesNew = numbers.map(item => item % 2 != 0 ? item * 2 : item);
         console.log(doubledValuesNew);

         let numbers2 = [10, 30];

         //"spread operator"
         console.log("spread operator EX: somaDoisNumeros(...numbers2) : " + somaDoisNumeros(...numbers2));

         function somaDoisNumeros(num1, num2) {
             return num1 + num2;
         }
     }
}