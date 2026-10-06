import { Cliente } from "./entities/Cliente.ts";
import { Produto } from "./entities/Produto.ts";
import { Pedido } from "./entities/Pedido.ts";
import { ItemPedido } from "./entities/ItemPedido.ts";
import { ItemPedidoPromocional } from "./entities/ItemPedidoPromocional.ts";
import { PedidoService } from "./services/PedidoService.ts";
import { ProdutoRepository } from "./repositories/ProdutoRepository.ts";
import {PedidoRepository} from "./repositories/PedidoRepository.ts"
// A partir daqui é da história HU1 até HU5

// const pedidoService = new PedidoService();

const PedidoRepository = new pedidoRepository();
const pedidoService = new PedidoService(PedidoRepository);

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
const pedidoRepository = new PedidoRepository
const pedidoService = new PedidoService(pedidoRepository, produtoRepository)

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

console.log(produtoRepository.buscarPorId(2)) // retornará bolo

// HU7
console.log(produtoRepository.listarProdutos())
console.log(produtoRepository.toString())
console.log(produtoRepository.buscarPorId(99))

// HU8
const Ana = new Cliente("Ana")
const pedido1 = pedidoService.criarPedido(Ana, 1);

// adicionando cafe
pedidoService.adicionarProduto(1,1,2)
// adicionando bolo
pedidoService.adicionarProduto(1, 2, 1)
// Tentando adicionar o produto 99 ao pedido 1
pedidoService.adicionarProduto(1, 99, 67)


//consulta:
pedidoService.buscarPedidoPorId(1)
pedidoService.buscarPedidoPorId(50)

// adicionando produto ao numero 50:
pedidoService.adicionarProduto(50, 1, 13) // 13 é mera coincidência


pedidoService.adicionarProduto(1, 1, 1);
pedidoService.adicionarProduto(1, 2, 1);
pedidoService.finalizarPedido(1);

const bruno = new Cliente("bruno", 2);
const pedido2 = pedidoService.criarPedido(bruno, 2);
PedidoRepository.adicionar(pedido2);

pedidoService.adicionarProduto(2, 3, 2);

const carla = new Cliente("carla", 3);
const pedido3 = pedidoService.criarPedido(carla, 3);
PedidoRepository.adicionar(pedido3);

pedidoService.adicionarProduto(3, 4, 1);
pedidoService.cancelarPedido(3);

const diego = new Cliente("diego");
const pedido4 = pedidoService.criarPedido(diego);
PedidoRepository.adicionar(pedido4);

pedidoService.adicionarProduto(4, 1, 2);
pedidoService.adicionarProduto(4, 4, 1);
pedidoService.finalizarPedido(4);


console.log("aberto", pedidoService.listarSituacao("aberto"));

console.log("finalizado", pedidoService.listarSituacao("finalizado"));

console.log("cancelado", pedidoService.listarSituacao("cancelado"));

console.log(pedidoService.resumoVendas())
