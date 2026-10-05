import { Cliente } from "./entities/Cliente.ts";
import { Produto } from "./entities/Produto.ts";
import { Pedido } from "./entities/Pedido.ts";
import { ItemPedido } from "./entities/ItemPedido.ts";
import { ItemPedidoPromocional } from "./entities/ItemPedidoPromocional.ts";

import { PedidoService } from "./services/PedidoService.ts";

import { pedidoRepository } from "./repository/pedidoRepository.ts";

const PedidoRepository = new pedidoRepository();
const pedidoService = new PedidoService(PedidoRepository);

const cafe = new Produto("cafe", 5,1);
const bolo = new Produto("bolo", 8,2);
const suco = new Produto("suco", 6,3);
const sanduiche = new Produto("sanduiche", 15,4);

const cliente = new Cliente("oi")


const ana = new Cliente("ana");
const pedido1 = pedidoService.criarPedido(ana);

pedidoService.adicionarProduto(pedido1, cafe, 1);
pedidoService.adicionarProduto(pedido1, bolo, 1);
pedidoService.finalizarPedido(pedido1);
PedidoRepository.adicionar(pedido1);

const bruno = new Cliente("bruno");
const pedido2 = pedidoService.criarPedido(bruno);

pedidoService.adicionarProduto(pedido2, suco, 2);
PedidoRepository.adicionar(pedido2);

const carla = new Cliente("carla");
const pedido3 = pedidoService.criarPedido(carla);

pedidoService.adicionarProduto(pedido3, sanduiche, 1);
pedidoService.cancelarPedido(pedido3);
PedidoRepository.adicionar(pedido3);

const diego = new Cliente("diego");
const pedido4 = pedidoService.criarPedido(diego);

pedidoService.adicionarProduto(pedido4, cafe, 2);
pedidoService.adicionarProduto(pedido4, sanduiche, 1);
pedidoService.finalizarPedido(pedido4);
PedidoRepository.adicionar(pedido4);


console.log("aberto", pedidoService.listarSituacao("aberto"));

console.log("finalizado", pedidoService.listarSituacao("finalizado"));

console.log("cancelado", pedidoService.listarSituacao("cancelado"));

console.log(pedidoService.resumoVendas())