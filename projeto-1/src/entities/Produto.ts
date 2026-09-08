export class Produto{
    private _nome: string;
    private _preco: number;
    
    constructor(nome:string, preco:number){
        this._nome = nome;
        this._preco = preco;
    }
    public get preco(){return this._preco}
    public get nome(){return this._nome}

    public set preco(preco){
        if(preco != this.preco && preco >= 0){
            this._preco = preco
        }
    }
}