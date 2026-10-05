import { Produto } from "../entities/Produto.ts";

export class ProdutoRepository{

    private _produtos : Produto[] = []

    public salvarProduto(produto: Produto) : void { 
        
        if(!produto){
            throw new Error("Não há nenhum produto para colocar")
        }   

        const existCodProd: Produto | undefined = this._produtos.find(prod => prod.codProd == produto.codProd)
        
        if(existCodProd){
            throw new Error("Existe um produto como esse código")
        }

        this._produtos.push(produto)
        
    }
    public removerProduto(codProd: number): void {

        let indexProd: number = this._produtos.findIndex(prod => prod.codProd == codProd)
        if(indexProd === -1){
            throw new Error("Não existe um produto com esse código")
        }

        this._produtos.splice(indexProd, 1)
        
    }

    public ListarProd(codProd: number){
        
        let prod: Produto|undefined = this._produtos.find(prod => prod.codProd == codProd)
        if(!prod){
            throw new Error("Não existe um produto com esse código")
        }
        return prod
        
    }
    
    public ListarProdutos(){return this._produtos}

    public qntdProdutos(){return this._produtos.length}

    public toString(){
        let result = this._produtos.reduce((acumulador, prod) => acumulador + prod.toString(), "\n")
        return result
    }

}