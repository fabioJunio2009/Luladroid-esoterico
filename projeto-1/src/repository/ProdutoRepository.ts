import { Produto } from '../entities/Produto.ts'

export class ProdutoRepository {
    private produtos: Produto[] = [];

    adicionarProduto(produto: Produto): void {
        const existe = this.produtos.some((p) => p.cod == produto.cod)

        if (existe == true) {
            console.log('pode nao ja tem produto com esse codigo ')
        }
        else {
            this.produtos.push(produto)
        }
    }

    public get listarTudo(): Produto[] {
        return this.produtos
    }
}