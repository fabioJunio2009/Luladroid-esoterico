
import { Produto } from '../entities/produto.ts'
import {Pedido } from '../entities/Pedido.ts'
 export class ProdutoRepository{
    private produtos: Produto[] = [];

    adicionarProduto(produto:Produto):void{
        //pra ve se tem o codigo igual  pede na hisoria 6
        const existe = this.produtos.some((p) => p.codigo == produto.codigo)
        if(existe == true){
            console.log('pode nao ja tem produto com esse codigo ')
        }
        else{
        this.produtos.push(produto)
        }
    }

   public get listarTudo():any{
    return this.produtos

   }

   public listarSituacao(situacao:string):pedido[] {
    return this.pedidos.filter((l) => l.situacao == situacao)

   }

 }



