class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();
        //Spread Operator: ... (reticências)
        let date = new Date(
            ...this._inputData.value
                .split('-')
                .map(function (item, index) {
                    // if (index === 1) {
                    //     //conversão implícita da string
                    //     return item - 1;
                    // }
                    //
                    //return item;

                    //Evitando o If
                    return item - index % 2;
                })
        );

        //simple example
        console.log(...this._inputData.value.split('-'));
        console.log(date);

        let negociacao = new Negociacao(
            date,
            this._inputQuantidade,
            this._inputValor
        );
        console.log(negociacao);
    }
}
