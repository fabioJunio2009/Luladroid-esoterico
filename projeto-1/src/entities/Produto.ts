export class Produto{
    private _nome: string;
    private _preco: number;
    public cod: number;
    
    constructor(nome:string, preco:number,cod:number){
        this._nome = nome;
        this._preco = preco;
        this.cod = preco;
    }
    public get preco(){return this._preco}
    public get nome(){return this._nome}
    public get codigo():any{
        return this.cod
    }

    public set preco(preco){
        if(preco != this.preco && preco >= 0){
            this._preco = preco
        }
    }
}