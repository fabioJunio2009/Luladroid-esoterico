import { Produto } from "./Produto.ts";

export class Cardapio{

    private _produtos : Produto[]
    private _qntdProduto : number = 0;
    
    constructor(){
        this._produtos = []
        this._qntdProduto = 0 
    }

    public get produtos(){return this._produtos}
    public get qntdProduto(){return this._qntdProduto}


    public addProdCardapio(produto: Produto) : void {
        
        if(!produto){
            throw new Error("Não há nenhum produto para colocar")
        }

        const existCodProd: Produto | undefined = this._produtos.find(prod => prod.cod == produto.cod )
        
        if(existCodProd){
            throw new Error("Existe um produto como esse código")
        }

        this.aumentarQntdProd()
        this.produtos.push(produto)
        
    }
    public remvProdCardapio(codProd: string): string | void{
        let indexProd: number = this.produtos.findIndex(prod => prod.codProd == codProd)
        if(indexProd === -1){
            throw new Error("Não existe um produto com esse código")
        }

        this._produtos.splice(indexProd, 1)
        this.baixarQntdProd()
        
    }

    public buscarPorCod(codProd: string){
        
    }

    public mostrarProdutos(){

    }


    private aumentarQntdProd(){
        this._qntdProduto += 1
    }
    
    private baixarQntdProd(){
        this._qntdProduto -= 1
    }



}