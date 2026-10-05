import { Pedido } from '../entities/Pedido.ts';
export class pedidoRepository{
    private pedidos: Pedido[] = [];
    
    adicionar(pedido: Pedido): void{
        this.pedidos.push(pedido)
    };

   public get Pedidos():any{
        return(this.pedidos)

    };

    listarSituacao(situacao: string): Pedido[] {
    return this.pedidos.filter((l) => l.situacao == situacao)
};
}
