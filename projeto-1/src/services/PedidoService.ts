import { Cliente } from "../entities/Cliente.ts";
import { Produto } from "../entities/Produto.ts";
import { Pedido } from "../entities/Pedido.ts";
import { ItemPedido } from "../entities/ItemPedido.ts";
import { pedidoRepository } from "../repository/pedidoRepository.ts";
export class PedidoService {
     private pedidoRepository: pedidoRepository;

     constructor(pedidoRepository: pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
}

    criarPedido(cliente: Cliente): Pedido {
        return new Pedido(cliente);
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
        let oi = pedido
        oi.removerItem(itemPedido);
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

    listarSituacao(situacao:string):any{
        return this.pedidoRepository.listarSituacao(situacao)
    }


    resumoVendas() {
    let pedidos = this.pedidoRepository.listarSituacao("finalizado");

    let qtd  = pedidos.length;
    let total = 0;
    for (let pedido of pedidos) {
        total = total + pedido.calcularTotal();
    }
    let oi = 0;
    if (qtd > 0) {
        oi = total / qtd;
    }
    return {
        quantidade: qtd,
        total: total,
        oi: oi
    };
}
}


