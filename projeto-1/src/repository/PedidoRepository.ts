import { Pedido } from '../entities/Pedido.ts';
export class pedidoRepository{
    private _pedidos: Pedido[] = [];
    
    adicionar(pedido: Pedido): void{
        this._pedidos.push(pedido)
    };

   public get pedidos():any{
        return(this._pedidos)

    };
    public buscarPorId(Idpedido){
        if(!pedido){
            throw new Error("Tipo de id inválido")
        }
        let pedido : Pedido | undefined = this.pedidos.find(ped => ped.idPedido === idPedido)
        if(!pedido){
            throw new Error("Não existe esse pedidio")
        }
        return pedido
    }

    listarSituacao(situacao: string): Pedido[] {
    return this.pedidos.filter((l) => l.situacao == situacao)
};
}
