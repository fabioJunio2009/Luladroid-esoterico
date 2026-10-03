export class Produto{
    private _nome: string;
    private _preco: number;
    private _codProduto: string;
    
    constructor(nome:string, preco:number, codProduto: string){
        this._nome = nome;
        this._preco = preco;
        this._codProduto = codProduto;
    }
    public get preco(){return this._preco}
    public get nome(){return this._nome}
    public get codProduto(){return this._codProduto}


    public set preco(preco){
        if(preco != this.preco && preco >= 0){
            this._preco = preco
        }
    }
    public set codProduto(newCodProduto: string){
        if(newCodProduto === this.codProduto){
            throw new Error("Não pode ser o mesmo código, se deseja alterar para um diferente")
        }

        this._codProduto = newCodProduto
    }
}