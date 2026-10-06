import { Pedido } from '../entities/Pedido.ts';
export class PedidoRepository{
    private _pedidos: Pedido[] = [];
    
    adicionar(pedido: Pedido): void{
        let existIdPedido = this.pedidos.some(pedidoRepo => pedidoRepo.idPedido === pedido.idPedido)
        if(existIdPedido){
            throw new Error("Já existe um pedido com este id")
        }
        this._pedidos.push(pedido)
    };

   public get pedidos(){
        return(this._pedidos)

    };
    public buscarPorId(Idpedido:number){
        if(!Idpedido){
            throw new Error("Tipo de id inválido")
        }
        let pedido : Pedido | undefined = this.pedidos.find(ped => ped.idPedido === Idpedido)
        if(!pedido){
            throw new Error("Não existe esse pedidio")
        }
        return pedido
    }

    listarSituacao(situacao: string): Pedido[] {
    return this.pedidos.filter((l) => l.situacao == situacao)
};
}
