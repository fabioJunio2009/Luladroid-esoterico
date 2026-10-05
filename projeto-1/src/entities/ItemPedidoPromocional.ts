import {ItemPedido} from "./ItemPedido.ts"
import {Produto} from "./Produto.ts"

export class ItemPedidoPromocional extends ItemPedido{
    private _desconto: number
    constructor(produto:Produto, quantidade:number, desconto: number) {
        super(produto, quantidade)
        this._desconto = desconto   
    }   
    public get desconto(){
        return this._desconto
    }
    public set desconto(valor:number){
        if(valor <= 100 && valor >= 0){
            this._desconto = valor
        }

    }
}