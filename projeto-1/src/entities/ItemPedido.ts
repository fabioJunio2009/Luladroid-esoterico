import { Produto } from "./Produto.ts";

export class ItemPedido{
    private _produto: Produto;
    private _quantidade: number;
    constructor(produto:Produto, quantidade:number){
        this._produto = produto;
        this._quantidade = quantidade
    }
   
    public get produto(){
        return this._produto
    }
    public get quantidade(){
        return this._quantidade
   }
    public set quantidade(qntd){
        if(qntd <= 0){
            throw new Error("Quantidade inválida") 
        }
        this._quantidade = qntd
    }
    
    calcular(){
        return this.produto.preco * this.quantidade
    }
}