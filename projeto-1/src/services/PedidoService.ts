import { Cliente } from "../entities/Cliente.ts";
import { Produto } from "../entities/Produto.ts";
import { Pedido } from "../entities/Pedido.ts";
import { ItemPedido } from "../entities/ItemPedido.ts";

export class PedidoService {

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

    finalizarPedido(pedido: Pedido): void {
        pedido.finalizar();
    }

    cancelarPedido(pedido: Pedido): void {
        pedido.cancelar();
    }


}
