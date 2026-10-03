import { Produto } from "./Produto.ts";

export class Cardapio{
    private _produtos : Produto[]

    private static _qtnd_produto : number = 0;
    
    constructor(){
        this._produtos = []
    }

    public get produtos(){return this._produtos}
    
    public addProdCardapio(produto: Produto):void {
        
        if(!produto){
            throw new Error("Não há nenhum produto para colocar")
        }

        const existCodProd: Produto | undefined = this._produtos.find(prod => prod.cod == produto.cod )
        
        if(!existCodProd){
            this.produtos.push(produto)
            Cardapio.aumentarQntdProd()
        }

        else{
            throw new Error("Existe um produto como esse código")
        }
    }
    remvProdCardapio(produto: Produto): string | void{
        const prod: Produto | undefined = this.produtos.find(prodt => prodt.cod == produto.cod)
        if(!prod) return "Não existe esse produto no cardápio"
        

    
    }
    
    private static aumentarQntdProd(){
        this._qtnd_produto += 1
    }



}
// add produto ao cardapio
// remover produtio ao cardapio