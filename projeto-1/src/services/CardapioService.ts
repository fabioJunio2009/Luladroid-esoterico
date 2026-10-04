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

    public mostrarTodosProd(){


    }
    public mostrarProduto(){
        
    }
}