# Luladroid-esoterico
Para atividades avaliativas de poo ou para acompanhar a aula

# 🎓 Programação Orientada a Objetos (POO) — Atividades Avaliativas

> **Disciplina:** Programação Orientada a Objetos  
> **Tema Central:** Arquitetura em Camadas e Estruturação de Sistemas em POO  
> **Linguagem:** Typescript*  

---

## 📌 Sobre o Repositório

Este repositório destina-se ao armazenamento, acompanhamento e entrega das **atividades avaliativas e exercícios práticos** desenvolvidos em sala de aula. 

O foco principal do projeto é compreender e aplicar na prática os conceitos fundamentais de POO aliados ao **padrão de arquitetura em camadas**, garantindo um código modular, coeso e de fácil manutenção.

---

## 🏗️ Arquitetura e Estrutura do Projeto

O sistema é organizado seguindo o modelo clássico de separação de responsabilidades em 3 camadas:

```text
src/
 ├── entities/    --> Camada de Apresentação (Interface com usuário / Menus / CLI)
 ├── services/          --> Camada de Negócio (Entidades, Regras de Negócio e Interfaces)
 └── repositories/            --> Camada de Dados (Persistência, Repositórios e Banco de Dados)
