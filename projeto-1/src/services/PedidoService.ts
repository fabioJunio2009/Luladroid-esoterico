import { Cliente } from "../entities/Cliente.ts";
import { Produto } from "../entities/Produto.ts";
import { Pedido } from "../entities/Pedido.ts";
import { ItemPedido } from "../entities/ItemPedido.ts";
import { PedidoRepository } from "../repositories/PedidoRepository.ts";

export class PedidoService {
    private pedidoRepository: PedidoRepository
    
    constructor(pedidoRepository: PedidoRepository){
        this.pedidoRepository = pedidoRepository
    }

    criarPedido(cliente: Cliente, idPedido:number): Pedido {
        pedido = new Pedido(cliente, idPedido); 
        this.pedidoRepository.adicionar(pedido);
        return pedido
    }

    adicionarProduto(
        idPedido: number,
        codProd: number,
        quantidade: number,
    ): void {   
        const item = new ItemPedido(codProd, quantidade)
        pedido.adicionarItem(item);
    }

    removerProduto(
        pedido: Pedido,
        itemPedido: number
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
