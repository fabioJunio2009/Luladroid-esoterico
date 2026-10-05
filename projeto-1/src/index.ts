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
// Como atendente, quero registrar pedidos informando o código dos produtos, e consultar um pedido pelo seu
// número.
// Ao ser criado, todo pedido deve receber um número, único e sequencial, começando em 1.
// O pedido criado deve ficar registrado no sistema, podendo ser consultado depois pelo seu número.
// As operações sobre um pedido existente passam a ser solicitadas pelo número do pedido e pelo código do
// produto:
// adicionar produto → número do pedido, código do produto, quantidade
// remover produto → número do pedido, código do produto
// alterar quantidade → número do pedido, código do produto, nova quantidade
// finalizar pedido → número do pedido
// cancelar pedido → número do pedido
// Se o pedido ou o produto informado não existir, a operação deve ser rejeitada e nenhum pedido deve ser alterado.
// As regras das histórias HU01 a HU05 continuam valendo.

// 1. Cadastre os quatro produtos do cardápio.
// 2. Crie um pedido para a cliente Ana e apresente o seu número: 1.
// 3. Adicione ao pedido 1: 2 unidades do produto 1 (Café) e 1 unidade do produto 2 (Bolo).
// 4. Tente adicionar o produto 99 ao pedido 1. A operação deve ser rejeitada.
// 5. Consulte o pedido pelo número 1 e apresente seus itens e total:
// Total do pedido: R$ 18,00
// 6. Consulte o pedido de número 50. A consulta deve ser rejeitada (pedido não encontrado).
// 7. Tente adicionar um produto ao pedido 50. A operação deve ser rejeitada.
// Depois de concluir a HU08, adapte as demonstrações da HU01 a HU05 para a nova forma de trabalhar e verifique
// se os resultados continuam os mesmos.

const pedido = pedidoService.criarPedido(cliente, 1);




