import { Cliente } from "./Cliente.ts"
import { ItemPedido } from "./ItemPedido.ts"

export class Pedido{
    private _cliente: Cliente;
    private _itemP: ItemPedido[];
    private _situacao: string;
    constructor(cliente:Cliente){
        this._cliente = cliente;
        this._itemP = []
        this._situacao = "aberto";
    }

    adicionarItem(item:ItemPedido){
        if(!item){
            return "Não há item para o pedido"
        }
        
        let repeticao = this._itemP.find(itemPedido => itemPedido.produto.nome == item.produto.nome)

        if(repeticao){
            throw new Error("Já existe esse item no pedido")
        }

        this._itemP.push(item)

    }

    removerItem(item:string){
        let index_itemP: number = this._itemP.findIndex(x => x.produto.nome == item.produto.nome)
        if (index_itemP === -1){
            throw new Error("Nâo existe este item")
        }
        this._itemP.splice(index_itemP,1)
    }   
    
    alterarQuantidade(item:ItemPedido, quantidadeNova:number){
        let item_ItemP: ItemPedido | undefined = this._itemP.find(x => x.produto.nome == item.produto.nome)

        if(!item_ItemP){
            throw new Error("Não existe esse item-pedido");
        }
        
        item_ItemP.quantidade = quantidadeNova
    }

    finalizar() {
        // acho que não precisa conferir se ja está aberto ou não
        if (this._situacao == "aberto") {
            this._situacao = "finalizado";
        }
    }

    calcularTotal(){
        let total = this._itemP.reduce((acumulador, ItemAtual) => acumulador + ItemAtual.calcular(), 0)
        return total
    }

    cancelar() {
        if (this._situacao == "aberto") {
            this._situacao = "cancelado";
        }
    }
}