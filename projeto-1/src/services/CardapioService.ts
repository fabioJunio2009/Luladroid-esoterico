import { Cardapio } from "../entities/Cardapio.ts";
import { Produto } from "../entities/Produto.ts";

class CardapioService{
    constructor(){}

    public criarCardapio(){
        return new Cardapio
    }

    public cadastrarProdCardapio(cardapio: Cardapio, produto: Produto){
        cardapio.addProdCardapio(produto)
    }

    public removerDoCardapio(cardapio: Cardapio, codProd:string){
        cardapio.remvProdCardapio(codProd)
    }

    public mostrarProdutos(cardapio: Cardapio){
        return cardapio.toString()
    }
    public mostrarProduto(cardapio: Cardapio, codProd: string){
        return cardapio.buscarProd(codProd)
    }
}