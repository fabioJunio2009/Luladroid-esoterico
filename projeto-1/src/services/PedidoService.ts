import { Cliente } from "../entities/Cliente.ts";
import { Produto } from "../entities/Produto.ts";
import { Pedido } from "../entities/Pedido.ts";
import { ItemPedido } from "../entities/ItemPedido.ts";
import { ProdutoRepository } from "../repositories/ProdutoRepository.ts";

export class PedidoService {
    private produtoRepository: ProdutoRepository
    
    constructor(produtoRepository: ProdutoRepository){
        this.produtoRepository = produtoRepository
    }

    criarPedido(cliente: Cliente, idPedido:string): Pedido {
        return new Pedido(cliente, idPedido);
    }

    adicionarProduto(
        pedido: Pedido,
        produto: Produto,
        quantidade: number,
    ): void {
        const item = new ItemPedido(produto, quantidade)
        pedido.adicionarItem(item);
    }

    removerProduto(
        pedido: Pedido,
        itemPedido: string
    ): void {
        pedido.removerItem(itemPedido);
    }

    alterarQuantidade(
        pedido: Pedido,
        itemPedido: ItemPedido,
        novaQuantidade: number
    ): void {
        pedido.alterarQuantidade(itemPedido, novaQuantidade);
    }




    // a partir daqui é outra responsabilidade

    // finalizarPedido(pedido: Pedido): void {
    //     pedido.finalizar();
    // }

    // cancelarPedido(pedido: Pedido): void {
    //     pedido.cancelar();
    // }


}
