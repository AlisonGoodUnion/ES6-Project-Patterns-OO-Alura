class MapMine {

    constructor() {
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

        //19 Menos é mais!
        var aval = [
            new Prova(new Aluno(1, 'Pablo'), 8),
            new Prova(new Aluno(2, 'Claudio'), 6),
            new Prova(new Aluno(3, 'Bruno'), 9),
            new Prova(new Aluno(4, 'Bruna'), 5)
        ]

        let aprovados = aval
                .filter( function (prova) { return prova.nota >= 7; })
                .map( function(prova) {return prova.aluno.nome})
        console.log("No Arrow function: " + aprovados);

        let aprovadosArrow = aval
                .filter( prova => prova.nota >= 7)
                .map( prova => prova.aluno.nome)
        console.log("Arrow function: " + aprovadosArrow);
    }
}

class Aluno {
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {
    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota
    }
}