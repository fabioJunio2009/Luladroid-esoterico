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

    public criarPedido(cliente: Cliente, idPedido:number): Pedido {
        let pedido = new Pedido(cliente, idPedido); 
        this.pedidoRepository.adicionar(pedido);
        return pedido
    }

    public adicionarProduto(
        idPedido: number,
        codProd: number,
        quantidade: number,
    ): void {   
        let produto = this.produtoRepository.buscarPorId(codProd);
        let pedido = this.pedidoRepository.buscarPorId(idPedido);
        let item = new ItemPedido(produto, quantidade)
        pedido.adicionarItem(item)

    }

    public removerProduto(
        idPedido: number,
        codProd: number
    ): void {
        let pedido = this.pedidoRepository.buscarPorId(idPedido)
        pedido.removerItem(codProd);
    }

    public alterarQuantidade(
        idPedido: number,
        codProd: number,
        novaQuantidade: number
    ): void {
        let pedido = this.pedidoRepository.buscarPorId(idPedido)
        pedido.alterarQuantidade(codProd, novaQuantidade);
    }

    public finalizarPedido(idPedido: number): void {
        let pedido = this.pedidoRepository.buscarPorId(idPedido)
        pedido.finalizar();
    }

    public cancelarPedido(idPedido: number): void {
        let pedido = this.pedidoRepository.buscarPorId(idPedido)
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


