import { Pedido } from '../entities/Pedido';
export class pedidoRepository{
    private pedidos: Pedido[] = [];
    
    adicionar(pedido: Pedido): void{
        this.pedidos.push(pedido)
    };

    getPedidos():any{
        return(this.pedidos)

    };
}
