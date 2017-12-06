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
                //Omitindo bloco e utilizando arrow functions =>
                .map((item, index) => item - index % 2 )
        );

        //simple example
        console.log(...this._inputData.value.split('-'));
        console.log(date);

        let negociacao = new Negociacao(
            date,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negociacao);
    }
}
