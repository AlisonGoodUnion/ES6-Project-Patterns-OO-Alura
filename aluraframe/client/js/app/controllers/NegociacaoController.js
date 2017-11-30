class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();

        let data = this._inputData.value;
        let dataSplit = this._inputData.value.split('-');
        let dataReplace = this._inputData.value.replace(/-/g, ',');

        console.log(data);
        console.log(dataSplit);
        console.log(dataReplace);

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}