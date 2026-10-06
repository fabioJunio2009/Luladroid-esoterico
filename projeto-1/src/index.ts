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
const pedido1 = pedidoService.criarPedido(ana, 1);
PedidoRepository.adicionar(pedido1);

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
