export class Produto{
    private _nome: string;
    private _preco: number;
    private _codProd: number;
    
    constructor(nome:string, preco:number, codProd: number){
        this._nome = nome;
        this._preco = preco;
        this._codProd = codProd;
    }
    public get preco(){return this._preco}
    public get nome(){return this._nome}
    public get codProd(){return this._codProd}
    

    public set preco(preco){
        if(preco != this.preco && preco >= 0){
            this._preco = preco
        }
    }
    public set codProd(newCodProd: number){
        if(!newCodProd){
            throw new Error("Insira um código!")
        }
        this.codProd = newCodProd;
    }
    
    public toString(): string {
        return `${this.codProd} - ${this.nome} - R$${this.preco}`
    }
}