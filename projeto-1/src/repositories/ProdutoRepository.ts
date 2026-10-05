import { Produto } from "../entities/Produto.ts";

export class ProdutoRepository{

    private _produtos : Produto[] = []
    private _qntdProduto : number = this._produtos.length

    public get produtos(){return this._produtos}
    public get qntdProduto(){return this._qntdProduto}

    public adicionarProduto(produto: Produto) : void { 
        
        if(!produto){
            throw new Error("Não há nenhum produto para colocar")
        }

        const existCodProd: Produto | undefined = this._produtos.find(prod => prod.codProd == produto.codProd)
        
        if(existCodProd){
            throw new Error("Existe um produto como esse código")
        }

        this.produtos.push(produto)
        
    }
    public removerProduto(codProd: string): void {

        let indexProd: number = this.produtos.findIndex(prod => prod.codProd == codProd)
        if(indexProd === -1){
            throw new Error("Não existe um produto com esse código")
        }

        this._produtos.splice(indexProd, 1)
        
    }

    public ListarProd(codProd: string){

        let prod: Produto|undefined = this.produtos.find(prod => prod.codProd == codProd)
        if(!prod){
            throw new Error("Não existe um produto com esse código")
        }
        return prod
        
    }
    public ListarProdutos(){return this.produtos}

}