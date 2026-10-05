import { Cliente } from "./entities/Cliente.ts";
import { Produto } from "./entities/Produto.ts";
import { Pedido } from "./entities/Pedido.ts";
import { ItemPedido } from "./entities/ItemPedido.ts";
import { ItemPedidoPromocional } from "./entities/ItemPedidoPromocional.ts";
import { PedidoService } from "./services/PedidoService.ts";
import { ProdutoRepository } from "./repositories/ProdutoRepository.ts";

// A partir daqui é da história HU1 até HU5

// const pedidoService = new PedidoService();

const cliente = new Cliente("gianloeps");

// const cafe = new Produto("cafe", 5);
// const bolo = new Produto("bolo", 8);
// const suco = new Produto("suco", 6);

// const pedido = pedidoService.criarPedido(cliente);

// pedidoService.adicionarProduto(pedido, cafe, 1);
// pedidoService.adicionarProduto(pedido, bolo, 1);
// pedidoService.adicionarProduto(pedido, suco, 1);

// pedidoService.removerProduto(pedido, "cafe")


// console.log("cliente", cliente.nome);
// console.log("total", pedido.calcularTotal());


// A partir daqui é da história HU6 até HU10

const produtoRepository = new ProdutoRepository
const pedidoService = new PedidoService(produtoRepository)

const cafe = new Produto("cafe", 5, 1);
const bolo = new Produto("bolo", 8, 2);
const suco = new Produto("suco", 6, 3);
const sanduiche = new Produto("sanduiche", 3, 4)

// HU6
produtoRepository.salvarProduto(cafe)
produtoRepository.salvarProduto(bolo)
produtoRepository.salvarProduto(suco)
produtoRepository.salvarProduto(sanduiche)

console.log("Quantidade de produtos: " + produtoRepository.qntdProdutos())

const torta = new Produto("Torta", 10, 2)
produtoRepository.salvarProduto(torta)

console.log(produtoRepository.ListarProd(2)) // retornará bolo

// HU7
console.log(produtoRepository.ListarProdutos())
console.log(produtoRepository.toString())
console.log(produtoRepository.ListarProd(99))

//HU8




