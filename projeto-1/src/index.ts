import { Cliente } from "./entities/Cliente.ts";
import { Produto } from "./entities/Produto.ts";
import { Pedido } from "./entities/Pedido.ts";
import { ItemPedido } from "./entities/ItemPedido.ts";
import { ItemPedidoPromocional } from "./entities/ItemPedidoPromocional.ts";

import { PedidoService } from "./services/PedidoService.ts";

const pedidoService = new PedidoService();

const cliente = new Cliente("gianloeps");

const cafe = new Produto("cafe", 5);
const bolo = new Produto("bolo", 8);
const suco = new Produto("suco", 6);

const pedido = pedidoService.criarPedido(cliente);

pedidoService.adicionarProduto(pedido, cafe, 1);
pedidoService.adicionarProduto(pedido, bolo, 1);
pedidoService.adicionarProduto(pedido, suco, 1);

pedidoService.removerProduto(pedido, "cafe")


console.log("cliente", cliente.nome);
console.log("total", pedido.calcularTotal());
