import { Cliente } from "../entities/Cliente.ts";
import { Produto } from "../entities/Produto.ts";
import { Pedido } from "../entities/Pedido.ts";
import { ItemPedido } from "../entities/ItemPedido.ts";
import { PedidoRepository } from "../repositories/PedidoRepository.ts";
import { ProdutoRepository } from "../repositories/ProdutoRepository.ts";

export class PedidoService {
    private pedidoRepository: PedidoRepository
    private produtoRepository: ProdutoRepository
    
    constructor(pedidoRepository: PedidoRepository, produtoRepository: ProdutoRepository){
        this.pedidoRepository = pedidoRepository
        this.produtoRepository = produtoRepository
    }

    criarPedido(cliente: Cliente, idPedido:number): Pedido {
        let pedido = new Pedido(cliente, idPedido); 
        this.pedidoRepository.adicionar(pedido);
        return pedido
    }

    adicionarProduto(
        idPedido: number,
        codProd: number,
        quantidade: number,
    ): void {   
        let produto = this.produtoRepository.buscarPorId(codProd);
        let pedido = this.pedidoRepository.buscarPorId(idPedido);
        let item = new ItemPedido(produto, quantidade)
        pedido.adicionarItem(item)

    }

    removerProduto(
        idPedido: number,
        codProd: number
    ): void {
        let pedido = this.pedidoRepository.buscarPorId(idPedido)
        pedido.removerItem(codProd);
    }

    alterarQuantidade(
        idPedido: number,
        codProd: number,
        novaQuantidade: number
    ): void {
        let pedido = this.pedidoRepository.buscarPorId(idPedido)
        pedido.alterarQuantidade(codProd, novaQuantidade);
    }

    finalizarPedido(idPedido: number): void {
        let pedido = this.pedidoRepository.buscarPorId(idPedido)
        pedido.finalizar();
    }

    cancelarPedido(idPedido: number): void {
        let pedido = this.pedidoRepository.buscarPorId(idPedido)
        pedido.cancelar();
    }
    public buscarPedidoPorId(idPedido: number){
        return this.pedidoRepository.buscarPorId(idPedido)
    }
    public buscarPedidos(){
        return this.pedidoRepository.buscarPedidos()
    }

}
